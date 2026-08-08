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
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
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
                      <span className="text-[#FFFBEE]">{item.title}</span>
                    )}
                  </motion.div>
                  <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90 text-[#FFFBEE]" />
                </CollapsibleTrigger>
              </div>
            ) : (
              <SidebarMenuButton render={<a href={item.url} />}>
                {item.icon}
                <span className="text-[#FFFBEE]">{item.title}</span>
              </SidebarMenuButton>
            )}
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton render={<a href={subItem.url} />}>
                      <span className="text-[#FFFBEE]">{subItem.title}</span>
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
