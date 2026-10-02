"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ShadColorPicker } from "@/components/ui/color-picker";

export default function PlaygroundWrapper() {
  const [svgData, setSvgData] = useState("<svg viewBox='0 0 100 100' width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' fill='#3498db' stroke='#2980b9' stroke-width='4' /></svg>");
  useEffect(() => {
    console.log(svgData);
  }, [svgData]);
  return (
    <div className="flex flex-row ">
      <ShadColorPicker />
      <div className="flex flex-col ml-15 w-[50%] mt-15 p-1 h-full border-2 rounded">
        <Textarea
          className="w-full min-h-137 bg-white"
          placeholder="Paste SVG Data Here"
          value={svgData}
          onChange={(e) => setSvgData(e.target.value)}
        />
        <div className="flex flex-row justify-between w-full">
          <Button
            className="flex items-center justify-center mt-2 text-white rounded w-[20%] bg-[#e64d1f] p-1 font-semibold"
            onClick={() => setSvgData("")}
          >
            Clear
          </Button>
          <Button
            className="flex items-center justify-center mt-2 bg-[#6F5345] text-white rounded w-[20%] p-1 font-semibold"
            onClick={() => setSvgData(svgData)}
          >
            Submit
          </Button>
        </div>
      </div>
      <Card
        id="custom-canvas"
        className="flex flex-col md:w-[70%] w-[33%] border-3 border-black mt-15 ml-20 mr-15 h-150"
      >
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: svgData }}></div>
        </CardContent>
      </Card>
    </div>
  );
}
