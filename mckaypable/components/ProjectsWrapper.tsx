"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "./ui/card";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectsWrapper() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <div className="flex flex-row items-center justify-center">
                    <h2 className="text-2xl font-bold text-black">fda</h2>{" "}
                    <a href={"#"} target="_blank" rel="noreferrer">
                      <LuExternalLink
                        size={20}
                        color={"#000"}
                        className="mb-1.25 ml-2"
                      />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <p>fda</p>
                  </CardContent>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
