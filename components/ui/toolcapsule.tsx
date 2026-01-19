import React from "react";
import Image from "next/image";

interface ToolCapsuleProps {
  label: string;
  iconSrc?: string;
}

const ToolCapsule = ({ label, iconSrc }: ToolCapsuleProps) => {
  return (
    <div
      className="
      /* Layout & Box Model */
      flex items-center justify-center
      w-[200px] 
      h-[48px] 
      px-6 py-3
      gap-2

      /* Visuals */
      rounded-full
      border-[0.5px] border-[#494949]
      bg-[#111111]
      
      /* Removed: hover effects and transitions */
      cursor-default
      "
    >
      {iconSrc && (
        <div className="relative w-5 h-5 shrink-0">
          <Image src={iconSrc} alt={label} fill className="object-contain" />
        </div>
      )}
      <span
        className="
        text-[#B3B3B3] 
        font-switzer 
        font-normal       
        text-[16px]       
        leading-[24px]    
        tracking-normal   
        text-center
      "
      >
        {label}
      </span>
    </div>
  );
};

export default ToolCapsule;
