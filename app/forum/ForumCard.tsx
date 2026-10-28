"use client";

import { useEffect, useOptimistic, useRef, useTransition } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  type TargetAndTransition,
} from "motion/react";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FaRegHeart, FaHeart, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { ForumCardProps } from "@/lib/types";
import type { ReactionCounts, ReactionType } from "@/lib/reactions";

type ReactionConfig = {
  type: ReactionType;
  label: string;
  Icon: IconType;
  ActiveIcon: IconType;
  color: string;
  glow: boolean;
  on: TargetAndTransition;
  off: TargetAndTransition;
};

const REACTIONS: ReactionConfig[] = [
  {
    // Like: thumb tilts back, pops up, settles. Unlike: small droop.
    type: "like",
    label: "Like!",
    Icon: FaRegThumbsUp,
    ActiveIcon: FaThumbsUp,
    color: "#5aa9ff",
    glow: false,
    on: {
      rotate: [0, -28, 12, 0],
      y: [0, -7, 0, 0],
      scale: [1, 1.3, 1.1, 1],
      transition: { duration: 0.55, ease: "easeInOut" },
    },
    off: {
      rotate: [0, 14, 0],
      y: [0, 3, 0],
      scale: [1, 0.85, 1],
      transition: { duration: 0.3 },
    },
  },
  {
    // Love: double heartbeat. Unlove: shrink and wobble.
    type: "love",
    label: "Love!",
    Icon: FaRegHeart,
    ActiveIcon: FaHeart,
    color: "#ff5c8a",
    glow: false,
    on: {
      scale: [1, 1.45, 0.95, 1.3, 1],
      transition: { duration: 0.6, times: [0, 0.25, 0.45, 0.7, 1] },
    },
    off: {
      scale: [1, 0.7, 1],
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.35 },
    },
  },
  {
    // Inspiring: bulb flickers on and keeps a soft glow. Off: dims out.
    type: "inspiring",
    label: "Inspiring!",
    Icon: FaRegLightbulb,
    ActiveIcon: FaLightbulb,
    color: "#ffd43b",
    glow: true,
    on: {
      opacity: [1, 0.35, 1, 0.55, 1],
      scale: [1, 0.9, 1.3, 1.05, 1],
      transition: { duration: 0.6 },
    },
    off: {
      opacity: [1, 0.5, 1],
      scale: [1, 0.85, 1],
      transition: { duration: 0.35 },
    },
  },
];

type State = { counts: ReactionCounts; selected: ReactionType | null };

function applyReaction(state: State, type: ReactionType): State {
  const counts = { ...state.counts };
  if (state.selected) counts[state.selected]--; // remove the old reaction
  if (state.selected === type) return { counts, selected: null }; // same one clicked: unclick
  counts[type]++; // new reaction or swap
  return { counts, selected: type };
}

function ReactionIcon({
  active,
  Icon,
  ActiveIcon,
  color,
  glow,
  on,
  off,
}: Pick<ReactionConfig, "Icon" | "ActiveIcon" | "color" | "glow" | "on" | "off"> & {
  active: boolean;
}) {
  const controls = useAnimationControls();
  const prev = useRef(active);

  // Fires when `active` changes (skips first render), so a swap animates
  // both the old icon (off) and the new one (on).
  useEffect(() => {
    if (prev.current === active) return;
    prev.current = active;
    controls.start(active ? on : off);
  }, [active, controls, on, off]);

  const Shown = active ? ActiveIcon : Icon;

  return (
    <motion.span
      animate={controls}
      className="inline-flex transition-[color,filter] duration-300"
      style={{
        color: active ? color : "#fffbee",
        filter: active && glow ? `drop-shadow(0 0 6px ${color}aa)` : "none",
      }}
    >
      <Shown />
    </motion.span>
  );
}

export default function ForumCard({
  id,
  title,
  content,
  reactions,
  myReaction,
  onReaction,
}: ForumCardProps) {
  const [, startTransition] = useTransition();
  const [state, addOptimistic] = useOptimistic<State, ReactionType>(
    { counts: reactions, selected: myReaction },
    applyReaction
  );

  function handleClick(type: ReactionType) {
    startTransition(async () => {
      addOptimistic(type);
      await onReaction({ postId: id, type });
    });
  }

  return (
    <Card className="flex items-center w-[50%] mt-15 h-fit border-[#fffbee] bg-[#fff9e7] dark:bg-[#6f5345] text-[#fffbee]">
      <CardHeader className="w-full text-3xl font-semibold text-[#8b6959] dark:text-[#fffbee]">
        {title}
      </CardHeader>
      <div className="w-full h-1.75 bg-[#DC9954]" />
      <CardContent className="flex gap-4 text-lg text-[#8b6959] dark:text-[#fffbee]">
        <div>{content}</div>
      </CardContent>
      <CardFooter className="flex flex-row w-full bg-[#624a3e] border-t border-[#fffbee] text-lg text-[#fffbee]">
        {REACTIONS.map(({ type, label, Icon, ActiveIcon, color, glow, on, off }) => {
          const active = state.selected === type;
          return (
            <Tooltip key={type}>
              <TooltipTrigger
                render={
                  <Button
                    aria-pressed={active}
                    onClick={() => handleClick(type)}
                    className="bg-transparent hover:bg-transparent cursor-pointer text-[#fffbee]"
                  />
                }
              >
                <ReactionIcon
                  active={active}
                  Icon={Icon}
                  ActiveIcon={ActiveIcon}
                  color={color}
                  glow={glow}
                  on={on}
                  off={off}
                />
                <span className="relative mt-1 inline-flex overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={state.counts[type]}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      {state.counts[type]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="border bg-[#6f5345] border-[#fffbee] text-[#fffbee] text-md"
              >
                {label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </CardFooter>
    </Card>
  );
}