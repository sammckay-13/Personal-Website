"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
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

  return (
    <SidebarGroup>
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
                  render={<SidebarMenuButton tooltip={item.title} />}
                  className="hover:bg-[#5a4438] h-fit mb-2 w-64"
                >
                  {item.icon}
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    animate={
                      state === "expanded" ? { opacity: 1 } : { opacity: 0 }
                    }
                  >
                    {state === "expanded" && (
                      <span className="text-[#FFFBEE] text-2xl mt-0.75">
                        {item.title}
                      </span>
                    )}
                  </motion.div>
                  <ChevronRightIcon className="ml-2 transition-transform duration-200 group-data-open/collapsible:rotate-90 text-[#FFFBEE]" />
                </CollapsibleTrigger>
              </div>
            ) : (
              <SidebarMenuButton
                render={<a href={item.url} />}
                className="h-fit w-70 mb-2 hover:bg-[#5a4438]"
              >
                {item.icon}
                <span className="text-[#FFFBEE] text-2xl mt-0.75">
                  {item.title}
                </span>
              </SidebarMenuButton>
            )}
            <CollapsibleContent>
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
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
