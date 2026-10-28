import { newsSummariesTable } from "@/src/db/schema";
import { db } from "../src/db";
import { desc } from "drizzle-orm";

export async function fetchNewsSummariesRepository() {
  return db
    .select({
      id: newsSummariesTable.id,
      createdAt: newsSummariesTable.createdAt,
      content: newsSummariesTable.content,
      title: newsSummariesTable.title,
      sources: newsSummariesTable.sources,
    })
    .from(newsSummariesTable)
    .orderBy(desc(newsSummariesTable.createdAt));
}
