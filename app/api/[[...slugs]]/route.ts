import { Elysia, t } from "elysia";
import { db } from "@/db";
import { comment, user } from "@/db/schema";
import { serverSession } from "@/lib/auth-server";
import { eq } from "drizzle-orm";

const app = new Elysia({ prefix: "/api/comments" })
  .get(
    "/",
    async ({ query }) => {
      const { target, limit, offset } = query;
      return await db
        .select({
          comment: {
            id: comment.id,
            content: comment.content,
            userId: comment.userId,
            target: comment.target,
            createdAt: comment.createdAt,
          },
          user: {
            id: user.id,
            name: user.name,
            image: user.image,
          },
        })
        .from(comment)
        .innerJoin(user, eq(comment.userId, user.id))
        .where(eq(comment.target, target))
        .orderBy(comment.createdAt)
        .limit(limit ?? 10)
        .offset(offset ?? 0);
    },
    {
      query: t.Object({
        target: t.String(),
        limit: t.Optional(t.Numeric()),
        offset: t.Optional(t.Numeric()),
      }),
    }
  )
  .post(
    "/",
    async ({ body, set }) => {
      const session = await serverSession();
      if (!session?.user) {
        set.status = 401;
        return { error: "Unauthorized" };
      }
      const { content, target } = body;

      const [newComment] = await db
        .insert(comment)
        .values({
          content,
          target,
          userId: session.user.id,
          createdAt: new Date(),
        })
        .returning();

      return newComment;
    },
    {
      body: t.Object({
        content: t.String({ minLength: 1, maxLength: 200 }),
        target: t.String(),
      }),
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;
export type App = typeof app;
