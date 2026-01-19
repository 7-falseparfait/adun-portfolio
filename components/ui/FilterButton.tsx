import React from "react";

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const FilterButton = ({
  label,
  isActive = false,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        rounded-full 
        text-[14px] font-medium leading-none
        transition-all duration-200 ease-in-out
        border-[0.5px] 

        ${
          isActive
            ? "bg-white text-black border-transparent"
            : "bg-[#111111] text-white border-[#494949] hover:bg-[#2A2A2A] hover:border-white/10"
        }
      `}
    >
      {label}
    </button>
  );
};

export default FilterButton;
