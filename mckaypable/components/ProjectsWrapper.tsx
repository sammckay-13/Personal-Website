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
      className="w-full p-10 h-full bg-[#FFFBEE] flex items-center justify-center"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex flex-row items-center ml-12 gap-15">
        <CarouselItem className="basis-1/2 lg:basis-1/4 pt-1 pb-1">
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
      <CarouselPrevious variant="default" className="left-11" />
      <CarouselNext variant="default" className="right-15" />
    </Carousel>
  );
}
