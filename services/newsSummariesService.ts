// services/newsSummariesService.ts
import { fetchNewsSummariesRepository } from "@/repositories/newsSummariesRepository";

export async function fetchNewsSummariesService() {
  const rows = await fetchNewsSummariesRepository();

  return rows.map((row) => ({
    title: row.title ?? "Untitled",
    content: row.content ?? "",
    sources: row.sources ?? [],
    createdAt: row.createdAt ?? "No Date Found",
  }));
}
