import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  image: string;
  url: string;
  sourcecode: string;
  favicon: string;
};

const projects: Project[] = [
  {
    name: "Cábala - Predicciones de fútbol argentino",
    image: "/cabala.png",
    url: "https://cabala.ar/",
    sourcecode: "https://github.com/felipeb21/cabala",
    favicon: "/cabala.ico",
  },
  {
    name: "Wincurs - Community cursors for Windows",
    image: "/wincurs.png",
    url: "https://wincurs.vercel.app/",
    sourcecode: "https://github.com/felipeb21/wincurs",
    favicon: "/favicon.ico",
  },
];

export default function Projects() {
  return (
    <div className="my-10">
      <h5 className="font-mono font-medium">Projects</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <Card key={project.url}>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <Image
                  src={project.favicon}
                  alt={`${project.name} favicon`}
                  width={16}
                  height={16}
                  className="mt-1 shrink-0"
                />
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                width={300}
                height={200}
                sizes="(max-width: 640px) 100vw, 300px"
                className="rounded-lg w-full h-auto"
                priority={index === 0}
              />
            </CardContent>
            <CardFooter className="flex items-center gap-1">
              <Button asChild variant="secondary" size="xs">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs"
                >
                  Visit Project
                </Link>
              </Button>
              <Button asChild size="xs">
                <Link
                  href={project.sourcecode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-xs"
                >
                  Source Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        asChild
        variant="link"
        size="xs"
        className="mt-5 flex items-center justify-center"
      >
        <Link
          href="https://github.com/felipeb21"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all my projects on GitHub
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </Button>
    </div>
  );
}
