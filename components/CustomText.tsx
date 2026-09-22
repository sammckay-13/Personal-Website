interface CustomTextProps {
  para1?: string;
  para2?: string;
  para3?: string;
}

export default function CustomText({ para1, para2, para3 }: CustomTextProps) {
  return (
    <div className="flex flex-col h-full ml-4 md:ml-15 mt-5 w-11/12">
      <p className="text-xl font-bold text-[#8A4A2E]">{para1}</p>
      <div className="h-4" />
      <p className="text-xl font-bold text-[#6F5345]">{para2}</p>
      <div className="h-4" />

      <p className="text-lg font-bold text-[#6F5345]">{para3}</p>
    </div>
  );
}
