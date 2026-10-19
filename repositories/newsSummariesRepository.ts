import {db} from "../src/db"
export async function fetchNewsSummariesRepository() {
  return db.query.newsSummariesTable.findMany({
    columns: { blurb_title: true, content: true, sources: true },
    orderBy: { id: "desc" },
    limit: 20,
  });
}