"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "./ui/card";
import { LuExternalLink } from "react-icons/lu";
import PersonalCompass from "@/assets/imgs/PersonalCompass.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData | null;
}

export default function ProjectsWrapper() {
  const theme = useTheme();
  const myProjects: Project[] = [
    {
      name: "Start With Who",
      description:
        "A full-scope learning management platform that uses AI to discover personal insights. Includes public-facing profiles and a private messaging service.",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: PersonalCompass,
    },
    {
      name: "NocoNet Attendance App",
      description:
        "A system designed to help job seekers track their attendance at NocoNet events, a social network for job seekers, employers, and career coaches.",
      url: "https://explorer.social",
      image: null,
    },
    {
      name: "Quantum",
      description: "A decentralized social media platform",
      url: "https://quantum.social",
      image: null,
    },
  ];
  return (
    <Carousel className="w-230 md:w-full">
      <CarouselContent className="ml-1">
        {myProjects.map((project) => (
          <CarouselItem
            key={project.name}
            className="basis-full pl-1 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="flex flex-col md:w-full w-[33%] h-120 bg-[#FFFBEE] dark:bg-[#6F5345] border-[#d1cdc1e1] dark:border-[#543C2F] border-2 drop-shadow-md rounded-lg">
                <CardHeader>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#6F5345] dark:text-[#FFFBEE]">
                      {project.name}
                    </h2>{" "}
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <LuExternalLink
                        size={20}
                        color={theme.theme === "dark" ? "#FFFBEE" : "#6F5345"}
                        className="mb-0.5 ml-2"
                      />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image
                    alt="Project Image"
                    src={project.image}
                    width={300}
                    className="rounded-lg object-cover"
                  />
                  <CardContent className="flex aspect-square items-center justify-center pb-10 text-lg font-semibold text-[#6F5345] dark:text-[#FFFBEE]">
                    <p>{project.description}</p>
                  </CardContent>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
