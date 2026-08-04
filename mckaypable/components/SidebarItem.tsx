"use client";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaHome,
  FaEnvelope,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SidebarItemProps {
  section: string;
  heightAnchor: string;
  sidebarState: "expanded" | "collapsed";
}

export default function SidebarItem({
  section,
  heightAnchor,
  sidebarState,
}: SidebarItemProps) {
  let displayedIcon;
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  if (section === "Home") {
    displayedIcon = <FaHome className="h-6 w-6 ml-1" />;
  } else if (section === "My Projects") {
    displayedIcon = <FaGithub className="h-6 w-6 ml-1" />;
  } else if (section === "Resume") {
    displayedIcon = <FaDownload className="h-6 w-6 ml-1" />;
  } else if (section === "Contact Me") {
    displayedIcon = <FaEnvelope className="h-6 w-6 ml-1" />;
  } else if (section === "LinkedIn") {
    displayedIcon = <FaLinkedin className="h-6 w-6 ml-1" />;
  } else {
    displayedIcon = <FaGithub className="h-6 w-6 ml-1" />;
  }


  return (
    // It would be good to have a cn() so that we can add the hover effect
    <div className="flex items-center w-full justify-start h-12 text-sm mr-2 ml-2 font-medium text-white hover:text-white rounded-md">
      <a href={heightAnchor}>
        <div className="flex items-center justify-between">
          {displayedIcon}
          {sidebarState === "expanded" && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2, duration: 0.8, ease: [0, 0.71, 0.2, 1.01],}}>
              <span className="ml-2 text-xl font-medium text-white">
                {section}
              </span>
            </motion.div>
          )}
        </div>
      </a>
    </div>
  );
}
