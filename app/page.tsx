import Image from "next/image";
import { LINKS } from "@/lib/links";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Weather from "@/components/weather";
import CommentSection from "@/components/comments/section";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-2">
        <div className="sm:flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <p>Hello! </p>
              <Image
                src={"/waving.png"}
                alt="Waving Hand"
                width={20}
                height={20}
              />
            </div>
            <h1 className="font-bold text-xl">
              I&apos;m a Full Stack Web Developer.
            </h1>
          </div>
          <Weather />
        </div>
        <Socials />
      </div>
      <div>
        <h2 className="text-5xl font-bold uppercase">
          Feel free to explore my portfolio!
        </h2>
        <ul className="flex items-center gap-5 mt-2 ">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xl flex items-center dark:text-stone-300 text-stone-700 hover:underline"
              >
                {link.label}
                <ArrowUpRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-5xl font-bold uppercase">Leave me a comment</h2>
        <CommentSection target="home" />
      </div>
    </div>
  );
}
