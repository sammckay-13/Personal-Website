import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  json,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// Better Auth tables
// Hand-written to match Better Auth's default Drizzle schema. Regenerate with
// `npx @better-auth/cli generate` and compare, since fields can change between
// versions. Table/column names here must match what the CLI outputs.
// ---------------------------------------------------------------------------

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  // Custom field, declared under user.additionalFields in lib/auth.ts
  anon_id: uuid("anon_id").unique(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (t) => [index("session_user_id_idx").on(t.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"), // hashed by Better Auth, never plain text
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index("account_user_id_idx").on(t.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index("verification_identifier_idx").on(t.identifier)],
);

// ---------------------------------------------------------------------------
// App tables
// ---------------------------------------------------------------------------

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

export const CodexCharacters = pgTable(
  "codex-characters",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    name: text().notNull(),
    description: text(),
    codex_user_id: text()
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (t) => [index("codex_characters_user_idx").on(t.codex_user_id)],
);

// ---------------------------------------------------------------------------
// Relations (query-level only for db.query...with; no database changes)
// ---------------------------------------------------------------------------

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  characters: many(CodexCharacters),
  comments: many(forumComments),
  reactions: many(forumReactionsTable),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, { fields: [account.userId], references: [user.id] }),
}));

export const codexCharactersRelations = relations(
  CodexCharacters,
  ({ one }) => ({
    user: one(user, {
      fields: [CodexCharacters.codex_user_id],
      references: [user.id],
    }),
  }),
);

export const forumCommentsRelations = relations(forumComments, ({ one }) => ({
  user: one(user, {
    fields: [forumComments.anon_id],
    references: [user.anon_id],
  }),
}));

export const forumReactionsRelations = relations(
  forumReactionsTable,
  ({ one }) => ({
    user: one(user, {
      fields: [forumReactionsTable.anon_id],
      references: [user.anon_id],
    }),
  }),
);
