import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

export default function ProjectsWrapper() {
  return (
    <Carousel
      className="w-full p-10 bg-[#FFFBEE]"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex flex-row items-center justify-center gap-2">
        <CarouselItem className="basis-1/2 lg:basis-1/4 mr-2 p-3">
          <ProjectCard
            title="Project 1"
            description="Description"
            link="https://www.google.com"
            image="https://via.placeholder.com/150"
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 lg:basis-1/4">
          <ProjectCard
            title="Project 2"
            description="Description"
            link="https://www.google.com"
            image="https://via.placeholder.com/150"
          />
        </CarouselItem>
        <CarouselItem className="lg:basis-1/4">
          <ProjectCard
            title="Project 3"
            description="Description"
            link="https://www.google.com"
            image="https://via.placeholder.com/150"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious variant="default" className="left-20" />
      <CarouselNext variant="default" className="right-20" />
    </Carousel>
  );
}
