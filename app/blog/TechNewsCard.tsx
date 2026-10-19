"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TechNewsCardProps } from "@/lib/types";
import { useState } from "react";
import TechNewsDialog from "./TechNewsDialog";

export default function TechNewsCard({
  blurb_title,
  content,
  sources,
  createdAt,
}: TechNewsCardProps) {
  const createdAtArr = createdAt.toString().split(" ");
  const dateString =
    createdAtArr[0] + " " + createdAtArr[1] + " " + createdAtArr[2];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-[#6f5345] border-[#fffbee] text-[#fffbee] h-70 w-150">
        <div className="items-center flex ml-4 text-lg -mb-2">{dateString}</div>
        <div className="bg-[#DC9954] h-1.25 rounded-full" />

        <CardHeader className="text-[#fffbee] text-2xl">
          {blurb_title}
        </CardHeader>
        <CardContent className="text-lg text-[#fffbee]">
          {content.slice(0, 50) + "..."}
        </CardContent>
      <CardFooter className="flex flex-col items-center bg-[#624a3e] text-lg text-[#fffbee]">
        Sources:
        {sources.map((data, index) => (
          <a key={index} href={data}>
            {data}
          </a>
        ))}
      </CardFooter>
    </Card>
  );
}
