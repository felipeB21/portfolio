import type { Metadata } from "next";
import ProjectsGrid from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of full-stack apps I've built — from a football prediction platform to real-time encrypted chat.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-10 space-y-2">
        <p className="font-medium uppercase tracking-wide">Work</p>
        <h1 className="font-bold tracking-tight text-xl">Projects</h1>
        <p className="leading-relaxed">
          Things I&apos;ve designed, built, and shipped end to end.
        </p>
      </div>
      <ProjectsGrid />
    </div>
  );
}
