import { db } from "../src/db";

export async function fetchNewsSummariesRepository() {
  return db.query.newsSummariesTable.findMany({
    columns: {
      title: true,
      content: true,
      sources: true,
      createdAt: true,
    },
    orderBy: { id: "desc" },
    limit: 20,
  });
}
