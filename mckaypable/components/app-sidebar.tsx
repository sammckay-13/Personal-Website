"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Settings2Icon } from "lucide-react";
import { FaGithub, FaHome } from "react-icons/fa";
import Image from "next/image";
import CreamMckaypableLogo from "@/assets/imgs/CreamMckaypableIcon.svg";

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
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
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
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-[#6F5345] border-transparent!"
    >
      {/* We'll see if I like there being no border on the sidebar */}
      <SidebarHeader className="bg-[#6F5345]">
        {" "}
        <SidebarGroupLabel className="flex items-center justify-center">
          <Image
            src={CreamMckaypableLogo}
            alt="Mckaypable Logo"
            className="h-12 w-12 mr-2 mb-1"
            loading="eager"
          />
          <span className="text-2xl text-[#FFFBEE] ml-1">Mckaypable</span>
          {/* I don't like how the icon and text float away so I might change that later */}
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent className="bg-[#6F5345] w-full">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
