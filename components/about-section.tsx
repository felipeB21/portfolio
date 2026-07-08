"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const shapeVariant: Variants = {
  hidden: { opacity: 0, y: 24, rotate: -6, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const textLine: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid  grid-cols-1 items-center gap-12 p-2 md:grid-cols-2"
    >
      <motion.div
        variants={shapeVariant}
        className="relative mx-auto aspect-square w-full max-w-sm"
      >
        <motion.div
          variants={shapeVariant}
          className="absolute -left-6 -top-6 h-24 w-24 rounded-full border-4 border-primary/40"
        />

        <motion.div
          variants={shapeVariant}
          className="absolute -bottom-8 -right-4 h-20 w-20 rotate-6 rounded-2xl bg-primary/80"
        />

        <motion.div
          variants={shapeVariant}
          className="absolute -right-8 top-10 h-16 w-28 rounded-xl border border-border bg-muted/60 backdrop-blur-sm"
        >
          <div className="flex gap-1 p-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          variants={shapeVariant}
          className="relative z-10 h-full w-full overflow-hidden rounded-3xl border border-border shadow-xl"
        >
          <Image
            src="/me.jpg"
            alt="Felipe Bolgar"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Bio */}
      <div className="space-y-5">
        <motion.p
          variants={textLine}
          className="font-medium uppercase tracking-wide"
        >
          About me
        </motion.p>

        <motion.h2
          variants={textLine}
          className="text-xl font-bold tracking-tight"
        >
          Hey, I&apos;m Felipe.
        </motion.h2>

        <motion.p variants={textLine} className="leading-relaxed ">
          I&apos;m a software engineer based in Buenos Aires, Argentina. I build
          full-stack web apps end to end — from database schema to the last
          pixel of the UI — and I care more about shipping something real than
          talking about it.
        </motion.p>

        <motion.p variants={textLine} className=" leading-relaxed ">
          Most of what I build lives on Next.js, TypeScript, and PostgreSQL, and
          I&apos;m usually juggling a few side projects at once. One thread that
          keeps coming back: football. I&apos;m a huge fan of Argentine
          football, and I ended up building a prediction platform for the local
          leagues just because I wanted it to exist.
        </motion.p>

        <motion.p variants={textLine} className=" leading-relaxed">
          When I&apos;m not deep in a codebase, I&apos;m probably refining this
          site, obsessing over some UI detail no one else will notice, or
          watching a match.
        </motion.p>
      </div>
    </motion.section>
  );
}
