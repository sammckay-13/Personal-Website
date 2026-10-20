// lib/parseFeed.ts
export type FeedItem = {
  source: string;
  text: string;
  url: string;
  domain: string;
};

export function parseFeed(raw: string): FeedItem[] {
  return raw
    .split(/\s+-\s+(?=\[)/) // items are separated by " - [" 
    .map((chunk) => chunk.trim())
    .map((chunk) => {
      const match = chunk.match(/^\[([^\]]+)\]\s+([\s\S]*?)\s+(https?:\/\/\S+)$/);
      if (!match) return null;
      const [, source, text, url] = match;
      let domain = url;
      try {
        domain = new URL(url).hostname.replace(/^www\./, "");
      } catch {}
      return { source, text, url, domain };
    })
    .filter((item): item is FeedItem => item !== null);
}

export function getDomain(input: string): string {
    try {
      return new URL(input.replace(/^:/, "")).hostname.replace(/^www\./, "");
    } catch {
      return input; // fall back to the raw string if it isn't a valid URL
    }
}