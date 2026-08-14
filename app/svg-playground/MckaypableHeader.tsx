import { MckaypableLogoAnimated } from "@/assets/animations/MckaypableLogoAnimated";

export default function MckaypableHeader() {
  return (
    <div className="flex flex-row flex-1 h-20 bg-[#6F5345] w-80% items-center">
      <span className="text-3xl font-bold text-[#FFFBEE] flex-row flex items-center ml-15">
        SVG Playground
      </span>
      <div className="flex flex-row md:ml-auto ml-21 mr-10">
        <div className="flex w-20 md:w-30 h-20 mt-7">
          <MckaypableLogoAnimated color="#FFFBEE" />
        </div>
        <h1 className="text-3xl font-bold text-[#FFFBEE] flex-row -ml-5 md:-ml-9 flex items-center">
          Mckaypable
        </h1>
      </div>
    </div>
  );
}
