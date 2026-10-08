"use client";

import { MckaypableIcon } from "@/assets/MckaypableIcon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {NavMainProps} from "@/lib/types"

export function NavMain({ navs }: NavMainProps) {
  const { state } = useSidebar();
  const router = useRouter();
  console.log(navs);

  function HashScroll(section: string, url?: string) {
    const element = document.getElementById(section);
    if (url?.includes("#") === false) {
      router.push(url);
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <SidebarGroup className="overflow-hidden">
      {state === "collapsed" && (
        <div
          className="flex items-center justify-center h-7 flex-col mb-4 hover:cursor-pointer"
          onClick={() => HashScroll("hero")}
        >
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
        {navs.map((nav) => (
          <Collapsible
            key={nav.title}
            defaultOpen={nav.isActive}
            className="group/collapsible"
            render={<SidebarMenuItem />}
          >
            {nav.items?.length >= 1 ? (
              <div>
                {state === "collapsed" ? (
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        className="[&>svg]:size-6 -ml-1"
                        tooltip={nav.title}
                        onClick={() =>
                          HashScroll(nav.title.toLowerCase(), nav.url)
                        }
                      />
                    }
                    className={cn(
                      "hover:bg-[#5a4438] h-10 mb-2 w-64 [&>svg]:size-6 flex items-center p-2 hover:cursor-pointer focus:bg-transparent active:bg-transparent",
                      state === "collapsed" && "hover:bg-transparent ",
                    )}
                  >
                    {nav.icon}
                  </CollapsibleTrigger>
                ) : (
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        className="[&>svg]:size-6 -ml-1"
                        tooltip={nav.title}
                      />
                    }
                    className={cn(
                      "hover:bg-[#5a4438] h-10 mb-2 w-64 [&>svg]:size-6 flex items-center p-2 hover:cursor-pointer focus:bg-transparent active:bg-transparent",
                    )}
                  >
                    {nav.icon}
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
                          {nav.title}
                        </span>
                      )}
                    </motion.div>
                    {state === "expanded" && (
                      <ChevronRightIcon className="ml-2 transition-transform duration-200 group-data-open/collapsible:rotate-90 text-[#FFFBEE]" />
                    )}
                  </CollapsibleTrigger>
                )}
              </div>
            ) : (
              <SidebarMenuButton
                onClick={() => {
                  HashScroll(nav.title.toLowerCase(), nav.url);
                }}
                className={cn(
                  "hover:bg-[#543C2F] h-10 mb-2 w-70 [&>svg]:size-6 flex -ml-1 active:bg-transparent",
                  state === "collapsed" &&
                    "hover:bg-transparent hover:cursor-pointer",
                )}
              >
                {nav.icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  animate={
                    state === "expanded" ? { opacity: 1 } : { opacity: 0 }
                  }
                  className="mt-1"
                >
                  {state === "expanded" && (
                    <span className="text-[#FFFBEE] text-2xl">{nav.title}</span>
                  )}
                </motion.div>
              </SidebarMenuButton>
            )}
            <CollapsibleContent>
              <SidebarMenuSub>
                {nav.items?.map((subItem) => (
                  <SidebarMenuSubItem
                    key={subItem.title}
                    className="hover:bg-[#5a4438]"
                  >
                    <SidebarMenuSubButton
                      className="hover:bg-[#5a4438]"
                      onClick={() => {
                        HashScroll(subItem.title.toLowerCase(), subItem.url);
                      }}
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
