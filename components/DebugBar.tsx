"use client";
import { useState, useEffect } from "react";

export default function DebugBar() {
  const [mounted, setMounted] = useState("NOT MOUNTED");

  useEffect(() => {
    setMounted("MOUNTED - width: " + window.innerWidth);
  }, []);

  return (
    <div style={{position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', zIndex: 9999, padding: '4px', fontSize: '14px'}}>
      {mounted}
    </div>
  );
}