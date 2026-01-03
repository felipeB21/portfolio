import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import GitHubSvg from "./github-svg";
import { LINKS } from "@/lib/links";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between max-w-3xl mx-auto p-5">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-lg font-bold">
          Felipe Bolgar
        </Link>
        <nav>
          <ul className="sm:flex items-center gap-5 hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone-700 hover:text-black dark:text-stone-300 dark:hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          asChild
          variant="outline"
          className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
        >
          <Link
            href="https://github.com/felipeB21"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-default"
          >
            <GitHubSvg />
          </Link>
        </Button>
      </div>
    </header>
  );
}
