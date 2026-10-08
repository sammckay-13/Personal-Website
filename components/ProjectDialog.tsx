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
import { ProjectDialogProps } from "@/lib/types";

export default function ProjectDialog({
  isOpen,
  projectName,
  projectImage,
  projectDescription,
  projectUrl,
  onClose,
}: ProjectDialogProps) {
  const [projectImageSrc, setProjectImageSrc] = useState<
    string | StaticImageData | null
  >(projectImage || null);

  useEffect(() => {
    if (projectImage) {
      setProjectImageSrc(projectImage);
    }
  }, [projectImage]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        <DialogContent
          className="sm:max-w-lg sm:max-h-full bg-[#f7f5ef] dark:bg-[#6F5345]"
          showCloseButton={false}
        >
          <DialogHeader>
            <div>
              <Image
                alt="Project Image"
                src={projectImageSrc || ""}
                className="rounded-lg object-cover h-auto w-65 md:w-200 mb-7"
                width={200}
                height={200}
              />
            </div>
            <DialogTitle className="text-[1.5rem] font-bold text-[#6F5345] dark:text-[#FFFBEE]">
              {projectName}
            </DialogTitle>
            <DialogDescription className="text-[#6F5345] dark:text-[#FFFBEE] text-lg font-semibold">
              {projectDescription}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Close</Button>} />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
