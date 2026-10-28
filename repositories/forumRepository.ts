// repositories/forumRepository.ts
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/src/db";
import { forumPostsTable, forumReactionsTable } from "@/src/db/schema";
import type { ReactionType } from "@/lib/reactions";

const r = forumReactionsTable;

export const forumRepository = {
  // ---- Posts ----
  // Posts plus a count of each reaction type, in one query
  fetchAllPosts() {
    return db
      .select({
        id: forumPostsTable.id,
        createdAt: forumPostsTable.createdAt,
        content: forumPostsTable.content,
        title: forumPostsTable.title,
        likes: sql<number>`count(*) filter (where ${r.type} = 'like')::int`,
        loves: sql<number>`count(*) filter (where ${r.type} = 'love')::int`,
        inspirings: sql<number>`count(*) filter (where ${r.type} = 'inspiring')::int`,
      })
      .from(forumPostsTable)
      .leftJoin(r, eq(r.forum_post_id, forumPostsTable.id))
      .groupBy(forumPostsTable.id)
      .orderBy(desc(forumPostsTable.createdAt));
  },

  async submitPost(title: string, content: string) {
       await db
      .insert(forumPostsTable)
      .values({ title: title, content: content })
  },


  // ---- Reactions ----
  async findReactionType(postId: number, anonId: string) {
    const [row] = await db
      .select({ type: r.type })
      .from(r)
      .where(and(eq(r.forum_post_id, postId), eq(r.anon_id, anonId)))
      .limit(1);
    return (row?.type as ReactionType | undefined) ?? null;
  },

  async deleteReaction(postId: number, anonId: string) {
    await db
      .delete(r)
      .where(and(eq(r.forum_post_id, postId), eq(r.anon_id, anonId)));
  },

  // Insert, or swap the type if this visitor already reacted to this post
  async upsertReaction(postId: number, type: ReactionType, anonId: string) {
    await db
      .insert(r)
      .values({ forum_post_id: postId, type, anon_id: anonId })
      .onConflictDoUpdate({
        target: [r.forum_post_id, r.anon_id],
        set: { type },
      });
  },

  async reactionsByAnonId(anonId: string, postIds: number[]) {
    if (postIds.length === 0) return [];
    return db
      .select({ postId: r.forum_post_id, type: r.type })
      .from(r)
      .where(and(eq(r.anon_id, anonId), inArray(r.forum_post_id, postIds)));
  },
};