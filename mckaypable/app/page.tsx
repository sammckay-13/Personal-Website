import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import BrownMckaypableLogo from "@/assets/imgs/BrownMckaypableLogo.png";
import Image from "next/image";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div>

          <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
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
      </SidebarInset>
      </SidebarProvider>
              </div>
  );
}
