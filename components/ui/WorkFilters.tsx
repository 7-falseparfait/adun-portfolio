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

const WorkFilters = ({ tags = defaultTags, onChange, activeTag }: WorkFiltersProps & { activeTag?: string }) => {
  const [internalActive, setInternalActive] = useState<string>(tags[0]);

  const currentActive = activeTag || internalActive;

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
          isActive={currentActive === t}
          onClick={() => {
            setInternalActive(t);
            onChange?.(t);
          }}
        />
      ))}
    </div>
  );
};

export default WorkFilters;
