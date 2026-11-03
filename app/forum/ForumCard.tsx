"use client";

import {
  useEffect,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  type TargetAndTransition,
} from "motion/react";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FaRegHeart,
  FaHeart,
  FaRegLightbulb,
  FaLightbulb,
  FaReply,
  FaChevronUp,
} from "react-icons/fa";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ForumCardProps } from "@/lib/types";
import type { ReactionCounts, ReactionType } from "@/lib/reactions";
import { Textarea } from "@/components/ui/textarea";
import { IoMdSend } from "react-icons/io";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

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
}: Pick<
  ReactionConfig,
  "Icon" | "ActiveIcon" | "color" | "glow" | "on" | "off"
> & {
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
  createdAt,
  reactions,
  myReaction,
  comments,
  onReaction,
  isAdmin,
  onReply,
}: ForumCardProps) {
  const [, startTransition] = useTransition();
  const [state, addOptimistic] = useOptimistic<State, ReactionType>(
    { counts: reactions, selected: myReaction },
    applyReaction,
  );
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isViewingComments, setIsViewingComments] = useState(false);
  const createdAtArr = createdAt.toString().split(" ");
  const dateString =
    createdAtArr[0] + " " + createdAtArr[1] + " " + createdAtArr[2];

  function handleClick(type: ReactionType) {
    startTransition(async () => {
      addOptimistic(type);
      await onReaction({ postId: id, type });
    });
  }

  function handleReply() {
    startTransition(async () => {
      setIsReplying(!isReplying);
      await onReply({ postId: id, content: replyContent });
    });
  }
  function handleViewComments() {
    startTransition(async () => {
      setIsViewingComments(!isViewingComments);
    });
  }

  return (
    <Collapsible
      className=" rounded-full flex items-center w-[90%] h-[30%] border-[#fffbee] bg-[#fff9e7] dark:bg-[#6f5345] text-[#fffbee] md:h-fit md:w-[50%] mb-3"
      open={isViewingComments}
      onOpenChange={() => handleViewComments()}
    >
      <Card className="flex items-center w-[90%] h-[30%] border-[#fffbee] bg-[#fff9e7] dark:bg-[#6f5345] text-[#fffbee] md:h-fit md:w-full">
        <CardHeader className="w-full text-3xl font-semibold text-[#8b6959] dark:text-[#fffbee]">
          {title}
        </CardHeader>
        <div className="w-full h-1.75 bg-[#DC9954]" />
        <CardContent className="flex gap-4 text-lg text-[#8b6959] dark:text-[#fffbee] w-full">
          <span className="text-xl flex items-center font-semibold">
            {content}
          </span>
        </CardContent>

        <CardFooter className="flex flex-col w-full bg-[#624a3e] border-t border-[#fffbee] text-lg text-[#fffbee]">
          <div className="flex flex-row w-full">
            {REACTIONS.map(
              ({ type, label, Icon, ActiveIcon, color, glow, on, off }) => {
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
              },
            )}
            {isAdmin && (
              <Button
                variant="outline"
                className="cursor-pointer hover:dark:bg-[#654b3e] hover:bg-[#ece5d3] bg-[#fff9e7] ml-3"
                onClick={() => setIsReplying(!isReplying)}
              >
                <FaReply className="dark:text-[#fffbee] text-[#8b6959]" />
              </Button>
            )}
            <span className="flex mt-1 ml-auto">{dateString}</span>
            <div className="ml-3">
              {comments.length > 0 && (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        onClick={() => handleViewComments()}
                        className={`w-fit cursor-pointer gap-2 border px-3 py-2 h-fit text-lg font-semibold transition-colors duration-300 ${
                          isViewingComments
                            ? "bg-[#dc9954] border-[#dc9954] text-[#fffbee] hover:bg-[#c98a48] hover:text-[#fffbee] dark:bg-[#dc9954] dark:hover:bg-[#c98a48]"
                            : "bg-[#fff9e7] border-[#624a3e] text-[#6f5345] hover:bg-[#ece5d3] hover:text-[#6f5345] dark:bg-[#6f5345] dark:text-[#fffbee] dark:hover:bg-[#654b3e]"
                        }`}
                      >
                        <FaChevronUp
                          className={cn("transition-transform duration-300", {
                            "rotate-180": isViewingComments,
                          })}
                        />
                      </Button>
                    }
                  />

                  <TooltipContent
                    side="bottom"
                    className="bg-[#6f5345] border border-[#fffbee] text-[#fffbee] text-md"
                  >
                    {isViewingComments
                      ? "Click to hide comments"
                      : "Click to view comments"}
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
          {isReplying && (
            <div className="flex flex-row w-full">
              <Textarea
                placeholder="Write a reply..."
                className="flex mt-5 bg-[#fff9e7] dark:bg-[#6f5345] text-[#8b6959] dark:text-[#fffbee]"
                onChange={(e) => setReplyContent(e.target.value)}
              />
              <Button
                onClick={() => {
                  handleReply();
                }}
                variant="outline"
                size="lg"
                className=" ml-3 mt-auto cursor-pointer hover:dark:bg-[#654b3e] hover:bg-[#ece5d3] bg-[#fff9e7]"
              >
                <IoMdSend className="dark:text-[#fffbee] text-[#8b6959]" />
              </Button>
            </div>
          )}
<CollapsibleContent className="w-full overflow-hidden text-[#fffbee] h-(--collapsible-panel-height) transition-[height] duration-300 ease-out data-starting-style:h-0 data-ending-style:h-0">
  <div className="rounded w-full h-1 bg-[#DC9954] my-3" />
  {comments.map((comment) => (
    <div key={comment.id} className="flex flex-col w-full ml-3">
      <p className="text-base text-[#fffbee] font-semibold">
        {comment.content}
      </p>
    </div>
  ))}
</CollapsibleContent>
        </CardFooter>
      </Card>
    </Collapsible>
  );
}
