"use client";
import Download from "@/assets/imgs/Download.png";
import email from "@/assets/imgs/email.png";
import github from "@/assets/imgs/github.png";
import Home_icon from "@/assets/imgs/Home_Icon.png";
import LinkedIn from "@/assets/imgs/LinkedIn.png";
import retrolineHeading from "@/assets/imgs/retrolineHeading.png";
import Image from "next/image";
import { useState } from "react";

interface SidebarItemProps {
  section: string;
  heightAnchor: string;
}

export default function SidebarItem({
  section,
  heightAnchor,
}: SidebarItemProps) {
  const [displayedIcon, setDisplayedIcon] = useState(Home_icon);

  if (section === "Home") {
    setDisplayedIcon(Home_icon);
  } else if (section === "Email") {
    setDisplayedIcon(email);
  } else if (section === "Github") {
    setDisplayedIcon(github);
  } else if (section === "LinkedIn") {
    setDisplayedIcon(LinkedIn);
  } else if (section === "Download") {
    setDisplayedIcon(Download);
  }
  return (
    <div>
      <a href={heightAnchor}>
        <Image src={displayedIcon} alt="Download" className="w-6 h-6" />
      </a>
    </div>
  );
}
