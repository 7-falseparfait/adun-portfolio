"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react"; // Added Play icon if needed for video overlay
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";

const clients = [
  {
    id: 1,
    name: "Brand Campaign",
    projects: [
      { id: 1, image: "/Avatar.jpg", alt: "Brand Project 1" },
      { id: 2, image: "/Avatar.jpg", alt: "Brand Project 2" },
      { id: 3, image: "/Avatar.jpg", alt: "Brand Project 3" },
    ],
  },
  {
    id: 2,
    name: "BET Africa",
    projects: [{ id: 1, image: "/BET.jpg", alt: "BET Africa Project 1" }],
    projects: [{ id: 1, image: "https://img.youtube.com/vi/Dhj-E4Co6yo/maxresdefault.jpg", alt: "BET Streetz Ghana" }],
  },
  {
    id: 3,
    name: "MTV Base",
    projects: [
      { id: 1, image: "/Avatar.jpg", alt: "MTV Base Project 1" },
      { id: 2, image: "/Avatar.jpg", alt: "MTV Base Project 2" },
      { id: 1, image: "https://img.youtube.com/vi/-nvTOwR5w6s/maxresdefault.jpg", alt: "Touching Base: Nasty C" },
      { id: 2, image: "https://img.youtube.com/vi/2gvId6ITWEg/maxresdefault.jpg", alt: "Falz Listening Party" },
      { id: 3, image: "https://img.youtube.com/vi/_imURVADzLM/maxresdefault.jpg", alt: "Fuze Festival" },
      { id: 4, image: "https://img.youtube.com/vi/qqYQHrXm_zE/maxresdefault.jpg", alt: "Joeboy Listening Party" },
    ],
  },
];

const ClientShowcase = () => {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleClientClick = (client: (typeof clients)[0]) => {
    setSelectedClient(client);
    setCurrentProjectIndex(0); // Reset project carousel when switching brands
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? selectedClient.projects.length - 1 : prev - 1,
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === selectedClient.projects.length - 1 ? 0 : prev + 1,
    );
  };

  const hasMultipleProjects = selectedClient.projects.length > 1;

  return (
    <section className="w-full py-20 bg-background">
      <Container>
        {/* Header */}
        <SectionLabel
          className="flex items-center justify-center"
          text="showreel"
        />
        <SectionHeading
          text="Over the years, I have worked on diverse projects for different brands"
          className="md:max-w-[1100px] mt-3 mb-12"
        />

        {/* --- 1. Top Filter Buttons (Tabs) --- */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 md:mb-16">
          {clients.map((client) => {
            const isActive = selectedClient.id === client.id;
            return (
              <button
                key={client.id}
                onClick={() => handleClientClick(client)}
                className={`
                  px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  border border-transparent
                  ${isActive
                    ? "bg-white text-black" // Active Style (White Pill)
                    : "bg-[#111111] text-[#B3B3B3] border-[#333] hover:border-white/40" // Inactive Style
                  }
                `}
              >
                {client.name}
              </button>
            );
          })}
        </div>

        {/* --- 2. Main Phone Showcase Area --- */}
        <div className="relative w-full flex items-center justify-center">
          {/* Container Box (Dark Grey Background) */}
          <div
            className="
            relative 
            w-full max-w-[1000px] 
            h-[650px] md:h-[800px] 
            bg-[#111111] 
            rounded-[40px] md:rounded-[64px] 
            flex items-center justify-center
            overflow-hidden
          "
          >
            {/* Phone Mockup Wrapper */}
            <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] shrink-0 transform scale-90 md:scale-100 transition-transform">
              {/* Screen Content */}
              <div className="absolute top-[18px] left-[20px] w-[260px] h-[565px] md:top-[22px] md:left-[24px] md:w-[305px] md:h-[655px] rounded-[35px] overflow-hidden bg-black z-0">
                <Image
                <img
                  src={selectedClient.projects[currentProjectIndex].image}
                  fill
                  alt={selectedClient.projects[currentProjectIndex].alt}
                  className="object-cover"
                  className="object-cover w-full h-full absolute inset-0"
                />

                {/* Optional: Play Button Overlay (Purely visual per your ref image) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center pl-1">
                    <Play fill="white" className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* iPhone Frame */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image
                  src="/iphone-chasis.png"
                  fill
                  alt="iPhone frame"
                  className="object-contain"
                />
              </div>
            </div>

            {/* --- Navigation Arrows (Outside the phone, inside the container) --- */}
            {hasMultipleProjects && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={handlePrevProject}
                  className="
                    absolute left-4 md:left-12 top-1/2 -translate-y-1/2 
                    w-12 h-12 
                    rounded-full bg-[#1A1A1A] border border-[#333] 
                    flex items-center justify-center 
                    text-white hover:bg-white hover:text-black 
                    transition-all duration-300 z-20
                  "
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextProject}
                  className="
                    absolute right-4 md:right-12 top-1/2 -translate-y-1/2 
                    w-12 h-12 
                    rounded-full bg-[#1A1A1A] border border-[#333] 
                    flex items-center justify-center 
                    text-white hover:bg-white hover:text-black 
                    transition-all duration-300 z-20
                  "
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Counter Indicator */}
                <div className="absolute bottom-8 text-[#666] font-switzer text-sm tracking-widest">
                  {currentProjectIndex + 1} / {selectedClient.projects.length}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientShowcase;
