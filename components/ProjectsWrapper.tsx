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
import BidderFasterStronger from "@/assets/imgs/BidderFasterStronger.png";
import GoneFishing from "@/assets/imgs/GoneFishing.png";
import NoconetSignIn from "@/assets/imgs/Noconetsignin.png";
import Tower3Defense from "@/assets/imgs/Tower3Defense.png";
import Coded_message from "@/assets/imgs/Coded_message.png";
import ImagePlaceholder from "@/assets/imgs/ImagePlaceholder.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ProjectDialog from "./ProjectDialog";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
}

export default function ProjectsWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [myProject, setMyProject] = useState<Project>({
    name: "",
    description: "",
    url: "",
    image: ImagePlaceholder, // Placeholder image
  });
  
  const myProjects: Project[] = [
    {
      name: "Start With Who",
      description:
      "An AI-powered learning platform for Newton Institute that uncovers personal insights for every student. It offers course management, public profiles, and private or group chats.",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: PersonalCompass,
    },
    {
      name: "Noconet Sign In",
      description:
      "A sign-in system for members of Noconet, a non-profit designed to help people in Northern Colorado find job opportunities. The previous google sheet was inefficient, so I created a system that is user-friendly.",
      url: "https://github.com/sammckay-13/NocoNetAttendanceApp",
      image: NoconetSignIn,
    },
    {
      name: "Bidder Faster Stronger",
      description:
      "A decentralized bidding platform for NFTs that connects through MetaMask. It offers realtime bidding, a live leaderboard, and clear results showing who wins each NFT.",
      url: "https://github.com/sammckay-13/CS458-Bidding-Game",
      image: BidderFasterStronger,
    },
    {
      name: "Gone Fishing",
      description:
      "An Alexa-powered family board built on AWS, with an email-enabled UI. It let us leave each other messages, with a visual cue showing when one or more of us had left the house.",
      url: "https://gitshare.me/repos/0ca774d5-c1c6-46d0-a93a-21a5283de8d9",
      image: GoneFishing,
    },
    {
      name: "Tower3Defense",
      description:
      "A VR tower defense game built with Unreal using their blueprint system. It features multiple levels of increasing difficulty, unique enemy types, an intuitive UI, and an upgrade menu.",
      url: "https://github.com/sammckay-13/Tower-3Defense",
      image: Tower3Defense,
    },
    {
      name: "Anterian Language Encoder",
      description:
      "A language encoder that converts English text into a fictional language called Anterian. It uses unique rules to transform letters and words, creating a language intended for use in my fictional world of Antera.",
      url: "https://github.com/sammckay-13/Anterian_language",
      image: Coded_message,

    }
  ];
  
  const createDialogOpen = (
    projectName: string,
    projectImage: StaticImageData,
    projectDescription: string,
    projectUrl: string
  ) => {
    setMyProject({
      name: projectName,
      description: projectDescription,
      url: projectUrl,
      image: projectImage,
    });
    setIsDialogOpen(true);
  }
  return (
    <Carousel className="w-230 md:w-full mb-10">
      <CarouselContent className="ml-1">
        {myProjects.map((project) => (
          <CarouselItem
            key={project.name}
            className="basis-full pl-1 lg:basis-1/3"
          >
            <div className="p-1">
              <Card
                className="flex flex-col md:w-full w-[33%] h-120 bg-[#f7f5ef] dark:bg-[#6F5345] border-[#d1cdc1e1] dark:border-[#543C2F] border-2 drop-shadow-md rounded-lg cursor-pointer"
                onClick={() => createDialogOpen(project.name, project.image, project.description, project.url)}
              >
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
              <ProjectDialog
                isOpen={isDialogOpen}
                projectName={myProject?.name}
                projectImage={myProject?.image}
                projectDescription={myProject?.description}
                projectUrl={myProject?.url}
                onClose={() => setIsDialogOpen(false)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
