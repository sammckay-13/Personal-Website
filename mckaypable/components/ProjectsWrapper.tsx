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
      className="w-3/4 p-10"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex flex-row items-center justify-center gap-14">
        <CarouselItem className="basis-1/2 lg:basis-1/4">
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
      <CarouselPrevious variant="default" className="left-12" />
      <CarouselNext variant="default" className="right-12" />
    </Carousel>
  );
}
