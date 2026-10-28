// actions/forumActions.ts
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { getOrCreateAnonId } from "@/lib/anon-id";
import { REACTION_TYPES } from "@/lib/reactions";
import { forumService } from "@/services/forumService";
import { readAnonId } from "@/lib/anon-id";

// ---- Posts ----
// actions/forumActions.ts (replace the posts section)

export async function fetchPostsAction() {
  const posts = await forumService.fetchAllPosts();
  const mine = await forumService.getMyReactions(
    posts.map((p) => p.id),
    await readAnonId() // read-only: returns null for first-time visitors
  );
  return posts.map((p) => ({ ...p, myReaction: mine[p.id] ?? null }));
}

// ---- Reactions ----
const reactSchema = z.object({
  postId: z.number().int().positive(),
  type: z.enum(REACTION_TYPES),
});
export type ReactInput = z.infer<typeof reactSchema>;

export async function reactAction(input: ReactInput) {
  const { postId, type } = reactSchema.parse(input); // public endpoint: always validate
  const anonId = await getOrCreateAnonId();
  const result = await forumService.react(postId, type, anonId);
  revalidatePath("/forum");
  return result;
}