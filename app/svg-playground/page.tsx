import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import PlaygroundWrapper from "./PlaygroundWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";

export default async function Home() {
  return (
    <div className="overflow-x-hidden md:flex-row flex-col">
      <SidebarProvider className="min-h-0" defaultOpen={false}>
        <AppSidebar />
        <FloatingSidebarTrigger />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex">
            <MckaypableHeader title="SVG Playground" />
          </header>
        </SidebarInset>
      </SidebarProvider>
      <PlaygroundWrapper />
    </div>
  );
}
