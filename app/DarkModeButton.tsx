"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme; // get the current theme
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-yellow-500 mt-1"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-gray-900 mt-1"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
