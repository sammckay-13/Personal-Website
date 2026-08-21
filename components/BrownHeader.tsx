import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";
import ProfilePicture from "@/assets/imgs/ProfilePicture.png";
import Image from "next/image";
import AnimatedLine from "@/assets/animations/AnimatedLines";
export default function BrownHeader() {
  return (
    <div className="flex flex-col flex-1 h-140 bg-[#6F5345] w-80%">
      <div className="flex flex-row bg-[#6F5345] md:ml-auto ml-21 mt-8 mr-10">
        <div className="flex w-20 md:w-30 mb-2 h-20">
          <MckaypableLogoAnimated color="#FFFBEE" />
        </div>
        <h1 className="text-3xl font-bold text-[#FFFBEE] flex-row -ml-5 md:-ml-9 mb-9 flex items-center">
          Mckaypable
        </h1>
      </div>
      <div>
        <main className="flex flex-row ml-25 md:ml-15 items-center mb-15 bg-[#6F5345]">
          <div className="flex w-fit h-fit ">
            <Image
              src={ProfilePicture}
              alt="Profile Picture"
              className="md:-mt-20 flex w-40 md:w-50 h-50 md:h-60 ml-5 rounded-4xl object-cover border-[#CE7052] border-2 mb-5"
              loading="eager"
            />
          </div>
        </main>
        <div className="-mt-10 ml-20 text-[#FFFBEE]">
          <p className="text-3xl ml-11 md:ml-0">
            Sam McKay - Full Stack Engineer, Founder and CEO of Mckaypable
          </p>
          <p className="text-xl">
            {" "}
            Here at McKaypable we have a deep passion for creating dissability
            driven products. Our team of fullstack developers with years of
            industry experience can help you bridge the gaps preventing people
            from utilizing your tools, services, and websites. Mckaypable is the
            vehicle to achieve our goal of creating equitable access to the
            internet for everyone. By always staying up to date with the latest
            technologies, trends, and research we will actualize this dream and
            help you along the way!{" "}
          </p>
        </div>
        <AnimatedLine />
      </div>
    </div>
  );
}
