"use client";

import { Moon, Sun } from "lucide-react";
import {FaRegMoon} from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-0 items-center justify-right z-50 mr-0 bg-transparent hover:bg-[#49362D] focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer w-full &[&>svg]:h-10 [&>svg]:w-10"
    >
      <FaRegMoon className="h-[1.2rem] w-[1.2rem] text-[#FFFBEE] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <IoSunnyOutline className="absolute h-10 w-[1.2rem] text-[#FFFBEE] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
