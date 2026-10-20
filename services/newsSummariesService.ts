// services/newsSummariesService.ts
import { fetchNewsSummariesRepository } from "@/repositories/newsSummariesRepository";

export async function fetchNewsSummariesService() {
  const rows = await fetchNewsSummariesRepository();

  return rows.map((row) => ({
    createdAt: row.createdAt ?? "No Date Found",
    content: row.content ?? "",
    sources: row.sources ?? [],
    title: row.title ?? "Untitled",
  }));
}
