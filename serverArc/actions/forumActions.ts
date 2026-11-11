// actions/forumActions.ts
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { getOrCreateAnonId } from "@/lib/anon-id";
import { REACTION_TYPES } from "@/lib/reactions";
import { forumService } from "@/serverArc/services/forumService";
import { readAnonId } from "@/lib/anon-id";

// ---- Posts ----
// actions/forumActions.ts (replace the posts section)

export async function fetchPostsAction() {
  const posts = await forumService.fetchAllPosts();
  const myReactions = await forumService.getMyReactions(
    posts.map((p) => p.id),
    await readAnonId(), // read-only: returns null for first-time visitors
  );
  return posts.map((p) => ({ ...p, myReaction: myReactions[p.id] ?? null }));
}

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export type postInput = z.infer<typeof postSchema>;

export async function submitPost(input: postInput) {
  const { content, title } = postSchema.parse(input);
  const result = await forumService.submitPost(title, content);
  revalidatePath("/forum");
  return result;
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

export async function fetchCommentsForPostAction(postId: number) {
  if (!Number.isInteger(postId) || postId <= 0)
    throw new Error("Invalid post id");
  return forumService.fetchCommentsForPost(postId);
}

export async function replyAction(input: { postId: number; content: string }) {
  const { postId, content } = input;
  const anonId = await getOrCreateAnonId();
  const result = await forumService.reply(postId, content, anonId);
  revalidatePath("/forum");
  return result;
}
