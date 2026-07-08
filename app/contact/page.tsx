import type { Metadata } from "next";
import ContactSection from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Felipe Bolgar — email, LinkedIn, and GitHub.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="mb-10 space-y-2">
        <p className="font-medium uppercase tracking-wide ">Get in touch</p>
        <h1 className="text-xl font-bold tracking-tight">Contact</h1>
        <p className="leading-relaxed text-muted-foreground">
          Have a project in mind or just want to say hi? Reach out.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
