"use client";

import { useState } from "react";

export default function Logo({
  color = "#2A6B9F",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-10 h-10 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 176 173"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="19" cy="19" r="18.5" fill={color} stroke={color} />
        <circle cx="157" cy="19" r="18.5" fill={color} stroke={color} />
        <circle cx="111" cy="19" r="18.5" fill={color} stroke={color} />
        <circle cx="65" cy="19" r="18.5" fill={color} stroke={color} />
        <circle cx="19" cy="154" r="18.5" fill={color} stroke={color} />
        <circle cx="157" cy="154" r="18.5" fill={color} stroke={color} />
        <circle cx="111" cy="154" r="18.5" fill={color} stroke={color} />
        <circle cx="65" cy="154" r="18.5" fill={color} stroke={color} />
        <circle cx="19" cy="109" r="18.5" fill={color} stroke={color} />
        <circle cx="157" cy="109" r="18.5" fill={color} stroke={color} />
        <circle
          cx="111"
          cy="109"
          r="16"
          fill="none"
          stroke={color}
          strokeWidth="6"
          className="transition-all group-hover:fill-[#F59E0B] group-hover:stroke-[#F59E0B]"
        />
        <circle cx="65" cy="109" r="18.5" fill={color} stroke={color} />
        <circle cx="19" cy="64" r="18.5" fill={color} stroke={color} />
        <circle cx="157" cy="64" r="18.5" fill={color} stroke={color} />
        <circle cx="111" cy="64" r="18.5" fill={color} stroke={color} />
        <circle cx="65" cy="64" r="18.5" fill={color} stroke={color} />
      </svg>
    </div>
  );
}
