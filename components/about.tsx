import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React", href: "https://react.dev" },
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "TypeScript", href: "https://www.typescriptlang.org" },
  { name: "PostgreSQL", href: "https://www.postgresql.org" },
  { name: "DrizzleORM", href: "https://orm.drizzle.team" },
  { name: "AWS", href: "https://aws.amazon.com" },
  { name: "Supabase", href: "https://supabase.com" },
];

export default function About() {
  return (
    <div className="font-mono my-10">
      <div className="flex items-center gap-3">
        <h5 className="font-medium">Full Stack Developer.</h5>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Available for new opportunities
        </Badge>
      </div>
      <p className="text-sm mt-2 text-muted-foreground text-pretty">
        I build modern web applications using{" "}
        {technologies.map((tech, i) => (
          <Fragment key={tech.name}>
            <a
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {tech.name}
            </a>
            {i < technologies.length - 1 ? ", " : ""}
          </Fragment>
        ))}
        , and more... I enjoy creating products with clean user experiences,
        modern architectures and strong attention to performance, SEO and
        accessibility. Available for freelance and full-time opportunities.
      </p>
    </div>
  );
}
