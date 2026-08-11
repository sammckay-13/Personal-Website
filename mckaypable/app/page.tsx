import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import CreamMckaypableIcon from "@/assets/imgs/CreamMckaypableIcon.svg";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import AnimatedLine from "@/assets/animations/AnimatedLines";

export default function Home() {
  return (
    <div className="bg-[#FFFBEE]">
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
            <div className="mt-8 ml-15 text-[#FFFBEE]">
              <p className="text-3xl">Sam McKay</p>
              <p>fdafds</p>
            </div>
            <AnimatedLine />
          </div>
          <ContentSection
            title="What Am I Up To?"
            badges={[
              {
                name: "React",
              },
              {
                name: "Next.js",
                color: "bg-[#61DAFB]",
              },
              {
                name: "Tailwind CSS",
              },
            ]}
          />
          <ContentSection title="My Projects" id="my projects" />
          <div className=" bg-[#FFFBEE] w-[70%] ml-[13%] mb-10">
            <ProjectsWrapper />
          </div>
          <ContentSection title="My Projects" id="my projects" />

          <div className=" w-full flex justify-center">
            <CustomFooter />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
