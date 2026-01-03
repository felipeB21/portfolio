"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function MDXPost({ slug }: Props) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`@/content/${slug}.mdx`).then((mod) => {
      setContent(() => mod.default);
    });
  }, [slug]);

  if (!Content) return null;

  return (
    <div className="py-5">
      <Content />
    </div>
  );
}
