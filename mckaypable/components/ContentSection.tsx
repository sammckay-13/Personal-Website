import { cn } from "@/lib/utils";
import CustomText from "./CustomText";
import { Badge } from "./ui/badge";

interface ContentSectionProps {
  title: string;
  badges?: {
    name: string;
    color?: string;
  }[];
  id?: string;
}

export default function ContentSection({
  title,
  badges,
  id,
}: ContentSectionProps) {
  return (
    <div className="flex h-75 flex-col flex-1 bg-[#FFFBEE] mb-6" id={id}>
      <span className="text-3xl font-bold text-[#6F5345] mt-10 ml-15 w-fit">
        {title}

        <div className="bg-[#DC9954] h-1.25 rounded-full" />
      </span>
      <CustomText />
      <div className="flex flex-row ml-15 gap-4 mt-3">
        {badges?.map((item) => (
          <Badge
            key={item.name}
            className={cn(
              "p-4 text-lg text-[#6F5345] font-semibold rounded-md drop-shadow border border-[#d1cdc1e1]",
              item.color ? item.color : "bg-[#e4d7ab]",
            )}
          >
            {item.name}{" "}
          </Badge>
        ))}
      </div>
    </div>
  );
}
