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

interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData | null;
}

export default function ProjectsWrapper() {
  const myProjects: Project[] = [
    {
      name: "Start With Who",
      description: "A full scope learning management platform which uses AI to discover personal insights. Includes public facing profiles and private messaging service",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: PersonalCompass,
    },
    {
      name: "NocoNet Attendance App",
      description: "A system designed to help job seekers track their attendance at NocoNet events",
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
              <Card className="flex flex-col md:w-full w-[33%] h-120">
                <CardHeader>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl font-bold text-black">
                      {project.name}
                    </h2>{" "}
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <LuExternalLink
                        size={20}
                        color={"#000"}
                        className="mb-0.5 ml-2"
                      />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image alt="Project Image" src={project.image} width={250} height={300} className="rounded-lg object-cover"/>
                  <CardContent className="flex aspect-square items-center justify-center p-6 text-lg">
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
