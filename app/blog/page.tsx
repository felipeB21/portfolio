import TitleComponent from "@/components/title";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const title = "Blog";
const description = "Technical articles and thoughts";

export const metadata: Metadata = {
  title: `${title} - Felipe Bolgar`,
  description,
};

export default function BlogsPage() {
  const posts = getAllPosts();
  return (
    <div>
      <TitleComponent title="Blog" />
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold group-hover:underline">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground mt-1">{post.date}</p>

              <p className="mt-2 dark:text-stone-300 text-stone-700">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
