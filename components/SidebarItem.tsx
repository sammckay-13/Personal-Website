"use client";
import { FaHome } from "react-icons/fa";
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
  return (
    <div className="flex items-center w-full justify-start h-12 text-sm mr-2 ml-2 font-medium text-white hover:text-white rounded-md">
      <a href={heightAnchor}>
        <div className="flex items-center justify-between mt-10">
          <div className="flex">
            <FaHome className="h-6 w-6 ml-1" />
          </div>
          {sidebarState === "expanded" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
