"use client";
import { useEffect, useState } from "react";
import { CustomTextProps } from "@/lib/types";

export default function CustomText({
  para1,
  para2,
  para3,
  underlinedPhrases,
  title,
}: CustomTextProps) {
  useEffect(() => {
    const paragraphs = [para1, para2, para3];
    if (underlinedPhrases) {
      paragraphs.forEach((para, paraIndex) => {
        underlinedPhrases.forEach((phrase, index) => {
          if (para && para.includes(phrase)) {
            let newPara = para.replace(
              phrase,
              `<span class="underline decoration-[#DC9954] decoration-3">${phrase}</span>`,
            );
            if (paraIndex === 0) {
              document.getElementById("para1" + title)!.innerHTML = newPara;
            } else if (paraIndex === 1) {
              document.getElementById("para2" + title)!.innerHTML = newPara;
            } else if (paraIndex === 2) {
              document.getElementById("para3" + title)!.innerHTML = newPara;
            }
          }
        });
      });
    }
  }, [underlinedPhrases, para1, para2, para3]);

  return (
    <div className="flex flex-col h-full ml-4 md:ml-15 mt-5 w-11/12">
      <p
        className="text-xl font-bold text-[#6b3a1f] dark:text-[#e8b98c]"
        id={"para1" + title}
      >
        {para1}
      </p>
      <div className="h-4" />
      <p
        className="text-xl font-bold text-[#6F5345] dark:text-[#fbf3e8]"
        id={"para2" + title}
      >
        {para2}
      </p>
      <div className="h-4" />

      <p
        className="text-lg font-bold text-[#6F5345] dark:text-[#fbf3e8]"
        id={"para3" + title}
      >
        {para3}
      </p>
    </div>
  );
}
