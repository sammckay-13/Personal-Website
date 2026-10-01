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
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSidebar } from "./ui/sidebar";

interface Project {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
}

export default function ProjectsWrapper() {
  const { state, isMobile } = useSidebar();
  const dynamicWidth = isMobile ? 300 : 275;
  const theme = useTheme();
  const myProjects: Project[] = [
    {
      name: "Start With Who",
      description:
        "A full-scope learning management platform for Newton Institute that uses AI to discover personal insights. Includes public-facing profiles and a private/groupchat messaging service with support for various file types.",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: PersonalCompass,
    },
    {
      name: "Bidder Faster Stronger",
      description:
        "A decentralized bidding platform for NFTs of my own creation. Using web3 and MetaMask it provides a realtime bidding war with a leaderboard to see the bidder who will recieve the NFT.",
      url: "https://github.com/sammckay-13/CS458-Bidding-Game",
      image: BidderFasterStronger,
    },
    {
      name: "Gone Fishing",
      description:
        "An Alexa and email enabled UI that allowed my family to leave messages and a visual cue that one or multiple of us were out of the house.",
      url: "https://gitshare.me/repos/0ca774d5-c1c6-46d0-a93a-21a5283de8d9",
      image: GoneFishing,
    },
  ];
  return (
    <Carousel className="w-230 md:w-full mb-10">
      <CarouselContent className="ml-1">
        {myProjects.map((project) => (
          <CarouselItem
            key={project.name}
            className="basis-full pl-1 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="flex flex-col md:w-full w-[33%] h-120 bg-[#f7f5ef] dark:bg-[#6F5345] border-[#d1cdc1e1] dark:border-[#543C2F] border-2 drop-shadow-md rounded-lg">
                <CardHeader>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl font-bold text-[#6F5345] dark:text-[#FFFBEE]">
                      {project.name}
                    </h2>{" "}
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <LuExternalLink
                        size={20}
                        className="mb-0.5 ml-2 dark:text-[#FFFBEE] text-[#6F5345]"
                      />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col -ml-1.25 md:-ml-0 aspect-square md:items-center md:justify-center mt-2">
                  <Image
                    alt="Project Image"
                    src={project.image}
                    width={dynamicWidth}
                    className="rounded-lg object-cover"
                  />
                  <CardContent className="flex aspect-square items-center justify-center pb-10 text-lg font-semibold w-[55%] md:w-full -ml-4 md:-ml-0 text-[#6F5345] dark:text-[#FFFBEE]">
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
