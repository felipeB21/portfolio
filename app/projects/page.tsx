import TitleComponent from "@/components/title";
import { Metadata } from "next";
import Link from "next/link";

const title = "Projects";
const description = "Explore my projects!";
const projects = [
  {
    href: "https://github.com/felipeB21/wincurs",
    label: "wincurs",
    desc: "A modern web application for discovering, previewing, and downloading custom mouse cursors, designed with a clean and user-friendly interface.",
  },
  {
    href: "https://github.com/felipeB21/realtime-chat",
    label: "Real Time Chat",
    desc: "A real-time chat application built with Next.js, Redis, React Query, and Upstash Realtime, focused on low-latency communication and scalability.",
  },
  {
    href: "https://github.com/felipeB21/AnonAsk",
    label: "AnonAsk",
    desc: "An anonymous Q&A web application built with Next.js, ElysiaJS, and Redis. It allows users to share unique links and receive anonymous responses in a fully private and interactive experience.",
  },
  {
    href: "https://github.com/felipeB21/bolgar-notes-challenge",
    label: "Notes Challenge",
    desc: "A notes CRUD application built with NestJS and React, developed as part of a technical challenge for a job application.",
  },
] as const;

export const metadata: Metadata = {
  title: `${title} - Felipe Bolgar`,
  description,
};

export default function ProjectsPage() {
  return (
    <div>
      <TitleComponent title="Projects" />
      <ul className="flex flex-col">
        {projects.map((p) => (
          <Link
            href={p.href}
            target="_blank"
            key={p.label}
            className="border-b rounded-md p-3 dark:hover:bg-stone-800/50 hover:bg-stone-200/50"
          >
            <h1 className="text-md font-bold">{p.label}</h1>
            <p className="text-sm dark:text-stone-300 text-stone-700">
              {p.desc}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
