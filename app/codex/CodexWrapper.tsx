"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlus, FaClock, FaFire } from "react-icons/fa";
import type { ActionResult, CodexWrapperProps } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaA } from "react-icons/fa6";
import { CreateCharacterDialog } from "./CreateCharacterDialog";
import LogIn from "./LogIn";

type SortMode = "newest" | "reactions" | "alphabetical";

export default function CodexWrapper({
  characters,
  onCreateCharacter,
  onDeleteCharacter,
  onEditCharacter,
  onCreateUser,
  onLoginUser,
}: CodexWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState<SortMode>("alphabetical");
  const byAlphabetical = sort === "alphabetical";
  const sortedCharacters = useMemo(() => {
    if (!byAlphabetical) return characters; // already ordered by createdAt desc from the query
    return [...characters].sort((a, b) => a.name.localeCompare(b.name));
  }, [characters, byAlphabetical]);

  async function createCharacter(
    name: string,
    description: string,
  ): Promise<ActionResult> {
    const result = await onCreateCharacter(name, description);
    if (result.success) setIsOpen(false);
    return result;
  }

  async function editCharacter(
    characterId: number,
    name: string,
    description: string,
  ): Promise<ActionResult> {
    return onEditCharacter(characterId, name, description);
  }

  async function deleteCharacter(characterId: number): Promise<ActionResult> {
    return onDeleteCharacter(characterId);
  }

  async function createUser(
    email: string,
    password: string,
    anonId: string | null,
  ): Promise<ActionResult> {
    return onCreateUser(email, password, anonId);
  }

  async function loginUser(
    email: string,
    password: string,
  ): Promise<ActionResult> {
    return onLoginUser(email, password);
  }
  return (
    <div className="flex flex-col ml-3 items-center gap-5 mt-5">
      <Card
        id="blog-wrapper"
        className="flex items-center w-fit border bg-[#6f5345] border-[#b7a799] mt-15 h-fit"
      >
        <CardContent className="flex gap-4 text-lg text-[#fffbee]">
          <div>Create Dungeons and Dragons Non-player Characters (NPCs)!</div>
          {/* You can also create your own custom NPCs and share them with the community. I like this idea a lot */}
        </CardContent>
      </Card>
      <LogIn onCreateUser={createUser} onLoginUser={loginUser} />

      <div className="flex flex-row w-[50%] justify-between items-center">
        <CreateCharacterDialog onCreateCharacter={createCharacter} />
        <motion.div whileTap={{ scale: 0.92 }} transition={{ duration: 0.12 }}>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  aria-pressed={byAlphabetical}
                  aria-label={
                    byAlphabetical
                      ? "Sorted alphabetically. Click to sort by newest."
                      : "Sorted by newest. Click to sort alphabetically."
                  }
                  onClick={() =>
                    setSort(byAlphabetical ? "newest" : "alphabetical")
                  }
                  className={`w-fit cursor-pointer border px-3 py-2 h-fit text-lg font-semibold transition-colors duration-300 ${
                    byAlphabetical
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
                    {byAlphabetical ? <FaA /> : <FaClock />}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="relative inline-flex overflow-hidden mt-1 lg:mt-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={sort}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.16 }}
                  >
                    {byAlphabetical ? "Alphabetical" : "Newest"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee] text-md"
            >
              {byAlphabetical
                ? "Click to sort by newest"
                : "Click to sort alphabetically"}
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </div>

      {sortedCharacters.map((character) => (
        <motion.div
          key={character.id}
          layout
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          className="flex w-full justify-center"
        >
          {character.name}
          {/* I need to create a character card here */}
        </motion.div>
      ))}
    </div>
  );
}
