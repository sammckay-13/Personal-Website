"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ShadColorPicker } from "@/components/ui/color-picker";
import ProjectCard from "@/components/ProjectCard";
import SVGPlayground from "@/assets/imgs/SVGPlayground.png";
import type { Project } from "../../lib/types";
import ProjectDialog from "@/components/ProjectDialog";
import ComingSoon from "@/assets/imgs/ComingSoon.svg"

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
      name: "SVG Playground",
      description:
        "For a lot of this website I hand coded the SVGs that can be found in the animated lines and my logo. Because I was having difficulty rendering the svg code and controlling the positioning I made my own sandbox to play in.",
      url: "https://mckaypable.com/svg-playground",
      image: SVGPlayground,
    },
    {
      name: "More Coming Soon!",
      description:
        "I love creating interesting and fun tools for personal use and I've always wanted a place to learn and grow as a developer without creating individual websites. Because of that I will be uploading more web apps here!",
      url: "",
      image: ComingSoon,
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
    <div className="flex flex-row w-[80%] ml-40 gap-10">
      {projects.map((project) => (
        <div className="p-1" onClick={() => createDialogOpen(project)}>

        <ProjectCard key={project.description} project={project} />
        </div>
      ))}
                <ProjectDialog
                    isOpen={isDialogOpen}
                    projectName={myProject?.name}
                    projectImage={myProject?.image}
                    projectDescription={myProject?.description}
                    projectUrl={myProject?.url}
                    onClose={() => setIsDialogOpen(false)}
                  />
    </div>
  );
}
