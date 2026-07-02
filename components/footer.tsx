"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

  return (
    <footer className="mb-14">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-10">
        <p className="text-xs text-muted-foreground text-pretty">
          &copy; {new Date().getFullYear()} Felipe Bolgar. All rights reserved.
        </p>
        <Button
          variant="link"
          size="xs"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="font-mono"
          disabled={!isClient}
        >
          theme: {isClient ? theme : "\u00A0"}
        </Button>
      </div>
    </footer>
  );
}
