import { AppSidebar } from "@/components/AppSidebar";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SidebarProvider defaultOpen={true} >
        <AppSidebar />
          <SidebarTrigger />
          {/* Your app goes here */}
      </SidebarProvider>
    </div>
  );
}
