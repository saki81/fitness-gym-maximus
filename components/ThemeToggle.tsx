"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-accent cursor-pointer"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        // instant placeholder icon
        <Moon
          size={22}
          className="opacity-70"
        />
      ) : isDark ? (
        <Sun size={22} />
      ) : (
        <Moon size={22} />
      )}
    </Button>
  );
}