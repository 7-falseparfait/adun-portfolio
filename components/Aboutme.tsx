import React from "react";
import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";
import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import StatCard from "./ui/StatCard";
import ToolCapsule from "./ui/toolcapsule";
import { Button } from "./ui/button";

const details = [
  { num: "03+", label: "years of experience" },
  { num: "40M+", label: "organic views garnered" },
  { num: "590", label: "Completed projects" },
  { num: "15", label: "Happy Clients" },
];

const tools = [
  { label: "Photoshop", icon: "/photoshop.png" },
  { label: "DaVinci Resolve", icon: "/davinci.png" },
  { label: "CapCut", icon: "/capcut-3.png" },
  { label: "After Effects", icon: "/after-effects-1.png" },
];

const Aboutme = () => {
  return (
    <section className="w-full py-15 bg-background">
      <Container className="">
        <SectionLabel
          text="About me"
          className="flex items-center justify-center"
        />
        <SectionHeading
          text="I’m a versatile Video Editor dedicated to crafting clear, engaging, and visually compelling stories."
          className="md:max-w-[1200px] mt-3 mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
          {details.map((item, index) => (
            <StatCard key={index} number={item.num} label={item.label} />
          ))}
        </div>

        <div className="flex items-center w-full gap-6 mt-12 mb-8">
          <span className="h-[0.5px] bg-[#494949] flex-1"></span>
          <span className="font-switzer font-medium text-sm uppercase tracking-widest text-[#B3B3B3] shrink-0">
            TOOLS I USE
          </span>
          <span className="h-[0.5px] bg-[#494949] flex-1"></span>
        </div>

        {/* --- Infinite Carousel --- */}
        <div className="relative w-full overflow-hidden">
          {/* Left Dark Fade Overlay */}
          <div className="absolute top-0 left-0 z-10 h-full w-[100px] bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />

          {/* Right Dark Fade Overlay */}
          <div className="absolute top-0 right-0 z-10 h-full w-[100px] bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

          {/* The Scrolling Track 
              width-max: Ensures children sit in a row
              animate-scroll: The custom animation from CSS
              hover:paused: Stops moving when you hover over it
          */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* 1. Original Set */}
            <div className="flex gap-4 px-2">
              {tools.map((tool, index) => (
                <ToolCapsule
                  key={`a-${index}`}
                  label={tool.label}
                  iconSrc={tool.icon}
                />
              ))}
            </div>

            {/* 2. Duplicate Set (Required for loop) */}
            <div className="flex gap-4 px-2">
              {tools.map((tool, index) => (
                <ToolCapsule
                  key={`b-${index}`}
                  label={tool.label}
                  iconSrc={tool.icon}
                />
              ))}
            </div>

            {/* 3. Triplicate Set (Safety for wide screens) */}
            <div className="flex gap-4 px-2">
              {tools.map((tool, index) => (
                <ToolCapsule
                  key={`c-${index}`}
                  label={tool.label}
                  iconSrc={tool.icon}
                />
              ))}
            </div>

            {/* 4. Quadruplicate Set (Safety for very wide screens) */}
            <div className="flex gap-4 px-2">
              {tools.map((tool, index) => (
                <ToolCapsule
                  key={`d-${index}`}
                  label={tool.label}
                  iconSrc={tool.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="place-items-center md:mt-24">
          {/* Button Container */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <Link href="mailto:Ainamuyiwa18@gmail.com">
              <Button
                variant="default"
                className="
        cursor-pointer 
        !bg-white !text-black hover:!bg-neutral-200 
        !rounded-full 
        font-medium
        
        /* Mobile Defaults */
        px-6 py-2 text-sm w-[180px]
        
        /* Desktop Specs */
        md:w-[180px] md:h-[64px] 
        md:px-[48px] md:py-[20px] 
        md:text-base
      "
              >
                Hire Me
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="
        cursor-pointer
        !bg-transparent 
        !text-white 
        hover:!bg-[#1a1a1a] 
        !rounded-full 
        font-medium
        
        /* Border Specs */
        !border-[0.5px] !border-[#494949]
        
        /* Mobile Defaults */
        px-6 py-2 text-sm w-[180px]
        
        /* Desktop Specs */
        md:w-[180px]      
        md:h-[64px]        
        md:px-[48px]       
        md:py-[20px]       
        md:gap-[8px]       
        md:text-base
      "
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aboutme;
