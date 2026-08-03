"use client";
import Download from "@/assets/imgs/Download.png";
import email from "@/assets/imgs/email.png";
import github from "@/assets/imgs/github.png";
import Home_icon from "@/assets/imgs/Home_Icon.png";
import LinkedIn from "@/assets/imgs/LinkedIn.png";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SidebarItemProps {
  section: string;
  heightAnchor: string;
}

export default function SidebarItem({
  section,
  heightAnchor,
}: SidebarItemProps) {
  let displayedIcon;

  if (section === "Home") {
    displayedIcon = Home_icon;
  } else if (section === "GitHub") {
    displayedIcon = github;
  } else if (section === "My Projects") {
    displayedIcon = Download;
  } else if (section === "Resume") {
    displayedIcon = Download;
  } else if (section === "Contact Me") {
    displayedIcon = email;
  } else if (section === "LinkedIn") {
    displayedIcon = LinkedIn;
  } else {
    displayedIcon = Download;
  }

  return (
    <div className="flex items-center w-full justify-start h-20 text-sm mr-2 ml-2 font-medium text-white hover:bg-[#533d33] hover:text-white rounded-md">
      <a href={heightAnchor}>
        <div className="flex items-center justify-between ml-2">
          <Image src={displayedIcon} alt="Download" className="w-12 h-12" />
          <span className="ml-2 text-3xl font-medium text-white">
            {section}
          </span>
        </div>
      </a>
    </div>
  );
}
