import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import CreamMckaypableIcon from "@/assets/imgs/CreamMckaypableIcon.svg";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import AnimatedLine from "@/assets/animations/AnimatedLines";

export default function Home() {
  return (
    <div className="bg-[#FFFBEE] w-screen overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <header className="flex sticky bg-[#6F5345]">
          <div className="flex items-center gap-2 px-4 fixed">
            <SidebarTrigger
              size="default"
              className="-ml-1 h-10 mt-4 bg-[#6F5345] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] [&>svg]:size-5!"
            />
          </div>
        </header>
        <div>
          <div className="flex flex-col flex-1 h-100 bg-[#6F5345] w-80%">
            <main className="mt-5 flex ml-8 items-center">
              <Image
                src={CreamMckaypableIcon}
                alt="Mckaypable Logo"
                className="h-20 w-24 ml-10"
                loading="eager"
              />
              <h1 className="text-5xl mt-1 font-bold text-[#FFFBEE] ml-4">
                Mckaypable
              </h1>
            </main>
            <p className="text-3xl mt-10 ml-13 text-[#FFFBEE]">Sam McKay</p>
            <AnimatedLine />
          </div>
          <ContentSection title="What Am I Up To?" />
          <ContentSection title="My Projects" />
          <div className="flex justify-center flex-row items-center bg-[#FFFBEE]">
            <ProjectsWrapper />
          </div>
        </div>
      </SidebarProvider>
      <CustomFooter />
    </div>
  );
}
