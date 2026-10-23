import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MckaypableHeader from "../../components/MckaypableHeader";
import GalleryWrapper from "./GalleryWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import FloatingSidebarTrigger from "@/components/FloatingSidebarTrigger";

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <SidebarProvider className="min-h-20 max-h-20 mb-20" defaultOpen={false}>
        <AppSidebar />
            <FloatingSidebarTrigger/>
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
            <MckaypableHeader title="Projects Gallery" />
        </SidebarInset>
      </SidebarProvider>
      <GalleryWrapper />
    </div>
  );
}
