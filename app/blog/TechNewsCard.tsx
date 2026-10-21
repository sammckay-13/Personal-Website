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

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";

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
    return "https://" + getDomain(data);
  });

  let dedupedSources = [...new Set(parsedSources)];
  console.log(dedupedSources);
  let parsedFeed = parseFeed(content);

  return (
    <div>
      <Card className="bg-[#6f5345] border-[#fffbee] text-[#fffbee] h-110 w-170">
          <div
            className="items-center justify-between w-fit flex ml-4 text-xl mb-2 font-semibold"
          >
            {dateString}
            <div className="ml-4">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" className="cursor-pointer" onClick={() => setIsOpen(true)}><FaBookOpen/></Button>} />
                <TooltipContent>
                  <p className="text-lg">Click to read more!</p>
                </TooltipContent>

              </Tooltip>
            </div>
          </div>
          <div className="bg-[#DC9954] h-1.25 rounded-full mb-2" />
          <CardContent className="text-lg ml-5 h-50 text-[#fffbee]">
            {parsedFeed.map((data, index) => {
              return (
                <li key={data.url}>
                  <p className="font-semibold">{data.title}</p>
                  <p className="">{data.summary.slice(0, 150) + "..."}</p>
                </li>
              );
            })}
          </CardContent>
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
      createdAt={createdAt}
        content={content}
        isOpen={isOpen}
        title={title}
        parsedFeed={parsedFeed}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
