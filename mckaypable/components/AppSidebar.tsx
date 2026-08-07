"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import SidebarItem from "./SidebarItem";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import CreamMckaypableLogo from "@/assets/imgs/CreamMckaypableLogo.png";
import Image from "next/image";

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <div>
      <Sidebar collapsible="icon" className="flex flex-col h-full">
        <SidebarHeader className="flex items-center justify-between bg-[#6F5345] text-white">
          {state !== "collapsed" && (
            <div className="flex items-center justify-between mt-2">
              <Image
                src={CreamMckaypableLogo}
                alt="Mckaypable Logo"
                className="h-10 w-14 ml-2"
              />
              <span className="text-xl font-bold">Mckaypable</span>
              <Button variant="ghost" size="lg" onClick={toggleSidebar}>
                <X className="h-10 w-10" />
              </Button>
            </div>
          )}
        </SidebarHeader>
        <SidebarContent className="flex bg-[#6F5345] h-full">
          <SidebarGroup className="flex items-center">
            {state === "collapsed" && (
              <Menu onClick={toggleSidebar} className="h-7 w-7 text-white" />
            )}
            <SidebarItem section="Home" heightAnchor="" sidebarState={state} />
            <SidebarItem
              section="My Projects"
              heightAnchor=""
              sidebarState={state}
            />
            <SidebarItem
              section="Resume"
              heightAnchor=""
              sidebarState={state}
            />
            <SidebarItem
              section="Contact Me"
              heightAnchor=""
              sidebarState={state}
            />
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}
