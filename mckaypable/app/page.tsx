import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import AnimatedLine from "@/assets/animations/AnimatedLines";
import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";
import Image from "next/image";
import ProfilePicture from "@/assets/imgs/ProfilePicture.png";

export default function Home() {
  return (
    <div className="bg-[#FFFBEE]">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <header className="flex sticky bg-[#6F5345]">
          <div className="flex items-center gap-2 px-4 fixed">
            <SidebarTrigger
              size="default"
              className="-ml-1 h-10 mt-4 bg-[#6F5345] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] [&>svg]:size-5!"
            />
          </div>
        </header>
        <div className="flex flex-col flex-1 h-150 bg-[#6F5345] w-80%">
          <div className="flex flex-row bg-[#6F5345] items-center ml-auto mt-8  mr-10 justify-center">
            <div className="flex w-30 h-20">
              <MckaypableLogoAnimated color="#FFFBEE" />
            </div>
            <h1 className="text-4xl font-bold text-[#FFFBEE] flex-row -ml-5 mb-4 flex items-center">
              Mckaypable
            </h1>
          </div>
          <div>
            <main className="flex flex-row ml-15 items-center mb-15">
              <div className="flex w-fit h-fit ">
                <Image
                  src={ProfilePicture}
                  alt="Profile Picture"
                  className="-mt-20 flex w-50 h-60 ml-5 rounded-2xl object-cover"
                />
              </div>
            </main>
            <div className="-mt-2 ml-20 text-[#FFFBEE]">
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
