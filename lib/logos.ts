// lib/logos.ts
import type { StaticImageData } from "next/image";
import techcrunch from "@/assets/imgs/logos/techcrunch.png";
import arstechnica from "@/assets/imgs/logos/arstechnica.png";
import venturebeat from "@/assets/imgs/logos/venturebeat.png";
import bgr from "@/assets/logos/imgs/bgr.svg";
import nineToFiveMac from "@/assets/imgs/logos/9to5mac.png"; // variable names can't start with a digit

const LOGOS: Record<string, StaticImageData> = {
  "techcrunch.com": techcrunch,
  "arstechnica.com": arstechnica,
  "venturebeat.com": venturebeat,
  "bgr.com": bgr,
  "9to5mac.com": nineToFiveMac,
};

export function getLogo(domain: string): StaticImageData | null {
  const parts = domain
    .toLowerCase()
    .replace(/^www\./, "")
    .split(".");

  // Also matches subdomains like "feeds.arstechnica.com"
  for (let i = 0; i < parts.length - 1; i++) {
    const candidate = parts.slice(i).join(".");
    if (LOGOS[candidate]) return LOGOS[candidate];
  }
  return null;
}
