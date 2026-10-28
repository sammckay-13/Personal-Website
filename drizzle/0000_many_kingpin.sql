CREATE TABLE "forum-posts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "forum-posts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"content" text,
	"title" text
);
--> statement-breakpoint
CREATE TABLE "forum-reactions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "forum-reactions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"forum_post_id" integer NOT NULL,
	"anon_id" uuid NOT NULL,
	"type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "news-summaries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "news-summaries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"content" text,
	"sources" json,
	"title" text
);
--> statement-breakpoint
ALTER TABLE "forum-reactions" ADD CONSTRAINT "forum-reactions_forum_post_id_forum-posts_id_fk" FOREIGN KEY ("forum_post_id") REFERENCES "public"."forum-posts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "forum_reactions_post_type_anon_idx" ON "forum-reactions" USING btree ("forum_post_id","type","anon_id");