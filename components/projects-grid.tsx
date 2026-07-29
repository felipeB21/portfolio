"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EASE = [0.16, 1, 0.3, 1] as const;

type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
  name: "AskYourDocs",
  description:
    "Upload PDFs and documents, then chat with an AI-powered assistant to ask questions and get answers from your files.",
  stack: [
    "Next.js",
    "TanStack Query",
    "TailwindCSS",
    "PostgreSQL",
    "Vercel AI SDK",
    "ShadcnUI",
    "Supabase",
  ],
  href: "https://askyourdocs.app",
},
  {
    name: "Cábala",
    description:
      "Predict Argentine football and CONMEBOL matches, earn points, climb the leaderboard.",
    stack: [
      "Next.js",
      "Drizzle",
      "Supabase",
      "PostgreSQL",
      "Better Auth",
      "API",
      "TailwindCSS",
      "ShadcnUI",
    ],
    href: "https://cabala.ar",
  },
  {
    name: "Wincurs",
    description:
      "A community hub to upload and download custom Windows cursor packs.",
    stack: [
      "Next.js",
      "Drizzle",
      "Supabase",
      "PostgreSQL",
      "Better Auth",
      "PolarSH",
      "AWS",
      "TailwindCSS",
    ],
    href: "https://wincurs.vercel.app",
  },
  {
    name: "Spotify",
    description:
      "An interactive replica of the Spotify web interface. This project recreates the user experience (UI/UX) of the popular streaming platform, featuring a fully functional music player that all[...]",
    stack: ["React", "Zustand", "TypeScript", "TailwindCSS"],
    href: "https://spotifyui.vercel.app",
  },
  {
    name: "AnonAsk",
    description:
      "Ask anything, anonymously — questions and replies with identities hidden.",
    stack: [
      "Next.js",
      "TanStack Query",
      "Redis",
      "ElysiaJS",
      "Better Auth",
      "TailwindCSS",
      "ShadcnUI",
    ],
    href: "https://github.com/felipeB21/AnonAsk",
  },
  {
    name: "RealTimeChat",
    description: "Private, real-time chat rooms with end-to-end encryption.",
    stack: [
      "Next.js",
      "TanStack Query",
      "Redis",
      "ElysiaJS",
      "Better Auth",
      "TailwindCSS",
      "ShadcnUI",
      "WebSockets",
    ],
    href: "https://github.com/felipeB21/realtime-chat",
  },
  {
    name: "AskYourDocs",
    description:
      "Upload PDFs and documents, then chat with an AI-powered assistant to ask questions and get answers from your files.",
    stack: [
      "Next.js",
      "TanStack Query",
      "TailwindCSS",
      "PostgreSQL",
      "Vercel AI SDK",
      "ShadcnUI",
      "Supabase",
    ],
    href: "https://askyourdocs.app",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function ProjectsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="divide-y divide-border"
    >
      {PROJECTS.map((project) => (
        <motion.div
          key={project.name}
          variants={item}
          className="flex flex-col gap-2 py-6 first:pt-0"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-semibold">{project.name}</h3>
            {project.href && (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {project.href
                  .replace(/^https?:\/\/(www\.)?github\.com\//, "")
                  .replace(/^https?:\/\//, "")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>

          <p className=" leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
