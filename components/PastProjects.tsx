"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Netflix",
    logo: "/logo.svg",
    description:
      "For BET Africa, I produced and directed 40+ episodes of Bet Streetz, a vibrant lifestyle series exploring African cities through tourism, culture, and adventurous experiences. I also produced and directed Bet A-List, a glamorous celebrity lifestyle show that highlights elite events and star-studded award shows.",
    projects: [
      { id: 1, image: "/netflix-img.png", alt: "Netflix Project 1" },
      { id: 2, image: "/netflix-2.avif", alt: "Netflix Project 2" },
      { id: 3, image: "/netflix-3.avif", alt: "Netflix Project 3" },
    ],
  },
  {
    id: 2,
    name: "BET Africa",
    logo: "/logo.svg",
    description: "Shot and edited content across several campaigns",
    projects: [{ id: 1, image: "/BET.jpg", alt: "BET Africa Project 1" }],
  },
  {
    id: 3,
    name: "MTV Base",
    logo: "/logo.svg",
    description: "Shot and edited content across several campaigns",
    projects: [
      { id: 1, image: "/netflix-1.jpg", alt: "MTV Base Project 1" },
      { id: 2, image: "/netflix-2.jpg", alt: "MTV Base Project 2" },
    ],
  },
];

const ClientShowcase = () => {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleClientClick = (client: (typeof clients)[0]) => {
    setSelectedClient(client);
    setCurrentProjectIndex(0);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? selectedClient.projects.length - 1 : prev - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === selectedClient.projects.length - 1 ? 0 : prev + 1
    );
  };

  const hasMultipleProjects = selectedClient.projects.length > 1;

  return (
    <section className="w-full py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-26">
        <h2 className="text-foreground text-[56px] leading-[72px] mb-6 tracking-[-0.015em] font-[family-name:var(--font-crimson)] font-normal text-center">
          Past Projects
        </h2>
        <p className="text-center text-[#B3B3B3] text-base">
          Over the years, i have worked on diverse projects for different brands
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-10">
          <div className="flex flex-col gap-8 place-content-center">
            {clients.map((client) => (
              <div
                key={client.id}
                onClick={() => handleClientClick(client)}
                className={`flex gap-6 p-6 cursor-pointer transition-all border-b border-[#111111] duration-300 group ${
                  selectedClient.id === client.id
                    ? "bg-neutral-900/50 border-white/20"
                    : "bg-transparent border-white/5 hover:border-white/10 hover:bg-neutral-900/30"
                }`}
              >
                <div
                  className={`h-[100px] w-[100px] rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                    selectedClient.id === client.id
                      ? "bg-black"
                      : "bg-[#111111] group-hover:bg-black"
                  }`}
                >
                  <Image
                    src={client.logo}
                    width={80}
                    height={80}
                    alt={`${client.name} logo`}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-foreground text-2xl font-[family-name:var(--font-crimson)] font-normal mb-3">
                    {client.name}
                  </h3>
                  <p className="text-[#B3B3B3] text-base font-[family-name:var(--font-switzer)] leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-[604px] h-[850px] rounded-[64px] bg-neutral-900/50">
            <div className="relative w-[400px] h-[820px]">
              <div className="absolute top-[50px] left-[26px] w-[348px] h-[720px] rounded-[40px] overflow-hidden bg-black z-0">
                <Image
                  src={selectedClient.projects[currentProjectIndex].image}
                  fill
                  alt={selectedClient.projects[currentProjectIndex].alt}
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image
                  src="/iphone-chasis.png"
                  fill
                  alt="iPhone frame"
                  className="object-contain"
                />
              </div>
              {hasMultipleProjects && (
                <>
                  <button
                    onClick={handlePrevProject}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={handleNextProject}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 group"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </>
              )}

              {hasMultipleProjects && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-sm font-[family-name:var(--font-switzer)]">
                  {currentProjectIndex + 1} / {selectedClient.projects.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
