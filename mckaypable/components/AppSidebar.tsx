import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarItem from "./SidebarItem";
import Home_icon from "@/assets/imgs/Home_Icon.png";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col bg-[#6F5345]">
      <SidebarHeader className="flex items-center justify-between bg-[#6F5345] text-white">
        Mckaypable
      </SidebarHeader>
      <SidebarContent className="flex bg-[#6F5345] w-full">
        <SidebarGroup className="flex items-center w-full">
            <SidebarItem section="Home" heightAnchor="" />
          <SidebarItem section="GitHub" heightAnchor="" />
          <SidebarItem section="My Projects" heightAnchor="" />
          <SidebarItem section="Resume" heightAnchor="" />
          <SidebarItem section="Contact Me" heightAnchor="" />
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
