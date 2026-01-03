import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MDXPost from "@/components/mdx-post";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BLOG_PATH = path.join(process.cwd(), "content");

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {};
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return {
    title: `${data.title} - Felipe Bolgar`,
    description: data.description,
    keywords: data.tags,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return (
    <article className="mx-auto max-w-3xl">
      <Link href={"/blog"} className="flex items-center gap-2 w-max">
        <ArrowLeft />
        Back
      </Link>
      <header className="mt-5">
        <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>

        <div className="mt-4 flex items-center gap-4 text-sm dark:text-stone-300 text-stone-700">
          <time>{data.date}</time>

          {data.tags?.map((tag: string) => (
            <span key={tag} className="rounded-full border px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <MDXPost slug={slug} />

      <footer className="mt-16 border-t pt-6 text-sm dark:text-stone-300 text-stone-700">
        Thanks for reading.
      </footer>
    </article>
  );
}
