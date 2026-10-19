import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ProjectDialogProps, TechNewsDialogProps } from "@/lib/types";

export default function TechNewsDialog({
  isOpen,
  title,
  content,
  sources,
  createdAt,
  onClose,
}: TechNewsDialogProps) {
    const createdAtArr = createdAt.toString().split(" ");
  const dateString =
    createdAtArr[0] + " " + createdAtArr[1] + " " + createdAtArr[2];
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        <DialogContent
          className="sm:max-w-lg sm:max-h-full bg-[#f7f5ef] dark:bg-[#6F5345]"
          showCloseButton={true}
        >
          <DialogHeader>
            <div>{dateString}</div>
            <DialogTitle className="text-[1.5rem] font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              {title}
            </DialogTitle>
            <DialogDescription className="text-[#6F5345] dark:text-[#FFFBEE] text-lg font-semibold">
              {content}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>{sources}</DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
