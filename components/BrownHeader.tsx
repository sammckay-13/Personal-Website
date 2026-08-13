import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";
import ProfilePicture from "@/assets/imgs/ProfilePicture.png";
import Image from "next/image";
import AnimatedLine from "@/assets/animations/AnimatedLines";
export default function BrownHeader() {
  return (
    <div className="flex flex-col flex-1 h-140 bg-[#6F5345] w-80%">
      <div className="flex flex-row bg-[#6F5345] md:ml-auto ml-20 mt-8 mr-10">
        <div className="flex w-20 md:w-30 mb-2 h-20">
          <MckaypableLogoAnimated color="#FFFBEE" />
        </div>
        <h1 className="text-3xl font-bold text-[#FFFBEE] flex-row md:-ml-9 mb-9 flex items-center">
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
          <p className="text-3xl ml-11 md:ml-0">Sam McKay</p>
          <p>fdafds</p>
        </div>
        <AnimatedLine />
      </div>
    </div>
  );
}
