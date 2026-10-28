DROP INDEX "forum_reactions_post_type_anon_idx";--> statement-breakpoint
CREATE UNIQUE INDEX "forum_reactions_post_anon_idx" ON "forum-reactions" USING btree ("forum_post_id","anon_id");--> statement-breakpoint
CREATE INDEX "forum_reactions_post_type_idx" ON "forum-reactions" USING btree ("forum_post_id","type");