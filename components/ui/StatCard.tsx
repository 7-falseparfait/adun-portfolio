"use client"; // Required for animation hooks

import CountUp from "react-countup";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  // 1. Helper to separate numbers from text (e.g., "40M+" -> value: 40, suffix: "M+")
  const parseNumber = (str: string) => {
    const match = str.match(/(\d+)(.*)/); // Regex to find digits first, then the rest
    if (match) {
      return {
        val: parseInt(match[1], 10), // The number (e.g., 40)
        suffix: match[2], // The rest (e.g., "M+")
      };
    }
    return { val: 0, suffix: "" }; // Fallback
  };

  const { val, suffix } = parseNumber(number);

  return (
    <div
      className="
      /* Container Basics */
      flex flex-col justify-center
      bg-[#050505] 
      text-white
      
      /* Mobile Defaults (Responsive) */
      w-full h-auto p-5 rounded-3xl border-[0.5px] border-[#494949]
      
      /* Desktop Specs */
      md:h-[172px] 
      md:rounded-4xl 
      md:p-6 
      md:gap-2
    "
    >
      {/* 2. Dynamic Number with Animation */}
      <span
        className="
        font-crimson 
        font-bold 
        text-white
        text-[56px] leading-none tracking-tight
        md:text-[80px] md:leading-20 md:tracking-[-0.02em]
      "
      >
        <CountUp
          start={0}
          end={val}
          duration={2.5}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </span>

      <span
        className="
        font-switzer 
        font-semibold 
        uppercase 
        text-[#B3B3B3]
        text-xs tracking-widest leading-normal
        md:text-[16px] md:leading-7 md:tracking-[2.5px]
      "
      >
        {label}
      </span>
    </div>
  );
};

export default StatCard;
