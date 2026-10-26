"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SVGPlayground from "@/assets/imgs/projects/SVGPlayground.png";
import type { Project } from "../../lib/types";
import ProjectDialog from "@/components/ProjectDialog";
import PersonalCompass from "@/assets/imgs/projects/PersonalCompass.png";
import BidderFasterStronger from "@/assets/imgs/projects/BidderFasterStronger.png";
import GoneFishing from "@/assets/imgs/projects/GoneFishing.png";
import NoconetSignIn from "@/assets/imgs/projects/Noconetsignin.png";
import Tower3Defense from "@/assets/imgs/projects/Tower3Defense.png";
import DNDBuddy from "@/assets/imgs/projects/DNDBuddy.png";
import Coded_message from "@/assets/imgs/projects/Coded_message.png";
import Hermes_Discord from "@/assets/imgs/projects/HermesDiscord.png";
import AnteraCodex from "@/assets/imgs/projects/AnteraCodex.png";
import ImagePlaceholder from "@/assets/imgs/ImagePlaceholder.png";
import ComingSoon from "@/assets/imgs/projects/ComingSoon.svg";

export default function GalleryWrapper() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [myProject, setMyProject] = useState<Project>({
    name: "",
    description: "",
    url: "",
    image: SVGPlayground,
  });
  const projects: Project[] = [
    {
      name: "Start With Who",
      description:
        "An AI-powered learning platform for Newton Institute that uncovers personal insights for every student. It offers course management, public profiles, and private or group chats.",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: PersonalCompass,
    },
    {
      name: "Hermes Integration",
      description:
        "A Hermes agent integrated with the messaging platform known as Discord. There are several channels that serve a variety of function to make daily life easier. The AI News page of this website pulls from the Hephaestus channel.",
      url: "",
      image: Hermes_Discord,
    },
    {
      name: "Antera Codex",
      description:
        "A codex to keep track of my non-player characters that inhabit my fictional world of Antera, the setting of my Dungeons and Dragons campaigns.",
      url: "",
      image: AnteraCodex,
    },
    {
      name: "SVG Playground",
      description:
        "For a lot of this website I hand coded the SVGs that can be found in the animated lines and my logo. Because I was having difficulty rendering the svg code and controlling the positioning I made my own sandbox to play in.",
      url: "https://mckaypable.com/svg-playground",
      image: SVGPlayground,
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
      name: "DNDBuddy",
      description:
        "An Electron app that helps Dungeons and Dragons players manage their characters. It features a locations for players to store their character information, an inventory system, a shop, and an import/export feature.",
      url: "https://github.com/sammckay-13/dndbuddy-electron",
      image: DNDBuddy,
    },
    {
      name: "Language Encoder",
      description:
        "A language encoder that converts English text into a fictional language called Anterian. It uses unique rules to transform letters, prefixes, and suffixes, creating a language intended for use in my fictional world of Antera.",
      url: "https://github.com/sammckay-13/Anterian_language",
      image: Coded_message,
    },
    {
      name: "More Coming Soon!",
      description:
        "I love creating interesting and fun tools for personal use and I've always wanted a place to learn and grow as a developer without creating individual websites. Because of that I will be uploading more web apps here!",
      url: "",
      image: ComingSoon,
    },
  ];

  function createDialogOpen(project: Project) {
    setMyProject({
      name: project.name,
      description: project.description,
      url: project.url,
      image: project.image,
    });
    setIsDialogOpen(true);
  }
return (
  <>
    <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap w-full px-4 md:pl-25 md:pr-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="w-full max-w-sm md:max-w-none md:w-[33%] p-3 flex justify-center cursor-pointer"
          onClick={() => createDialogOpen(project)}
        >
          <ProjectCard descriptionWidth="md:w-90 w-70" project={project} />
        </div>
      ))}
    </div>

    <ProjectDialog
      isOpen={isDialogOpen}
      projectName={myProject?.name}
      projectImage={myProject?.image}
      projectDescription={myProject?.description}
      projectUrl={myProject?.url}
      onClose={() => setIsDialogOpen(false)}
    />
  </>
);
}
