import { StaticImageData } from "next/image";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { LuExternalLink } from "react-icons/lu";
import { ProjectCardProps } from "@/lib/types";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <Card className="flex flex-col md:w-full w-[33%] h-120 bg-[#f7f5ef] dark:bg-[#6F5345] border-[#d1cdc1e1] dark:border-[#543C2F] border-2 drop-shadow-md rounded-lg cursor-pointer">
        <CardHeader>
          <div className="flex flex-row items-center justify-center">
            <h2 className="text-[1.35rem] font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              {project.name}
            </h2>{" "}
            <a href={project.url} target="_blank" rel="noreferrer">
              <LuExternalLink
                size={20}
                className="mb-1 ml-2 dark:text-[#FFFBEE] text-[#6F5345]"
              />
            </a>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col -ml-1 md:-ml-0 aspect-square md:items-center md:justify-center mt-2">
          <Image
            alt="Project Image"
            src={project.image}
            className="rounded-lg object-cover h-auto w-65 md:w-200 mb-7"
          />
          <CardContent className="flex aspect-square justify-center text-lg font-semibold w-[55%] md:w-full -ml-5 md:-ml-0 text-[#6F5345] dark:text-[#FFFBEE]">
            <p>{project.description}</p>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}
