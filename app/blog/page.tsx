import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import MckaypableHeader from "../svg-playground/MckaypableHeader";
import { AppSidebar } from "@/components/app-sidebar";
import CustomAlert from "@/components/CustomAlert";

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <SidebarProvider className="min-h-20 max-h-20 mb-20" defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 h-20 bg-[#6F5345]">
          <header className="flex sticky">
            <div className="flex items-center gap-2 px-4 fixed ">
              <SidebarTrigger
                size="default"
                className="-ml-1 h-10 mt-4 bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] hover:cursor-pointer [&>svg]:size-5! z-50"
              />
            </div>
            <MckaypableHeader title="AI News" />
          </header>
        </SidebarInset>
      </SidebarProvider>
          <CustomAlert title="AI News Letter" description="The information that is found on this page is automatically sourced from an AI model that is supported by my Hermes Agent running on a personal computer. Because of this I want to acknowledge that not all of this information will be up to date or accurate and will require people to corroborate the information reported on this page" />
          
    </div>
  );
}
