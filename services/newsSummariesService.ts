// services/newsSummariesService.ts
import { fetchNewsSummariesRepository } from "@/repositories/newsSummariesRepository";

export async function fetchNewsSummariesService() {
  const rows = await fetchNewsSummariesRepository();

  return rows.map((row) => ({
    title: row.blurb_title ?? "Untitled",
    content: row.content ?? "",
    sources: Array.isArray(row.sources)
      ? row.sources.map((s: { url: string }) => s.url)
      : [],
  }));
}