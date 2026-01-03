import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export function getAllPosts(): BlogPost[] {
  return fs.readdirSync(BLOG_PATH).map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(path.join(BLOG_PATH, file), "utf8");
    const { data } = matter(source);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
}
