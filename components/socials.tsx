import Link from "next/link";
import { Button } from "./ui/button";
import GitHubSvg from "./github-svg";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" variant={"outline"} asChild>
        <Link href={"/felipebolgar.pdf"} download>
          Download CV <Download />
        </Link>
      </Button>
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
      <Button
        asChild
        variant="outline"
        className="rounded-full w-9 h-9 p-0 flex items-center justify-center"
      >
        <Link
          href="https://www.linkedin.com/in/felipebolgar/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-default"
        >
          <Image
            src={"/linkedin.svg"}
            alt="Linkeding"
            width={18}
            height={18}
            className="rounded-full"
          />
        </Link>
      </Button>
    </div>
  );
}
