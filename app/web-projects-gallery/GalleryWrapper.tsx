"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ShadColorPicker } from "@/components/ui/color-picker";
import ProjectCard from "@/components/ProjectCard";
import ImagePlaceholder from "@/assets/imgs/ImagePlaceholder.png";
import type { Project } from "../../lib/types";


export default function GalleryWrapper() {
    const projects: Project[] = [
           {
      name: "Start With Who",
      description:
        "An AI-powered learning platform for Newton Institute that uncovers personal insights for every student. It offers course management, public profiles, and private or group chats.",
      url: "https://app.startwithwho.ai/compass/sammckay",
      image: ImagePlaceholder,
    },
    ]
  return (
    <div className="flex flex-row ">
  {      projects.map((project) => (

      <ProjectCard project={project}/>
        )
    )
        }
    </div>
  );
}
