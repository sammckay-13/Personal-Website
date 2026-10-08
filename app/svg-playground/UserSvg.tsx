"use client";

import { lazy, Suspense } from "react";
import StringToReactComponent from "string-to-react-component";
import {UserSVGProps} from "../../lib/types"

export default function UserSvg({ svgData }: UserSVGProps) {
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
