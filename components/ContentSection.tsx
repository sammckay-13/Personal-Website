"use client";
import { cn } from "@/lib/utils";
import CustomText from "./CustomText";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface ContentSectionProps {
  title: string;
  badges?: {
    name: string;
    color?: string;
  }[];
  id?: string;
  content?: {
    para1?: string;
    para2?: string;
    para3?: string;
  };
  list?: string[];
}

export default function ContentSection({
  title,
  badges,
  id,
  content,
  list,
}: ContentSectionProps) {
  return (
    <div className="flex h-fit flex-col flex-1 w-100 md:w-full" id={id}>
      <span className="text-3xl font-bold text-[#6F5345] w-fit mt-10 ml-4 md:ml-15 md:w-fit ">
        {title}

        <div className="bg-[#DC9954] h-1.25 rounded-full" />
      </span>
      <CustomText
        para1={content?.para1}
        para2={content?.para2}
        para3={content?.para3}
      />
      <div className="flex flex-wrap md:flex-row ml-4 md:ml-15 gap-4 mt-3 w-full">
        {badges?.map((item) => (
          <Badge
            key={item.name}
            className={cn(
              "p-3 text-md text-[#6F5345] font-semibold rounded-md drop-shadow border w-20 md:w-fit border-[#d1cdc1e1] flex items-center",
              item.color ? item.color : "bg-[#e4d7ab]",
            )}
          >
            {item.name}{" "}
          </Badge>
        ))}
        <ul>
          {list?.map((listItem) => (
            <li key={listItem} className="text-lg text-[#6F5345] font-semibold">
              -{listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
