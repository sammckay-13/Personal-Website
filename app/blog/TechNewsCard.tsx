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
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { getLogo } from "@/lib/logos";

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
  let parsedFeed = parseFeed(content);

  return (
    <div>
      <Card className="dark:bg-[#6f5345] bg-[#fff9e7] border-[#fffbee] text-[#fffbee] h-auto md:h-110 w-full md:w-170">
        <div className="items-center justify-between w-fit flex ml-4 text-xl mb-2 font-semibold text-[#8b6959] dark:text-[#fffbee]">
          {dateString}
          <div className="ml-4">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <FaBookOpen className="dark:text-[#fffbee] text-[#8b6959]" />
                  </Button>
                }
              />
              <TooltipContent className="dark:text-[#fffbee] text-[#8b6959] dark:bg-[#6f5345] bg-[#fff9e7]">
                <p className="text-lg">Click to read more!</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex bg-[#DC9954] w-full h-1.75 mb-2 text-[#ffffffff]-0" ><span className="invisible">fds</span></div>
        <CardContent className="text-lg ml-5 h-50 text-[#8b6959] dark:text-[#fffbee]">
          {parsedFeed.map((data, index) => {
            return (
              <li key={data.url}>
                <p className="font-semibold">{data.title}</p>
                <p className="">{data.summary.slice(0, 150) + "..."}</p>
              </li>
            );
          })}
        </CardContent>
        <CardFooter className="flex flex-col mt-[5%] items-center bg-[#624a3e] text-lg text-[#fffbee]">
          Sources:
          {dedupedSources.map((data, index) => (
            <a key={index} href={data} className="flex flex-row gap-3">
              <Image
                alt="Project Image"
                src={getLogo(getDomain(data)) || ""}
                className="h-7 w-7 mb-7"
                width={200}
                height={200}
              />
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
