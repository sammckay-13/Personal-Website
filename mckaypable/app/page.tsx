import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import BrownMckaypableLogo from "@/assets/imgs/BrownMckaypableIcon.svg";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-0 sticky">
            <div className="flex items-center gap-2 px-4 fixed">
              <SidebarTrigger className="-ml-1 h-10 w-10 bg-[#6F5345] text-[#FFFBEE] hover:bg-[#FFFBEE] hover:text-[#6F5345]" />
            </div>
          </header>
          <div>
            <div className="flex flex-col flex-1 h-100 bg-blue-100">
              <main className="mt-5 flex ml-8 items-center">
                <Image
                  src={BrownMckaypableLogo}
                  alt="Mckaypable Logo"
                  className="h-20 w-24 ml-2"
                />
                <h1 className="text-3xl font-bold text-black ml-4">
                  Mckaypable
                </h1>
                <p className="mt-24">Sam McKay</p>
              </main>
            </div>
            <ContentSection />
            <ContentSection />
            <div className="flex flex-row items-center justify-center flex-1 h-100">
              <ProjectsWrapper />
            </div>
            {/* Your app goes here */}
          </div>
        </SidebarInset>
      </SidebarProvider>
      <CustomFooter />
    </div>
  );
}
