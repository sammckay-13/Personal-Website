// lib/reactions.ts
export const REACTION_TYPES = ["like", "love", "inspiring"] as const;
export type ReactionType = (typeof REACTION_TYPES)[number];
export type ReactionCounts = Record<ReactionType, number>;