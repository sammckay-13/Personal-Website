import {
  integer,
  json,
  pgTable,
  text,
  timestamp,
  uuid,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

export const newsSummariesTable = pgTable("news-summaries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  content: text(),
  sources: json(),
  title: text(),
});

export const forumPostsTable = pgTable("forum-posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  content: text(),
  title: text(),
});

export const forumReactionsTable = pgTable(
  "forum-reactions",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    forum_post_id: integer()
      .notNull()
      .references(() => forumPostsTable.id, { onDelete: "cascade" }),
    anon_id: uuid().notNull(),
    type: text().notNull(),
  },
  (t) => [
    uniqueIndex("forum_reactions_post_anon_idx").on(t.forum_post_id, t.anon_id),
    index("forum_reactions_post_type_idx").on(t.forum_post_id, t.type),
  ],
);

export const forumComments = pgTable("forum-comments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  content: text(),
  forum_post_id: integer()
    .notNull()
    .references(() => forumPostsTable.id, { onDelete: "cascade" }),
  anon_id: uuid().notNull(),
});

export const CodexUsers = pgTable("codex-users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  anon_id: uuid().notNull(),
  username: text().notNull(),
  password: text().notNull(),
});

export const CodexCharacters = pgTable("codex-characters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  name: text().notNull(),
  description: text(),
  codex_user_id: integer()
    .notNull()
    .references(() => CodexUsers.id, { onDelete: "cascade" }),
});