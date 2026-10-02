"use client";
import { cn } from "@/lib/utils";
import CustomText from "./CustomText";
import { Badge } from "./ui/badge";
import { useState } from "react";

export interface SkillBadge {
  title: string;
  color?: string;
  textColor?: string;
}

export interface SkillGroup {
  skill: string;
  items: SkillBadge[];
}

export interface ContentSectionProps {
  title: string;
  skillGroups?: SkillGroup[];
  id?: string;
  content?: {
    para1?: string;
    para2?: string;
    para3?: string;
    underlinedPhrases?: string[];
  };
  list?: string[];
}

export default function ContentSection({
  title,
  skillGroups,
  id,
  content,
  list,
}: ContentSectionProps) {
  return (
    <div className="flex h-fit flex-col flex-1" id={id}>
      <span className="text-3xl font-bold text-[#4E2A2A] dark:text-[#fbf3e8] w-fit mt-5 ml-4 md:ml-15 md:w-fit ">
        {title}

        <div className="bg-[#DC9954] h-1.25 rounded-full" />
      </span>
      <CustomText
        title={title}
        para1={content?.para1}
        para2={content?.para2}
        para3={content?.para3}
        underlinedPhrases={content?.underlinedPhrases}
      />
      <div className="block ml-4 md:ml-15 gap-4 mt-3 w-[70%] md:w-fit">
        {skillGroups?.map((group) => (
          <div key={group.skill} className="flex flex-col gap-2 ml-4">
            <div className="flex flex-row gap-2 items-center mb-1 mt-5">
              <div className="text-xl font-bold text-[#4E2A2A] dark:text-[#FFFBEE]">
                {group.skill}
                <div className="bg-[#DC9954] h-1.25 rounded-full -mt-1" />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:flex-row gap-2">
              {group.items.map((item) => (
                <div key={item.title} className="flex md:flex-row">
                  <Badge
                    key={item.title}
                    className={cn(
                      "p-3 text-md font-semibold rounded-md drop-shadow border w-20 w-fit border-[#d1cdc1e1] dark:border-[#49362D] flex items-center",
                      item.color ? item.color : "bg-[#e4d7ab]",
                      item.textColor
                        ? item.textColor
                        : "text-[#49362D] dark:text-[#FFFBEE]",
                    )}
                  >
                    <p className="text-center justify-center items-center flex w-full h-full mt-0.5">
                      {item.title}{" "}
                    </p>
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-2 ml-4 md:ml-15 mt-3 w-[70%] md:w-fit">
        {list?.map((listItem) => (
          <li
            key={listItem}
            className="text-lg text-[#49362D] dark:text-[#fbf3e8] font-semibold"
          >
            • {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
