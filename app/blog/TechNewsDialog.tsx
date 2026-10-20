"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { TechNewsDialogProps } from "@/lib/types";
import { parseFeed } from "@/lib/parseAINews";

export default function TechNewsDialog({
  isOpen,
  title,
  content,
  sources,
  createdAt,
  onClose,
}: TechNewsDialogProps) {
  let parsedContent = parseFeed(content)
  return (
    (isOpen ? (

      <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        <DialogContent
          className="h-[90%] bg-[#fffbee] dark:bg-[#6F5345] md:min-w-[90%]"
          showCloseButton={true}
          >
            <DialogHeader>

            <DialogTitle className="text-3xl w-full font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              {title}
            </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-[#6F5345] h-full dark:text-[#FFFBEE] text-lg font-semibold">
            <div className=" fixed w-full -ml-4 bg-[#dc9954] h-2"/>
                  <ul className="flex max-h-[78vh] flex-col gap-4 overflow-y-auto pr-2 text-[#6F5345] dark:text-[#FFFBEE]">
  {parsedContent.length > 0 ? (
    parsedContent.map((item) => (
      <li key={item.url} className="text-base mt-5">
        <p className="font-semibold text-xl text-[#FFF1D6]">{item.text}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-[#acbcd9]"
        >
          {item.source} · {item.domain}
        </a>
      </li>
    ))
  ) : (
    // fallback if the string isn't in the expected format
    <p className="text-lg font-semibold text-[#ce7052]">{content}</p>
  )}
</ul>
            </DialogDescription>
        </DialogContent>
      </form>
    </Dialog>
        ) : (<p></p>))
  );
}
