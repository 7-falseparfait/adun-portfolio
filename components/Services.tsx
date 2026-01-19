import React from "react";
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";
import { Button } from "./ui/button";

// --- INLINE SERVICE TAG COMPONENT (for styling control) ---
const ServiceTag = ({ label }: { label: string }) => (
  <div className="border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
    <span className="font-[family-name:var(--font-switzer)] text-[12px] font-normal leading-[18px] tracking-[-0.005em] text-white whitespace-nowrap">
      {label}
    </span>
  </div>
);

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
}

const ServiceCard = ({
  number,
  title,
  description,
  tags,
  imageSrc = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
}: ServiceCardProps) => {
  return (
    <div
      className="
        group relative w-full
        /* --- Container Styles --- */
        bg-[#111111] 
        rounded-[24px] 
        border-[0.5px] border-white/15
        
        /* --- Layout: Mobile (Vertical) -> Desktop (Horizontal) --- */
        flex flex-col md:flex-row md:items-center
        
        /* --- Padding (Mobile: 16px, Desktop: 20px) --- */
        p-4 md:p-5
        
        /* --- Spacing between Image and Text --- */
        gap-6 md:gap-8
      "
    >
      {/* --- Image Section --- */}
      <div
        className="
          relative shrink-0 overflow-hidden
          /* --- Mobile Dimensions (Figma: 368x260, Radius 20) --- */
          w-full h-[260px] rounded-[20px]
          /* --- Desktop Dimensions --- */
          md:w-[312px] md:h-[312px] md:rounded-[24px]
        "
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 312px"
        />
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col flex-1 justify-center">
        {/* Number */}
        <p
          className="
            text-[#8C8C8C] font-[family-name:var(--font-switzer)] font-medium uppercase transition-colors group-hover:text-white
            /* Mobile */
            text-sm tracking-widest leading-none mb-3
            /* Desktop */
            md:text-[20px] md:leading-[30px] md:tracking-[4px] md:mb-6
          "
        >
          {number}
        </p>

        {/* Title */}
        <h4
          className="
            text-white font-[family-name:var(--font-crimson)] font-normal
            /* Mobile */
            text-[24px] leading-[32px] tracking-tight mb-3
            /* Desktop */
            md:text-[32px] md:leading-[48px] md:tracking-[-0.015em] md:mb-4
          "
        >
          {title}
        </h4>

        {/* Description */}
        <p
          className="
            text-[#B3B3B3] font-[family-name:var(--font-switzer)] font-normal
            /* Mobile (Figma Specs) */
            text-[14px] leading-[24px] tracking-[-0.005em] mb-6
            /* Desktop */
            md:text-[16px] md:leading-[24px] md:mb-8
          "
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <ServiceTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      tags: ["Clean cuts", "Captions & Subtitles", "Sound Design"],
      number: "0 1",
      title: "Short-form Editing",
      description:
        "Fast, trendy, and built for TikTok, Reels and Shorts. Quick cuts that hook and keep viewers watching.",
    },
    {
      id: 2,
      tags: ["Story Structuring", "B-Roll", "Colour Grading", "Audio Cleanup"],
      number: "0 2",
      title: "Long-form Editing",
      description:
        "Polished storytelling for Youtube and podcasts. Smooth pacing, clean transition, and engaging flow.",
    },
    {
      id: 3,
      tags: ["Animated Titles", "Logo Animations", "Product Demo"],
      number: "0 3",
      title: "Motion Graphics",
      description:
        "Add energy and style with custom animations, texts and effects. Make your content pop.",
    },
    {
      id: 4,
      tags: ["Bold Typography", "Image Cutouts", "CTR Optimization"],
      number: "0 4",
      title: "Thumbnail Design",
      description:
        "Scroll-stopping thumbnails that boost clicks and match your brand aesthetic.",
    },
  ];

  return (
    <section className="w-full py-15 bg-background">
      <Container>
        <SectionLabel
          text="Services"
          className="flex items-center justify-center"
        />
        <SectionHeading
          text="I offer the following..."
          className="md:max-w-[550px] mt-3 md:pb-5"
        />

        <div className="flex flex-col space-y-4 md:space-y-7 mt-8 md:mt-0">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              tags={service.tags}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-12 flex justify-center">
          <Button
            variant="default"
            className="!bg-white !text-black hover:!bg-neutral-200 !rounded-full px-8 py-6 md:w-[155px] md:h-[64px] md:px-12 md:py-5 text-sm md:text-base font-medium"
          >
            Hire Me
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
