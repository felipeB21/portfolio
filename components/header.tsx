import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-xl font-bold">Hi, I&apos;m Felipe Bolgar.</h1>
      </Link>

      <div className="flex items-center gap-1">
        <Button asChild variant="ghost" size="icon">
          <Link href={"https://github.com/felipeB21"} target="_blank">
            <Image
              src="/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="invert dark:invert-0"
            />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
