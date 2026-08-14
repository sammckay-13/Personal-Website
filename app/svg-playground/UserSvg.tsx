"use client";

import { lazy, Suspense } from "react";
import StringToReactComponent from "string-to-react-component";

interface UserSvgProps {
  svgData: string;
}
export default function UserSvg({ svgData }: UserSvgProps) {
  return (
    <StringToReactComponent>
      {`(props)=>{
           return (
            <>
            ${svgData}
            </>);}
            `}
    </StringToReactComponent>
  );
}
