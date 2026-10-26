"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function FloatingSidebarTrigger() {
const { state, isMobile } = useSidebar();
const expanded = isMobile || state === "expanded";

// ...

  return (
    <div
      className="md:ml-0 -ml-6 fixed top-0 z-50 flex items-center gap-2 px-4 transition-[left] duration-200 ease-linear"
      style={{
        left: isMobile
          ? "30px"
          : expanded
            ? "calc(var(--sidebar-width) + 1rem)"
            : "calc(var(--sidebar-width-icon) + 1rem)",
      }}
    >
      <SidebarTrigger
        size="default"
        className="-ml-1 h-10 mt-4 bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] hover:cursor-pointer [&>svg]:size-5!"
      />
    </div>
  );
}