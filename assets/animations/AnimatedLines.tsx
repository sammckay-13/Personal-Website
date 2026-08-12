"use client";
import { motion } from "motion/react";

export default function AnimatedLine() {
  return (
    <div className="flex flex-col h-15 mt-32 mb-1 bg-transparent -ml-5">
      <svg viewBox="0 0 10% 10%" width="100%" height="100%">
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#CE7052"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 3.75, ease: "easeOut", delay: 0.15 }}
        />
      </svg>
      <svg viewBox="0 0 10% 10%" width="100%" height="100%">
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#DC9954"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 3.87, ease: "easeOut", delay: 0.15 }}
        />
      </svg>
      <svg
        viewBox="0 0 10% 10%"
        width="100%"
        height="100%"
        className="bg-transparent"
      >
        <motion.path
          d="M 10,10 Q 10,10 10,10 T 4000,10" // Your SVG path data
          fill="transparent"
          stroke="#D3C598"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }} // Starts completely hidden
          animate={{ pathLength: 1 }} // Automatically draws the line
          transition={{ duration: 4, ease: "easeOut", delay: 0.15 }}
        />
      </svg>
    </div>
  );
}
