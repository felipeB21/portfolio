import type { Metadata } from "next";
import AboutSection from "@/components/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Felipe Bolgar, an Argentine full-stack developer specializing in Next.js, TypeScript, and PostgreSQL, and the story behind his projects.",
};

export default function About() {
  return <AboutSection />;
}
