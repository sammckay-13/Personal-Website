"use client";
import {motion} from "motion/react"
export const MckaypableLogoAnimated = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 90 90" width="100%" height="100%" className="mr-3 mt-0.5">
      <motion.path
        d="M 5,25 L 25, 5 L 45,25"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }} // Starts completely hidden
          animate={{ pathLength: 1,  opacity:1 }} // Automatically draws the line
          transition={{ duration: .75, ease: "easeOut", delay: 0.35, }}
      />
      <motion.path
        d="M 25,25 L 45, 5 L 65,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity:0 }} // Starts completely hidden
          animate={{ pathLength: 1,  opacity:1 }} // Automatically draws the line
          transition={{ duration: .75, ease: "easeOut", delay: .35 }}
      />
      <motion.path
        d="M 5,25 L 65,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity:0 }} // Starts completely hidden
          animate={{ pathLength: 1,  opacity:1 }} // Automatically draws the line
          transition={{ duration: .75, ease: "easeOut", delay: .35 }}
      />
      <motion.path
        d="M 5, 25 L 25,45 L 45,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }} // Starts completely hidden
          animate={{ pathLength: 1,  opacity:0.5 }} // Automatically draws the line
          transition={{ duration: .75, ease: "easeOut", delay: .35 }}
      />
      <motion.path
        d="M 25, 25 L 45,45.2 L 65,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }} // Starts completely hidden
          animate={{ pathLength: 1,  opacity:0.5 }} // Automatically draws the line
          transition={{ duration: .75, ease: "easeOut", delay: .35 }}
      />
    </svg>
  );
};
