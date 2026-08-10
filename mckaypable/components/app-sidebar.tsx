"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
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
      icon: <FaHome className="text-[#FFFBEE] className=h-full w-screen" />,
      items: [],
      isActive: true,
    },
    {
      title: "My Projects",
      url: "#",
      icon: (
        <div>
          <FaGithub className="text-[#FFFBEE]" />
        </div>
      ),
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
    <Sidebar collapsible="icon" {...props} className="bg-[#6F5345]">
      <SidebarHeader className="bg-[#6F5345]">
        {" "}
        <SidebarGroupLabel className="flex items-center justify-center">
          <Image
            src={CreamMckaypableLogo}
            alt="Mckaypable Logo"
            className="h-12 w-12 mr-2 mb-1"
          />
          <span className="text-2xl text-[#FFFBEE] ml-1 ">Mckaypable</span>
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent className="bg-[#6F5345]">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
