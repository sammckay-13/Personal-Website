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

interface Project {
  name: string;
  description: string;
  url: string;
  image: string | null;
}

export default function ProjectsWrapper() {
  const myProjects: Project[] = [
    {
      name: "Genesis",
      description: "A decentralized social media platform",
      url: "https://genesis.social",
      image: null,
    },
    {
      name: "Explorer",
      description: "A decentralized social media platform",
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
    <Carousel className="w-200 md:w-full">
      <CarouselContent className="ml-1">
        {myProjects.map((project) => (
          <CarouselItem
            key={project.name}
            className="basis-full pl-1 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="flex flex-col md:w-full w-[30%]">
                <CardHeader>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl font-bold text-black">
                      project.name
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
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
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
