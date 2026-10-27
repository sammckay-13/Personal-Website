"use client";

import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}

          className=" h-10 w-11 -ml-1  bg-[#49362D] hover:text-[#FFFBEE] hover:bg-[#5a4438] focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
        >
          <FaRegMoon className="text-[#FFFBEE] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <LuSun className="absolute text-[#FFFBEE] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-[#6f5345] text-[#fffbee] text-md border border-[#fffbee]">
        Switch to {theme === "light" ? "dark" : "light"} mode
      </TooltipContent>
    </Tooltip>
  );
}
