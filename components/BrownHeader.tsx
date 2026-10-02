"use client";
import { useTheme } from "next-themes";

import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";
import ProfilePicture from "@/assets/imgs/ProfilePicture.png";
import Image from "next/image";
import AnimatedLine from "@/assets/animations/AnimatedLines";
import { ModeToggle } from "./ui/ModeToggle";
import { CustomIsMobile } from "./ui/sidebar";
export default function BrownHeader() {
  const checkIsMobile = CustomIsMobile();
  return (
    <div className="flex flex-col flex-1 h-fit bg-[#49362D] mb-10" id="hero">
      {checkIsMobile ? <ModeToggle /> : <></>}

      <div className="flex flex-row bg-[#49362D] md:ml-auto ml-21 mt-8 mr-10">
        <div className="flex w-20 md:w-30 mb-2 h-20">
          <MckaypableLogoAnimated color="#fbf3e8" />
        </div>
        <h1 className="text-3xl font-bold text-[#fbf3e8] flex-row -ml-5 md:-ml-9 mb-9 flex items-center">
          Mckaypable
        </h1>
      </div>
      <div>
        <main className="flex flex-row ml-25 md:ml-15 items-center mb-15 bg-[#49362D]">
          <div className="flex w-fit h-fit ">
            <Image
              src={ProfilePicture}
              alt="Profile Picture"
              className="md:-mt-20 flex w-40 md:w-50 h-50 md:h-60 ml-5 rounded-4xl object-cover border-[#CE7052] border-2 mb-5"
              loading="eager"
            />
          </div>
        </main>
        <div className="-mt-10 ml-4 md:ml-15 text-[#49362D]">
          <p className="text-3xl ml-0 flex-wrap md:ml-0 text-[#DC9954] font-bold">
            <span>Sam McKay - </span>
            Full Stack Engineer, Founder and CEO of McKaypable
          </p>
          <div className="h-4" />
          <p className="text-xl w-[95%] font-bold text-[#fbf3e8]">
            At McKaypable, we have a deep passion for creating disability-driven
            products. Our team of full-stack developers with years of industry
            experience can help you bridge the gaps that prevent people from
            using your tools, services, and websites. Mckaypable is the vehicle
            to achieve our goal of creating equitable access to the internet for
            everyone. By staying up to date with the latest technologies,
            trends, and research, we will help you create accessible products
            and achieve our dream of a more inclusive digital world.
          </p>
        </div>
      </div>
      <AnimatedLine />
    </div>
  );
}
