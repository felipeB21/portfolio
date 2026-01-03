import Link from "next/link";
import { Metadata } from "next";

const title = "Page Not Found";
const description = "Could not find requested resource";

export const metadata: Metadata = {
  title: `${title} - Felipe Bolgar`,
  description,
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60dvh] gap-2">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-lg dark:text-stone-300 text-stone-700">
        {description}
      </p>
      <Link href="/" className="hover:underline">
        Return to Home Page
      </Link>
    </div>
  );
}
