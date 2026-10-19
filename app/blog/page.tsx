import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MckaypableHeader from "@/components/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import BlogWrapper from "./BlogWrapper";
export default async function Home() {
    // do the server action here to fetch the blurbs and pass them into blog wrapper
  return (
    <div className="overflow-x-hidden">
      <SidebarProvider className="min-h-0" defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex sticky">
            <div className="flex items-center gap-2 px-4 fixed ">
              <SidebarTrigger
                size="default"
                className="-ml-1 h-10 mt-4 bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] hover:cursor-pointer [&>svg]:size-5! z-50"
              />
            </div>
            <MckaypableHeader title="Blog" />
          </header>
        </SidebarInset>
      </SidebarProvider>
      <BlogWrapper/>
    </div>
  );
}
