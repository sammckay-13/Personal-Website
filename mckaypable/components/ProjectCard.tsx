import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LuExternalLink } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <Card className="h-100 w-72">
      <CardHeader>
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl font-bold text-black">{title}</h2>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            <LuExternalLink size={20} color={"#000"} className="mb-1.25 ml-2" />
          </a>
        </div>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <p>{description}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
