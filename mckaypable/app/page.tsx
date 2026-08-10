import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import CreamMckaypableIcon from "@/assets/imgs/CreamMckaypableIcon.svg";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div className="bg-[#FFFBEE] overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-0 sticky bg-[#6F5345]">
            <div className="flex items-center gap-2 px-4 fixed">
              <SidebarTrigger className="-ml-1 w-10 h-10 bg-[#6F5345] text-[#FFFBEE] text-2xl hover:text-[#6F5345] hover:bg-[#5a4438]" />
            </div>
          </header>
          <div>
            <div className="flex flex-col flex-1 h-100 bg-[#6F5345] rounded-br-4xl">
              <main className="mt-5 flex ml-8 items-center">
                <Image
                  src={CreamMckaypableIcon}
                  alt="Mckaypable Logo"
                  className="h-20 w-24 ml-10"
                />
                <h1 className="text-5xl mt-1 font-bold text-[#FFFBEE] ml-4">
                  Mckaypable
                </h1>
              </main>
              <p className="text-3xl mt-10 ml-13 text-[#FFFBEE]">Sam McKay</p>
              <div className="absolute flex flex-col flex-1 h-200 w-[4300px] -ml-389 -mt-100">
                <DotLottieReact
                  className="h-full w-full"
                  src="/border_animation.json"
                  autoplay
                />
              </div>
              <div className="flex flex-col items-center flex-1 h-100 mb-10"/>
            </div>
            <ContentSection title="What Am I Up To?" />
            <ContentSection title="My Projects" />
            <div className="flex flex-row items-center justify-center flex-1 p-1 bg-[#FFFBEE]">
              <ProjectsWrapper />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <CustomFooter />
    </div>
  );
}
