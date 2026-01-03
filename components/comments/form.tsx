"use client";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { api } from "@/lib/eden";
import GitHubSvg from "../github-svg";

type Props = {
  target: string;
};

interface CommentUser {
  id: string;
  name: string;
  image: string | null;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: CommentUser;
}

export default function CommentForm({ target }: Props) {
  const { data: session, isPending, isRefetching } = authClient.useSession();
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newContent: string) => {
      const res = await api.comments.post({ content: newContent, target });
      setError(res.error?.value.message);
      return res.data;
    },

    onMutate: async (newContent) => {
      await queryClient.cancelQueries({
        queryKey: ["comments", target],
      });

      const previousComments =
        queryClient.getQueryData<Comment[]>(["comments", target]) ?? [];

      queryClient.setQueryData<Comment[]>(["comments", target], (old = []) => [
        ...old,
        {
          id: crypto.randomUUID(),
          content: newContent,
          createdAt: new Date().toISOString(),
          user: {
            id: session!.user.id,
            name: session!.user.name,
            image: session!.user.image ?? null,
          },
        },
      ]);

      setContent("");

      return { previousComments };
    },

    onError: (err, _vars, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          ["comments", target],
          context.previousComments
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", target],
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      setRedirecting(true);
      await authClient.signIn.social({
        provider: "github",
        errorCallbackURL: "/",
      });
      return;
    }

    if (!content.trim()) return;

    mutation.mutate(content);
  };

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <div className="relative group">
        <Textarea
          className="resize-none min-h-30 pb-12 pr-4"
          placeholder={
            session
              ? "Say me something!"
              : "Log in with GitHub to leave a comment"
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={!session || mutation.isPending}
        />
        <div className="absolute bottom-2 right-2">
          <Button
            type="submit"
            size="sm"
            variant="outline"
            className="rounded-xl cursor-pointer"
            disabled={
              mutation.isPending ||
              isPending ||
              isRefetching ||
              redirecting ||
              !!(session && !content.trim())
            }
          >
            {redirecting ? (
              "Redirecting..."
            ) : isPending || isRefetching ? (
              "Checking for session..."
            ) : !session ? (
              <div className="flex items-center gap-2">
                <GitHubSvg />
                Login with GitHub
              </div>
            ) : mutation.isPending ? (
              "Sending..."
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
