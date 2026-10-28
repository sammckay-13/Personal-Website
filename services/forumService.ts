// services/forumService.ts
import { forumRepository } from "@/repositories/forumRepository"
import type { ReactionType } from "@/lib/reactions";

export const forumService = {
  // ---- Posts ----
  async fetchAllPosts() {
    const rows = await forumRepository.fetchAllPosts();
    return rows.map((row) => ({
      id: row.id,
      createdAt: row.createdAt,
      title: row.title,
      content: row.content,
      reactions: {
        like: row.likes,
        love: row.loves,
        inspiring: row.inspirings,
      },
    }));
  },

  // ---- Reactions ----
  // Click the active reaction -> remove it. Click a different one -> swap. No reaction yet -> add.
  async react(postId: number, type: ReactionType, anonId: string) {
    const current = await forumRepository.findReactionType(postId, anonId);

    if (current === type) {
      await forumRepository.deleteReaction(postId, anonId);
      return { active: null };
    }

    await forumRepository.upsertReaction(postId, type, anonId);
    return { active: type };
  },

  // Returns { [postId]: "like" | "love" | "inspiring" } for posts this visitor reacted to
  async getMyReactions(postIds: number[], anonId: string | null) {
    if (!anonId) return {} as Record<number, ReactionType>;
    const rows = await forumRepository.reactionsByAnonId(anonId, postIds);
    return Object.fromEntries(
      rows.map((r) => [r.postId, r.type as ReactionType])
    ) as Record<number, ReactionType>;
  },
};