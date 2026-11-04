"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function CommentItem({ content }: { content: string | null }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return; // keep the last result while expanded
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    // Also fires when the parent panel first becomes visible (size 0 -> real size)
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [content, expanded]);

  return (
    <div className="flex flex-col w-full mb-2">
      <p
        ref={ref}
        className={cn(
          "text-lg text-[#fffbee] whitespace-pre-wrap wrap-break-word ml-2",
          !expanded && "line-clamp-3",
        )}
      >
        {content}
      </p>
      {(overflows || expanded) && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 w-fit cursor-pointer text-sm font-semibold text-[#dc9954] underline-offset-2 hover:underline ml-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
      <Separator className="my-2 bg-[#f7eecd]" />
         </div>
  );
}