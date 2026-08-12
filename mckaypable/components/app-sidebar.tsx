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
import Image from "next/image";
import CreamMckaypableLogo from "@/assets/imgs/CreamMckaypableIcon.svg";
import { motion } from "framer-motion";

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
  const { state } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-[#6F5345] border-transparent!"
    >
      {/* We'll see if I like there being no border on the sidebar */}

      <SidebarHeader className="bg-[#6F5345]">
        {" "}
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
            <SidebarGroupLabel className="flex items-center justify-center gap-2 mt-2">
              <Image
                src={CreamMckaypableLogo}
                alt="Mckaypable Logo"
                className="h-12 w-12 mb-1"
                loading="eager"
              />
              <span className="text-2xl text-[#FFFBEE]">Mckaypable</span>
              {/* I don't like how the icon and text float away so I might change that later */}
            </SidebarGroupLabel>
          </motion.div>
        )}
      </SidebarHeader>
      <SidebarContent className="bg-[#6F5345] w-full">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
