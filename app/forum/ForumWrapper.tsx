"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlus, FaClock, FaFire } from "react-icons/fa";
import ForumCard from "./ForumCard";
import PostCreationDialog from "./PostCreationDialog";
import type { ForumWrapperProps } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type SortMode = "newest" | "reactions";

const totalReactions = (r: { like: number; love: number; inspiring: number }) =>
  r.like + r.love + r.inspiring;

export default function ForumWrapper({
  posts,
  onReaction,
  submitPost,
}: ForumWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState<SortMode>("newest");

  const byReactions = sort === "reactions";

  const sortedPosts = useMemo(() => {
    if (!byReactions) return posts; // already ordered by createdAt desc from the query
    return [...posts].sort(
      (a, b) =>
        totalReactions(b.reactions) - totalReactions(a.reactions) ||
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() // tie-breaker: newer first
    );
  }, [posts, byReactions]);

  async function handleSubmit(input: { title: string; content: string }) {
    await submitPost(input);
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col ml-3 items-center gap-5 mt-5">
      <Card
        id="blog-wrapper"
        className="flex items-center w-fit border bg-[#6f5345] border-[#b7a799] mt-15 h-fit"
      >
        <CardContent className="flex gap-4 text-lg text-[#fffbee]">
          <div>
            Leave any questions, comments, concerns, or ideas related to FOCO AI
            For Everyone here!
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] mt-10 w-[50%] h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] gap-3 hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FaPlus />
        <span className="mt-1 text-xl">Create a Post</span>
      </Button>

<div className="flex w-[50%] justify-end">
  <motion.div whileTap={{ scale: 0.92 }} transition={{ duration: 0.12 }}>
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            aria-pressed={byReactions}
            aria-label={
              byReactions
                ? "Sorted by most reactions. Click to sort by newest."
                : "Sorted by newest. Click to sort by most reactions."
            }
            onClick={() => setSort(byReactions ? "newest" : "reactions")}
            className={`w-fit cursor-pointer gap-2 border px-3 py-2 h-fit text-lg font-semibold transition-colors duration-300 ${
              byReactions
                ? "bg-[#dc9954] border-[#dc9954] text-[#fffbee] hover:bg-[#c98a48] hover:text-[#fffbee] dark:bg-[#dc9954] dark:hover:bg-[#c98a48]"
                : "bg-[#fff9e7] border-[#624a3e] text-[#6f5345] hover:bg-[#ece5d3] hover:text-[#6f5345] dark:bg-[#6f5345] dark:text-[#fffbee] dark:hover:bg-[#654b3e]"
            }`}
          />
        }
      >
        <span className="relative inline-flex size-5 items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={sort}
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="inline-flex"
            >
              {byReactions ? <FaFire /> : <FaClock />}
            </motion.span>
          </AnimatePresence>
        </span>

        <span className="relative inline-flex overflow-hidden mt-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={sort}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              {byReactions ? "Most reactions" : "Newest"}
            </motion.span>
          </AnimatePresence>
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee] text-md"
      >
        {byReactions ? "Click to sort by newest" : "Click to sort by most reactions"}
      </TooltipContent>
    </Tooltip>
  </motion.div>
</div>

      <PostCreationDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        submitPost={handleSubmit}
      />

      {sortedPosts.map((post) => (
        <motion.div
          key={post.id}
          layout
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          className="flex w-full justify-center"
        >
          <ForumCard {...post} onReaction={onReaction} />
        </motion.div>
      ))}
    </div>
  );
}