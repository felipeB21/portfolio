"use client";

import { useQuery } from "@tanstack/react-query";
import CommentForm from "./form";
import Image from "next/image";
import { api } from "@/lib/eden";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  createdAt: Date;
  user: CommentUser;
}

export default function CommentSection({ target }: Props) {
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const { data: commentsWithExtra = [], isLoading } = useQuery<Comment[]>({
    queryKey: ["comments", target, page],
    queryFn: async () => {
      const res = await api.comments.get({
        query: { target, limit: pageSize + 1, offset: page * pageSize },
      });
      if (!res.data) return [];

      return res.data.map((item) => ({
        id: item.comment.id,
        content: item.comment.content,
        createdAt: item.comment.createdAt,
        user: {
          id: item.user.id,
          name: item.user.name,
          image: item.user.image,
        },
      }));
    },
    placeholderData: (prev) => prev,
  });

  const hasMore = commentsWithExtra.length > pageSize;
  const comments = hasMore
    ? commentsWithExtra.slice(0, pageSize)
    : commentsWithExtra;

  return (
    <section>
      <CommentForm target={target} />
      <div className="space-y-4 mt-6">
        {isLoading && <p>Loading comments...</p>}
        {!isLoading && comments.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Be the first to comment.
          </p>
        )}
        <div className="space-y-4 mt-6 min-h-54">
          {comments.map((c) => (
            <div key={c.id}>
              <div className="flex justify-between text-sm">
                <div className="flex gap-2">
                  <Image
                    src={c.user.image ?? "/avatar.png"}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex flex-col">
                    <strong>{c.user.name}</strong>
                    <p>{c.content}</p>
                  </div>
                </div>
                <span className="text-muted-foreground">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 0) setPage(page - 1);
                }}
                className={
                  page === 0
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            <PaginationItem>
              <span className="text-sm font-medium px-4">Page {page + 1}</span>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (hasMore) setPage(page + 1);
                }}
                className={
                  !hasMore ? "pointer-events-none opacity-50" : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
