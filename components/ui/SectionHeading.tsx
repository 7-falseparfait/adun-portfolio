import React from "react";

const SectionHeading = ({
  text = "Curated collections of my best works",
  className = "max-w-3xl",
}) => {
  return (
    <h2
      className={`
        text-foreground 
        font-[family-name:var(--font-crimson)] 
        font-normal 
        text-center
        mx-auto
        text-[32px] md:text-[56px] 
        leading-[1.2] md:leading-[64px] 
        tracking-[-0.015em] 
        ${className}
      `}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
