"use client";
import { motion } from "motion/react";

export default function AnimatedLine() {
  return (
    <div className="flex flex-col h-15 mt-41 bg-transparent">
      <svg viewBox="0 0 10% 10%" width="110%" height="100%" className="-ml-2">
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#CE7052"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 7, ease: "easeOut" }}
        />
      </svg>
      <svg viewBox="0 0 10% 10%" width="110%" height="100%" className=" -ml-2">
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#DC9954"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 7.5, ease: "easeOut" }}
        />
      </svg>
      <svg
        viewBox="0 0 10% 10%"
        width="110%"
        height="100%"
        className="bg-transparent -ml-2"
      >
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#D3C598"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 8, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
