import CustomText from "./CustomText";

interface ContentSectionProps {
  children?: React.ReactNode;
}

export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <div className="flex h-75 flex-col flex-1 bg-red-100">
      <h1 className="text-3xl font-bold text-black mt-10 ml-6">fdasjl</h1>
      <CustomText />
      {children}
    </div>
  );
}
