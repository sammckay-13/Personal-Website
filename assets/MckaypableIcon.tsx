"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const MckaypableIcon = ({ color }: { color?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeColor =
    color ?? (mounted && resolvedTheme === "dark" ? "#D9C8B3" : "#49362D");

  return (
    <svg viewBox="0 0 22 22" width="100%" height="100%" className="mr-1.5">
      <path
        d="M 1.95,9.75 L 9.75, 1.95 L 17.55,9.75"
        fill="transparent"
        stroke={themeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 9.75,9.75 L 17.55, 1.95 L 25.35,9.75"
        fill="transparent"
        stroke={themeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 1.95,9.75 L 25.35, 9.75"
        fill="transparent"
        stroke={themeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 1.95, 9.75 L 9.75,17.55 L 17.55,9.75"
        fill="transparent"
        stroke={themeColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 9.75, 9.75 L 17.55,17.55 L 25.35,9.75"
        fill="transparent"
        stroke={themeColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
