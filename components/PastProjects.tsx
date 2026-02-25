"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import VideoModal from "./ui/VideoModal";

// DATA
const projects = [
  {
    id: 1,
    clientName: "BET Africa",
    description:
      "Produced and directed 40+ episodes of Bet Streetz, a vibrant lifestyle series exploring African cities.",
    media: [
      {
        id: 1,
        image: "https://img.youtube.com/vi/Dhj-E4Co6yo/maxresdefault.jpg",
        alt: "BET Streetz Ghana",
      },
      {
        id: 2,
        image: "https://img.youtube.com/vi/ntivrziRSaQ/maxresdefault.jpg",
        alt: "BET STREETS EP 3",
      },
      {
        id: 3,
        image: "https://img.youtube.com/vi/od5f8JlCcGw/maxresdefault.jpg",
        alt: "BET Promo",
      },
    ],
  },
  {
    id: 2,
    clientName: "MTV Base",
    description:
      "Directed high-energy music campaigns and lifestyle content for the youth demographic.",
    media: [
      {
        id: 1,
        image: "https://img.youtube.com/vi/-nvTOwR5w6s/maxresdefault.jpg",
        alt: "Touching Base: Nasty C",
      },
      {
        id: 2,
        image: "https://img.youtube.com/vi/2gvId6ITWEg/maxresdefault.jpg",
        alt: "Falz Listening Party",
      },
      {
        id: 3,
        image: "https://img.youtube.com/vi/_imURVADzLM/maxresdefault.jpg",
        alt: "Fuze Festival",
      },
      {
        id: 4,
        image: "https://img.youtube.com/vi/qqYQHrXm_zE/maxresdefault.jpg",
        alt: "Joeboy Listening Party",
      },
      {
        id: 5,
        image: "https://img.youtube.com/vi/p6SNNvxyO9A/maxresdefault.jpg",
        alt: "MTV Base Day",
      },
      {
        id: 6,
        image: "https://img.youtube.com/vi/DcE4N1s3c3w/maxresdefault.jpg",
        alt: "Word on the street promo MTV base",
      },
      {
        id: 7,
        image: "https://img.youtube.com/vi/Q_--2nOhZTY/maxresdefault.jpg",
        alt: "Mtv base REGAL Client preview",
      },
      {
        id: 8,
        image: "https://img.youtube.com/vi/T1yODW74kCg/maxresdefault.jpg",
        alt: "JAywise freestyle",
      },
      {
        id: 9,
        image: "https://img.youtube.com/vi/AFBeLzFN1Ns/maxresdefault.jpg",
        alt: "itel RS4 City Tour MTV",
      },
      {
        id: 10,
        image: "https://img.youtube.com/vi/TZC65EthMvc/maxresdefault.jpg",
        alt: "Do you have what it takes to drop some bars?",
      },
      {
        id: 11,
        image: "https://img.youtube.com/vi/R5YCgcwN2A8/maxresdefault.jpg",
        alt: "\"Plutorians\" take up the No. 1 Spot!",
      },
      {
        id: 12,
        image: "https://img.youtube.com/vi/XFVf3aF7PQQ/maxresdefault.jpg",
        alt: "Pheelz gets candid with Culture Member Ilo",
      },
      {
        id: 13,
        image: "https://img.youtube.com/vi/kLX9X8xSG2g/maxresdefault.jpg",
        alt: "Esta Blish! Its Director Pink in Da Building!!!",
      },
      {
        id: 14,
        image: "https://img.youtube.com/vi/xAbfBR1BP58/maxresdefault.jpg",
        alt: "Simi: Unleashing the Nigerian Music Magic!",
      },
    ],
  },
];

const PastProjects = () => {
  const [activeCategory, setActiveCategory] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Switch Category
  const handleCategoryClick = (category: (typeof projects)[0]) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setSelectedVideoId(null);
  };

  // Carousel Navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeCategory.media.length - 1 : prev - 1,
    );
    setSelectedVideoId(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === activeCategory.media.length - 1 ? 0 : prev + 1,
    );
    setSelectedVideoId(null);
  };

  const hasMultiple = activeCategory.media.length > 1;
  const currentMedia = activeCategory.media[currentIndex];

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
          <p
            key={activeCategory.id}
            className="text-[#B3B3B3] font-switzer text-sm md:text-base leading-relaxed animate-in fade-in duration-500"
          >
            {activeCategory.description}
          </p>
        </div>

        {/* Phone Showcase */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full h-[650px] md:h-[800px] bg-[#111111] rounded-[40px] md:rounded-[64px] flex items-center justify-center overflow-hidden border border-[#1a1a1a]">
            {/* Phone Wrapper */}
            <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] shrink-0 transform scale-90 md:scale-100 transition-transform">
              {/* Screen */}
              <button
                type="button"
                onClick={() => {
                  const id = currentMedia.image.match(/vi\/([^/]+)/)?.[1];
                  if (id) setSelectedVideoId(id);
                }}
                className="absolute top-[18px] left-[20px] w-[260px] h-[565px] md:top-[22px] md:left-[24px] md:w-[305px] md:h-[655px] rounded-[35px] overflow-hidden bg-black z-0 cursor-pointer group"
                aria-label={`Play ${currentMedia.alt}`}
              >
                {/* Background Image */}
                <img
                  src={
                    activeCategory.clientName === "BET Africa"
                      ? "/BET.jpg"
                      : activeCategory.clientName === "MTV Base"
                        ? "/mtvtheme.png"
                        : currentMedia.image
                  }
                  alt={currentMedia.alt}
                  className="object-cover w-full h-full absolute inset-0"
                />

                {/* --- 1. Top Progress Bars (Story Style) --- */}
                {hasMultiple && (
                  <div className="absolute top-4 left-0 w-full px-4 flex gap-1 z-20">
                    {activeCategory.media.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full flex-1 transition-colors duration-300 ${idx === currentIndex
                          ? "bg-white"
                          : "bg-white/30"
                          }`}
                      />
                    ))}
                  </div>
                )}

                {/* Play Button */}
                <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <span className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center pl-1 border border-white/20 group-hover:scale-110 transition-transform animate-pulse">
                    <Play fill="white" className="text-white w-6 h-6" />
                  </span>
                </span>

                {/* --- 2. Bottom Title Overlay --- */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20 flex flex-col items-center text-center">
                  <span
                    key={currentMedia.id} // Key change triggers animation
                    className="text-white font-[family-name:var(--font-crimson)] text-xl animate-in slide-in-from-bottom-2 fade-in duration-500"
                  >
                    {currentMedia.alt}
                  </span>
                </div>
              </button>

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

      <VideoModal
        isOpen={!!selectedVideoId}
        videoId={selectedVideoId || ""}
        onClose={() => setSelectedVideoId(null)}
      />
    </section >
  );
};

export default PastProjects;
