import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import AnimatedLine from "@/assets/animations/AnimatedLines";
import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";
import Image from "next/image";
import ProfilePicture from "@/assets/imgs/ProfilePicture.png";
import BrownHeader from "@/components/BrownHeader";

export default function Home() {
  return (
    <div className="">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 h-140 bg-[#6F5345] w-80%">
        <header className="flex sticky bg-[#6F5345]">
          <div className="flex items-center gap-2 px-4 fixed">
            <SidebarTrigger
              size="default"
              className="-ml-1 h-10 mt-4 bg-[#6F5345] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] [&>svg]:size-5! z-50"
            />
          </div>
        </header>
        <div className="flex flex-col flex-1 h-140 bg-[#6F5345] w-80%">
            <BrownHeader />
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
          <div className="md:w-[70%] ml-20 md:ml-[13%] mt-10">
            <ProjectsWrapper />
          </div>
          <ContentSection title="My Projects" id="my projects" />

          <div className="w-full h-10 ml-3.5 md:ml-0 md:w-full flex md:justify-center ">
            <CustomFooter />
          </div>
        </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
