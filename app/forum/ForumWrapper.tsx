"use client";

import { Button } from "@/components/ui/button";
import ForumCard from "./ForumCard";
import { ForumWrapperProps } from "@/lib/types";
import { FaPlus } from "react-icons/fa";
import PostCreationDialog from "./PostCreationDialog";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ForumWrapper({
  posts,
  onReaction,
  submitPost
}: ForumWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)
  async function handleSubmit(input: {title: string, content: string}) {
    submitPost(input);
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col ml-3 items-center gap-5 mt-5">
            <Card
        id="blog-wrapper"
        className="flex items-center w-fit border bg-[#6f5345] border-[#b7a799] mt-15 h-fit"
      >
        <CardContent className="flex gap-4 text-lg text-[#fffbee]">
          <div>
            Leave any questions, comments, concerns, or ideas related to FOCO AI For Everyone here!
          </div>
          {/* It might be cool to add a model column to the database so people can see which model is creating which summaries */}
        </CardContent>
      </Card>
      <Button variant="outline" className="border border-[#624a3e] hover:bg-[#ece5d3] hover:text-[#6f5345] font-semibold text-[#6f5345] mt-10 w-[50%] h-fit p-2 bg-[#fff9e7] dark:bg-[#6f5345] hover:dark:bg-[#654b3e] dark:text-[#fffbee] gap-3 hover:cursor-pointer" onClick={() => setIsOpen(true)}><FaPlus/><span className="mt-1 text-xl">
        Create a Post
        </span>
        </Button>
        <PostCreationDialog isOpen={isOpen} onClose={() => setIsOpen(false)} submitPost={handleSubmit} />
          {posts.map((post) => (
            <ForumCard key={post.id} {...post} onReaction={onReaction} />
          ))}
    </div>
  );
}
