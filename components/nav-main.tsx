"use client";

import { MckaypableIcon } from "@/assets/MckaypableIcon";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { state } = useSidebar();

  function HashScroll(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }
  return (
    <SidebarGroup className="overflow-hidden">
      {state === "collapsed" && (
        <div className="flex items-center justify-center h-7 flex-col mb-4">
          <MckaypableIcon color="#FFFBEE" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            animate={
              state === "collapsed"
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -20 }
            }
            className="mt-1 border border-[#CE7052] rounded-full w-full"
          />
        </div>
      )}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
            render={<SidebarMenuItem />}
          >
            {item.items?.length > 1 ? (
              <div>
                <CollapsibleTrigger
                  render={
                    <SidebarMenuButton
                      className="[&>svg]:size-6 -ml-1"
                      tooltip={item.title}
                    />
                  }
                  className={cn(
                    "hover:bg-[#5a4438] h-10 mb-2 w-64 [&>svg]:size-6 flex items-center p-2 hover:cursor-pointer",
                    state === "collapsed" && "hover:bg-transparent",
                  )}
                >
                  {item.icon}
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    animate={
                      state === "expanded" ? { opacity: 1 } : { opacity: 0 }
                    }
                    className="mt-1"
                  >
                    {state === "expanded" && (
                      <span className="text-[#FFFBEE] text-2xl">
                        {item.title}
                      </span>
                    )}
                  </motion.div>
                  {state === "expanded" && (
                    <ChevronRightIcon className="ml-2 transition-transform duration-200 group-data-open/collapsible:rotate-90 text-[#FFFBEE]" />
                  )}
                </CollapsibleTrigger>
              </div>
            ) : (
              <SidebarMenuButton
                onClick={() => {
                  HashScroll(item.title.toLowerCase());
                }}
                className={cn(
                  "hover:bg-[#5a4438] h-10 mb-2 w-70 [&>svg]:size-6 flex -ml-1",
                  state === "collapsed" &&
                    "hover:bg-transparent hover:cursor-pointer",
                )}
              >
                {item.icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  animate={
                    state === "expanded" ? { opacity: 1 } : { opacity: 0 }
                  }
                  className="mt-1"
                >
                  {state === "expanded" && (
                    <span className="text-[#FFFBEE] text-2xl">
                      {item.title}
                    </span>
                  )}
                </motion.div>
              </SidebarMenuButton>
            )}
            {/* This has a little artifact that is left when this is in but I might want collapsibles later */}
            {/* <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem
                    key={subItem.title}
                    className="hover:bg-[#5a4438]"
                  >
                    <SidebarMenuSubButton
                      className="hover:bg-[#5a4438]"
                      render={<a href={subItem.url} />}
                    >
                      <span className="text-[#FFFBEE] mt-0.75">
                        {subItem.title}
                      </span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent> */}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
