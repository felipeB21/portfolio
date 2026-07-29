"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

const STACK = [
  "Next.js",
  "TypeScript",
  "Drizzle",
  "PostgreSQL",
  "Supabase",
  "Better Auth",
  "TailwindCSS",
  "ShadcnUI",
  "AWS",
  "TanStack Query",
  "Astro",
];

const FEATURED = [
   {
  name: "AskYourDocs",
  description:
    "Upload PDFs and documents, then chat with an AI-powered assistant to ask questions and get answers from your files.",
  href: "https://askyourdocs.app",
},
  {
    name: "Cábala",
    description:
      "Predict Argentine football and CONMEBOL matches, earn points, climb the leaderboard.",
    href: "https://cabala.ar",
  },
  {
    name: "Wincurs",
    description:
      "A community hub to upload and download custom Windows cursor packs.",
    href: "https://wincurs.vercel.app",
  }
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="space-y-4 pb-10">
        <h1 className="font-semibold  tracking-wide">Full Stack Developer</h1>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          I build scalable web applications end to end, from database schema to
          the last pixel of the UI. Based in Buenos Aires, Argentina — open to
          new opportunities and collaborations.
        </p>
        <div className="flex gap-3 pt-1">
          <Button asChild size="xs">
            <Link href={"/Felipe Bolgar - CV.pdf"} target="_blank">
              Download resume <ArrowDown />
            </Link>
          </Button>
          <Button asChild size="xs">
            <Link href="/projects">View projects</Link>
          </Button>
          <Button asChild size="xs" variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="space-y-3 border-t border-border py-8"
      >
        <h2 className="font-semibold ">Currently working with</h2>
        <div className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="space-y-4 border-t border-border py-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Featured work</h2>
        </div>

        <div className="divide-y divide-border">
          {FEATURED.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-1 py-4 first:pt-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">{project.name}</h3>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {project.href.replace(/^https?:\/\//, "")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <p className="leading-relaxed ">{project.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
