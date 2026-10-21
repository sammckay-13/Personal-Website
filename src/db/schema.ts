import { integer, json, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const newsSummariesTable = pgTable("news-summaries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  content: text(),
  sources: json(),
  title: text(),
});
 