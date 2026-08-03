import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarItem from "./SidebarItem";

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col bg-[#6F5345]">
      <SidebarHeader className="flex items-center justify-between bg-[#6F5345] text-white">
        Mckaypable
      </SidebarHeader>
      <SidebarContent className="flex flex-col bg-[#6F5345]">
        <SidebarGroup className="flex items-center justify-between">
          <SidebarItem section="Home" heightAnchor="/" />
          <SidebarItem section="GitHub" heightAnchor="/" />
          <SidebarItem section="My Projects" heightAnchor="/" />
          <SidebarItem section="Resume" heightAnchor="/" />
          <SidebarItem section="Contact Me" heightAnchor="/" />
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
