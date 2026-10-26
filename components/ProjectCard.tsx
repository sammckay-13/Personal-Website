import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { LuExternalLink } from "react-icons/lu";
import { ProjectCardProps } from "@/lib/types";

export default function ProjectCard({
  project,
  descriptionWidth,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col w-80 md:w-full h-120 bg-[#f7f5ef] dark:bg-[#6F5345] border-[#d1cdc1e1] dark:border-[#543C2F] border-2 drop-shadow-md rounded-lg cursor-pointer">
      <CardHeader>
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-[1.35rem] font-bold text-[#6F5345] dark:text-[#FFFBEE]">
            {project.name}
          </h2>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <LuExternalLink
                size={20}
                className="mb-1 ml-2 dark:text-[#FFFBEE] text-[#6F5345]"
              />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 mt-2">
        <Image
          alt={`${project.name} screenshot`}
          src={project.image}
          className="rounded-lg object-cover h-auto w-full"
        />
        <p
          className={`text-lg font-semibold text-[#6F5345] dark:text-[#FFFBEE] ${descriptionWidth ?? ""}`}
        >
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
