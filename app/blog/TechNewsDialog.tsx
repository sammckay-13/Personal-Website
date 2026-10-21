"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TechNewsDialogProps } from "@/lib/types";
import { getDomain } from "@/lib/parseAINews";

export default function TechNewsDialog({
  isOpen,
  title,
  parsedFeed,
  onClose,
}: TechNewsDialogProps) {
  const allText = parsedFeed.join("\n");
  return isOpen ? (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="h-[85%] bg-[#fff9e7] dark:bg-[#6F5345] md:min-w-[80%]"
        showCloseButton={true}
      >
        <DialogHeader className="max-h-15">
          <DialogTitle className="text-3xl pt-3 w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
            {title}
          </DialogTitle>
          <DialogDescription className="text-[#6F5345] h-[95%] dark:text-[#FFFBEE] text-lg font-semibold scrollbar-thumb-[#543c2f] scrollbar-none pt-6 overflow-y-auto"></DialogDescription>
        </DialogHeader>
        <div className=" fixed w-full mt-20 bg-[#dc9954] h-3" />
        <ul className=" flex max-h-[78vh] flex-col gap-4 overflow-y-auto pr-2 mb-5">
          {parsedFeed.length > 0 ? (
            parsedFeed.map((item) => (
              <li key={item.url} className="text-base mt-1">
                <div className="font-semibold text-3xl mb-1 ml-2 underline decoration-3 decoration-mt-10 underline-offset-5 decoration-[#ce7052] dark:text-[#FFF1D6] text-[#8b6959]">
                  {item.title}
                </div>
                <div className=" text-lg text-[#8b6959] dark:text-[#FFF1D6] ml-5">
                  {item.summary}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline dark:text-[#acbcd9] text-[#88a6dc] flex gap-2 w-fit ml-5"
                >
                  <img
                    src={getDomain(item.domain)}
                    alt={`${item.domain} logo`}
                    className="h-5 w-5 rounded"
                  />
                  {item.domain}
                </a>
              </li>
            ))
          ) : (
            // fallback if the string isn't in the expected format
            <p className="text-lg font-semibold text-[#ce7052]">{allText}</p>
          )}
        </ul>
        <div className="fixed mt-174 w-full bg-[#dc9954] h-2" />
      </DialogContent>
    </Dialog>
  ) : (
    <p></p>
  );
}
