import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import BrownMckaypableLogo from "@/assets/imgs/BrownMckaypableLogo.png";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false} className=" bg-[#6F5345]">
      <AppSidebar />
      <div>
        <div className="flex flex-col flex-1 h-100 bg-blue-100">
          <main className="mt-7">
            <Image
              src={BrownMckaypableLogo}
              alt="Mckaypable Logo"
              className="h-10 w-14 ml-2"
            />
            <h1 className="text-3xl font-bold text-black">Mckaypable</h1>
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
    </SidebarProvider>
  );
}
