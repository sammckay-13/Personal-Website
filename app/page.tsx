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
                className="-ml-1 h-10 mt-4 bg-[#49362D] text-[#FFFBEE] hover:text-[#FFFBEE] hover:bg-[#5a4438] hover:cursor-pointer [&>svg]:size-5! z-50"
              />
            </div>
          </header>
          <div className="flex flex-col flex-1 h-140 dark:bg-[#49362D]">
            <div className="flex flex-row justify-end mr-10"></div>
            <BrownHeader></BrownHeader>
            <ContentSection
              title="Who am I?"
              skillGroups={[
                {
                  skill: "Core Stack",
                  items: [
                    {
                      title: "React",
                      color: "bg-[#61DAFB]",
                      textColor: "text-[#000000]",
                    },
                    {
                      title: "Node.js",
                      color: "bg-[#339933]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "TypeScript",
                      color: "bg-[#3178C6]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "JavaScript",
                      color: "bg-[#F7DF1E]",
                      textColor: "text-[#000000]",
                    },
                    {
                      title: "Python",
                      color: "bg-[#3776AB]",
                      textColor: "text-[#ffffff]",
                    },
                  ],
                },
                {
                  skill: "Frameworks & Tooling",
                  items: [
                    {
                      title: "Next.js",
                      color: "bg-[#000000]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "PostgreSQL",
                      color: "bg-[#31638C]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "DrizzleORM",
                      color: "bg-[#000000]",
                      textColor: "text-[#C5F74F]",
                    },
                    {
                      title: "Tailwind",
                      color: "bg-[#06B6D4]",
                      textColor: "text-[#ffffff]",
                    },
                  ],
                },
                {
                  skill: "Design & Development",
                  items: [
                    {
                      title: "Figma",
                      color: "bg-[#FF7262]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "SVG",
                      color: "bg-[#FFB13B]",
                      textColor: "text-[#000000]",
                    },
                    {
                      title: "HTML5",
                      color: "bg-[#E34F26]",
                      textColor: "text-[#ffffff]",
                    },
                  ],
                },
                {
                  skill: "Soft Skills",
                  items: [
                    {
                      title: "Accessibility",
                      color: "bg-[#6366F1]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "Workflow Optimization",
                      color: "bg-[#6366F1]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "Time Management",
                      color: "bg-[#6366F1]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "Adaptability",
                      color: "bg-[#6366F1]",
                      textColor: "text-[#ffffff]",
                    },
                    {
                      title: "Project Management",
                      color: "bg-[#6366F1]",
                      textColor: "text-[#ffffff]",
                    },
                  ],
                },
              ]}

              content={{
                para1:
                  "I'm Sam McKay, a Full Stack Engineer, Founder/CEO of McKaypable, . My background in Full Stack Development and years of experience building integrated software have allowed me to work across a wide range of technologies, including JavaScript, TypeScript, React, Node.js, Next.js, Python, and Agentic Coding models.",
                para2:
                  "But for me, software development has always been more than just writing code. I'm fascinated by the ways technology can either open doors for people or, unintentionally, create barriers. This is what led me to become passionate about accessibility and disability-driven development.",
                para3:
                  "I founded McKaypable because I believe accessibility should be a prerequisite, not an addition. I want to help developers and organizations see their products from a new perspective and build technology everyone can enjoy.",
                underlinedPhrases: ["software development has always been more than just writing code"]
              }}

            />
            <ContentSection
              title="My Projects"
              id="my projects"
              content={{
                para1:
                  "Throughout my education and career, I've had the opportunity to work on many projects; from building websites and applications to creating accessible interfaces for people with disabilities. Here are a few of my most notable projects:",
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
                  "McKaypable is a full-service digital accessibility company.",
                para2:
                  "Because of this focus, we offer services that help you and your business create accessible products and interfaces for people with disabilities.",
                para3:
                  "Our services include full-scale accessibility consulting, design, development, and training services.",
                underlinedPhrases: [
                  "Our services include full-scale accessibility consulting, design, development, and training services.",
                ],
                // Trying to figure out a way to have certain phrases underlined in the content section. I want to be able to pass in an array of phrases that will be underlined in the content section. I think this will be a good way to highlight certain phrases in the content section.",
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
