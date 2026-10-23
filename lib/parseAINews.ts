// lib/parseFeed.ts
import { ReactNode } from "react";
import { FeedItem } from "./types";

export function parseFeed(raw: string): FeedItem[] {
  return raw
    .split(/^\s*(?=\d+\.\s+\*\*)/m) // split before each "1. **" style line
    .map((chunk) => {
      // "N. **Title**: summary text [Source](url)"
      const match = chunk.match(
        /^\s*\d+\.\s+\*\*(.+?):?\*\*:?\s*([\s\S]*?)\s*\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/,
      );
      if (!match) return null; // header line, blank chunk, or malformed item

      const [, title, summary, url] = match;

      let domain = url;
      try {
        domain = new URL(url).hostname.replace(/^www\./, "");
      } catch {}

      return {
        title: title.trim(),
        summary: summary.replace(/\s+/g, " ").trim(),
        url,
        domain,
      };
    })
    .filter((item): item is FeedItem => item !== null);
}

export function getDomain(input: string): string {
  try {
    let domain = new URL(input.replace(/^:/, "")).hostname.replace(
      /^www\./,
      "",
    );
    return domain;
  } catch {
    return input; // fall back to the raw string if it isn't a valid URL
  }
}

