import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ContentSection from "@/components/ContentSection";
import ProjectsWrapper from "@/components/ProjectsWrapper";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomFooter } from "@/components/CustomFooter";
import BrownHeader from "@/components/BrownHeader";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default async function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 h-140 bg-[#6F5345]">
          <header className="flex sticky">
            <div className="flex items-center gap-2 px-4 fixed">
              <SidebarTrigger
                size="default"
                className="-ml-1 h-10 mt-4 dark:bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] [&>svg]:size-5! z-50"
              />
            </div>
          </header>
          <div className="flex flex-col flex-1 h-140 dark:bg-[#49362D]">
            <div className="flex flex-row justify-end mr-10">
              
            </div>
            <BrownHeader />
            <ContentSection
              title="Who am I?"
              badges={[
                {
                  name: "React",
                },
                {
                  name: "Next.js",
                  color: "bg-[#61DAFB]",
                },
                {
                  name: "Tailwind",
                },
                {
                  name: "TypeScript",
                },
                {
                  name: "Workflow optimization",
                },
                {
                  name: "Figma",
                },
                {
                  name: "SVG",
                },
              ]}
              content={{
                para1:
                  "I'm Sam McKay, a Full Stack Engineer and the Founder/CEO of McKaypable. My background in Full Stack Development and years of experience building integrated software have given me the opportunity to work across a wide range of technologies, including JavaScript, TypeScript, React, Node.js, Next.js, Python, and Agentic Coding models.",
                para2:
                  "But for me, software development has always been about more than just writing code. I'm fascinated by the ways technology can either open doors for people or unintentionally put up barriers. This is what led me to become passionate about accessibility and disability-driven development.",
                para3:
                  "I founded McKaypable because I believe accessibility should be a prerequisite, rather than an addition. I want to help developers and organizations view their products from a new perspective and build technology that can be enjoyed by everyone.",
              }}
            />
            <ContentSection
              title="My Projects"
              id="my projects"
              content={{
                para1:
                  "Throughout my education and career, I've had the opportunity to work on many projects. From building websites and applications to creating accessible interfaces for people with disabilities. Here are a few of my most notable projects:",
              }}
            />
            <div className="md:w-[70%] ml-10 md:ml-[13%] mt-10">
              <ProjectsWrapper />
            </div>
            <ContentSection
              title="What We Offer"
              id="what we offer"
              content={{
                para1:
                  "McKaypable is a full-service digital accessibility company first and foremost.",
                para2:
                  "Because of this focus, we offer services to help you and your business create accessible products and interfaces for people with disabilities, regardless of what they may be.",
                para3:
                  "Full scale accessibility consulting, design, development, and training services are available to help you create accessible products and interfaces for everyone.",
              }}
              list={[
                "Accessibility consulting",
                "Design and development services",
                "Training and education",
              ]}
            />

            <div className="w-full h-13 ml-3.5 md:ml-0 md:w-full flex md:justify-center">
              <CustomFooter />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
