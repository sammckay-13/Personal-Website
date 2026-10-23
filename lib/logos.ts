// lib/logos.ts
import type { StaticImageData } from "next/image";
import techcrunch from "@/assets/imgs/logos/techcrunch.png";
import arstechnica from "@/assets/imgs/logos/arstechnica.png";
import venturebeat from "@/assets/imgs/logos/venturebeat.png";
import bgr from "@/assets/imgs/logos/bgr.svg";
import nineToFiveMac from "@/assets/imgs/logos/NineToFive.png"; // variable names can't start with a digit

const LOGOS: Record<string, StaticImageData> = {
  techcrunch: techcrunch,
  arstechnica: arstechnica,
  venturebeat: venturebeat,
  bgr: bgr,
  "9to5mac": nineToFiveMac,
};

export function getLogo(domain: string): StaticImageData | null {
  const labels = domain
    .toLowerCase()
    .replace(/^www\./, "")
    .split(".")
    .slice(0, -1); // drop the TLD (.com, .org, ...)

  // "feeds.arstechnica.com" -> ["feeds", "arstechnica"] -> checks "arstechnica" first
  for (let i = labels.length - 1; i >= 0; i--) {
    if (LOGOS[labels[i]]) return LOGOS[labels[i]];
  }
  return null;
}
