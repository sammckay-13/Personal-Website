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
import { getDomain, parseFeed } from "@/lib/parseAINews";
import { FaBookOpen } from "react-icons/fa";

export default function TechNewsCard({
  title,
  content,
  sources,
  createdAt,
}: TechNewsCardProps) {
  const createdAtArr = createdAt.toString().split(" ");
  const dateString =
    createdAtArr[0] + " " + createdAtArr[1] + " " + createdAtArr[2];
  const [isOpen, setIsOpen] = useState(false);
  let parsedSources = sources.map((data, index) => {
    return ("https://" + getDomain(data))
  })


  let dedupedSources = [...new Set(parsedSources)];
  console.log(dedupedSources)
  let parsedFeed = parseFeed(content)
  const allText = parsedFeed.map((item) => item.text).join("\n");

  

  return (
    <div>

    <Card className="bg-[#6f5345] border-[#fffbee] text-[#fffbee] h-70 w-170 cursor-pointer">
        <div onClick={() => setIsOpen(true)}>

        <div className="items-center justify-between w-fit flex ml-4 text-lg mb-2" onClick={() => setIsOpen(true)}>{dateString}          
            <div className="ml-4 mb-1">
                 <FaBookOpen />
                </div>
</div>
        <div className="bg-[#DC9954] h-1.25 rounded-full mb-2" />
        <CardContent className="text-lg text-[#fffbee]" >
            {allText}
        </CardContent>
        </div>
      <CardFooter className="flex flex-col mt-auto items-center bg-[#624a3e] text-lg text-[#fffbee]">
        Sources:
        {dedupedSources.map((data, index) => (
            <a key={index} href={data}>
            {dedupedSources}
          </a>
        ))}
      </CardFooter>
    </Card>

        <TechNewsDialog
        isOpen={isOpen}
        title={title}
        content={content}
        sources={sources}
        createdAt={dateString}
        onClose={() => setIsOpen(false)}
        />
        </div>
  );
}
