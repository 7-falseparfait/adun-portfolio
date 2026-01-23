"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";

interface WorkFiltersProps {
  tags?: string[];
  onChange?: (tag: string) => void;
}

const defaultTags = [
  "Talking Head",
  "Social Media Edit",
  "Event & Lifestyle",
  "Brand & Business",
  "Narrative & Creative",
];

const WorkFilters = ({ tags = defaultTags, onChange }: WorkFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(tags[0]);

  return (
    <div
      className="
        flex flex-wrap 
        justify-center  
        gap-3 
        w-full max-w-[900px] /* Constraints prevent it from getting too wide on tablet */
        mx-auto my-5 
        md:mt-4 md:mb-5
      "
    >
      {tags.map((t) => (
        <FilterButton
          key={t}
          label={t}
          isActive={activeCategory === t}
          onClick={() => {
            setActiveCategory(t);
            onChange?.(t);
          }}
        />
      ))}
    </div>
  );
};

export default WorkFilters;
