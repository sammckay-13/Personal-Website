import { useEffect } from "react";

interface CustomTextProps {
  para1?: string;
  para2?: string;
  para3?: string;
  underlinedPhrases?: string[];
}

export default function CustomText({ para1, para2, para3, underlinedPhrases }: CustomTextProps) {
  useEffect(() => {
    if (underlinedPhrases && underlinedPhrases.length > 0) {
      const paragraphs = [para1, para2, para3];
      paragraphs.forEach((para, index) => {
        if (para) {
          underlinedPhrases.forEach((phrase) => {
            const regex = new RegExp(`(${phrase})`, "gi");
            paragraphs[index] = paragraphs[index]!.replace(
              regex,
              `<span class="underline decoration-[#DC9954] decoration-2 underline-offset-4">$1</span>`
            );
          });
        }
      });
      para1 = paragraphs[0];
      para2 = paragraphs[1];
      para3 = paragraphs[2];
    }
  }, [underlinedPhrases, para1, para2, para3]);
  return (
    <div className="flex flex-col h-full ml-4 md:ml-15 mt-5 w-11/12">
      <p className="text-xl font-bold text-[#6b3a1f] dark:text-[#e8b98c]">{para1}</p>
      <div className="h-4" />
      <p className="text-xl font-bold text-[#6F5345] dark:text-[#d9c8b3]">{para2}</p>
      <div className="h-4" />

      <p className="text-lg font-bold text-[#6F5345] dark:text-[#d9c8b3]">{para3}</p>
    </div>
  );
}
