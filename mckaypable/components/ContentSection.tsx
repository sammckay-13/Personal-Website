import CustomText from "./CustomText";

interface ContentSectionProps {
  title: string;
}

export default function ContentSection({ title }: ContentSectionProps) {
  return (
    <div className="flex h-75 flex-col flex-1 bg-[#FFFBEE]">
      <span className="text-3xl font-bold text-[#6F5345] mt-10 ml-15">
        {title}

        <div className="bg-[#DC9954] h-1.25 w-70 rounded-full" />
      </span>
      <CustomText />
    </div>
  );
}
