"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Settings2Icon } from "lucide-react";
import { FaGithub, FaHome } from "react-icons/fa";

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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent className="bg-[#6F5345]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
