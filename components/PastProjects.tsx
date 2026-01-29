"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";

// DATA
const projects = [
  {
    id: 1,
    clientName: "BET Africa",
    description:
      "Produced and directed 40+ episodes of Bet Streetz, a vibrant lifestyle series exploring African cities.",
    media: [{ id: 1, image: "/BET.jpg", alt: "BET Africa Project 1" }],
  },
  {
    id: 2,
    clientName: "MTV Base",
    description:
      "Directed high-energy music campaigns and lifestyle content for the youth demographic.",
    media: [
      { id: 1, image: "/Avatar.jpg", alt: "MTV Base Project 1" },
      { id: 2, image: "/Avatar.jpg", alt: "MTV Base Project 2" },
    ],
  },
];

const PastProjects = () => {
  const [activeCategory, setActiveCategory] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Switch Category
  const handleCategoryClick = (category: (typeof projects)[0]) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  // Carousel Navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeCategory.media.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === activeCategory.media.length - 1 ? 0 : prev + 1,
    );
  };

  const hasMultiple = activeCategory.media.length > 1;

  return (
    <section id="showreel" className="w-full py-20 bg-background">
      <Container>
        {/* Header */}
        <SectionLabel
          className="flex items-center justify-center"
          text="Showreel"
        />
        <SectionHeading
          text="A selection of my best work across different brands and campaigns."
          className="md:max-w-[1100px] mt-3 mb-10"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {projects.map((item) => {
            const isActive = activeCategory.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleCategoryClick(item)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  border cursor-pointer
                  ${isActive
                    ? "bg-white text-black border-transparent"
                    : "bg-[#111111] text-[#B3B3B3] border-[#333] hover:border-white/40"
                  }
                `}
              >
                {item.clientName}
              </button>
            );
          })}
        </div>

        {/* Dynamic Description Text */}
        <div className="text-center max-w-2xl mx-auto mb-12 min-h-[60px]">
          <p className="text-[#B3B3B3] font-switzer text-sm md:text-base leading-relaxed animate-in fade-in duration-500 key={activeCategory.id}">
            {activeCategory.description}
          </p>
        </div>

        {/* Phone Showcase */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full h-[650px] md:h-[800px] bg-[#111111] rounded-[40px] md:rounded-[64px] flex items-center justify-center overflow-hidden border border-[#1a1a1a]">
            {/* Phone Wrapper */}
            <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] shrink-0 transform scale-90 md:scale-100 transition-transform">
              {/* Screen */}
              <div className="absolute top-[18px] left-[20px] w-[260px] h-[565px] md:top-[22px] md:left-[24px] md:w-[305px] md:h-[655px] rounded-[35px] overflow-hidden bg-black z-0">
                <Image
                  src={activeCategory.media[currentIndex].image}
                  fill
                  alt={activeCategory.media[currentIndex].alt}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center pl-1 border border-white/20">
                    <Play fill="white" className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Chassis */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image
                  src="/iphone-chasis.png"
                  fill
                  alt="Phone Frame"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Arrows */}
            {hasMultiple && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer z-20"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer z-20"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <div className="absolute bottom-8 text-[#666] font-switzer text-xs tracking-widest">
                  {currentIndex + 1} / {activeCategory.media.length}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PastProjects;
