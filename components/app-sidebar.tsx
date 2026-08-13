"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Settings2Icon } from "lucide-react";
import { FaGithub, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { MckaypableLogo } from "@/assets/MckaypableLogo";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: <FaHome className="text-[#FFFBEE]" />,
      items: [],
      isActive: true,
    },
    {
      title: "My Projects",
      url: "#",
      icon: <FaGithub className="text-[#FFFBEE]" />,
      items: [
        // {
        //   title: "Genesis",
        //   url: "#",
        // },
        // {
        //   title: "Explorer",
        //   url: "#",
        // },
        // {
        //   title: "Quantum",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon className="text-[#FFFBEE]" />,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile } = useSidebar();
  return ( 
    <Sidebar
    collapsible={isMobile ? 
      "offcanvas" :
      "icon"
    }
    {...props}
    className="bg-[#6F5345] border-transparent"
    >
      {/* We'll see if I like there being no border on the sidebar */}

      <SidebarHeader className="bg-[#6F5345]">
        {state === "expanded" && (
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          animate={
            state === "expanded"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -10 }
          }
          >
            <SidebarGroupLabel className="flex items-center justify-center gap-1 mt-2">
              <div className="flex w-15 h-10">
                <MckaypableLogo color="#FFFBEE" />
              </div>
              <span className="text-2xl text-[#FFFBEE]">Mckaypable</span>
            </SidebarGroupLabel>
          </motion.div>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-[#6F5345] w-full">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )

}
