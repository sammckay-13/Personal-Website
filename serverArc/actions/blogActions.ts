"use server";

import { fetchNewsSummariesService } from "@/serverArc/services/newsSummariesService";

export async function fetchNewsSummariesAction() {
  return fetchNewsSummariesService();
}
