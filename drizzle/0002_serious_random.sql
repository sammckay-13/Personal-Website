CREATE TABLE "forum-comments" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "forum-comments_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"content" text,
	"forum_post_id" integer NOT NULL,
	"anon_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "forum-comments" ADD CONSTRAINT "forum-comments_forum_post_id_forum-posts_id_fk" FOREIGN KEY ("forum_post_id") REFERENCES "public"."forum-posts"("id") ON DELETE cascade ON UPDATE no action;