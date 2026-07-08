"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center my-50 text-center"
    >
      <h1 className="font-bold">404 - Page Not Found</h1>
      <p className="mt-4 ">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium  flex items-center gap-2"
      >
        <ArrowLeft size={13} />
        Go back home
      </Link>
    </motion.div>
  );
}
