"use server";

import { fetchNewsSummariesService } from "@/services/newsSummariesService";

export async function fetchNewsSummariesAction() {
  return fetchNewsSummariesService();
}
