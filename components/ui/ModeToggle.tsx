"use client";

import { Moon, Sun } from "lucide-react";
import {FaRegMoon} from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-0 z-50 -ml-1 bg-[#49362D] w-11 h-10 hover:text-[#FFFBEE] hover:bg-[#5a4438] focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
    >
      <FaRegMoon className="text-[#FFFBEE] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <LuSun className="absolute text-[#FFFBEE] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
