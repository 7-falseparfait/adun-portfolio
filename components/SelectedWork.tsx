"use client"; // Required for state
import { useState, useMemo } from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import SectionHeading from "./ui/SectionHeading";
import SectionLabel from "./ui/SectionLabel";
import WorkFilters from "./ui/WorkFilters";
import VideoCard from "./VideoCard";
import VideoModal from "./ui/VideoModal";
import Link from "next/link";

interface SelectedWorkProps {
  showFilters?: boolean;
}

const SelectedWork = ({ showFilters = false }: SelectedWorkProps) => {
  // State to track which video is currently open (stores the full project object)
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Falz Listening Party",
        tag: "Event & Lifestyle",
        youtubeId: "2gvId6ITWEg",
        imageSrc: "https://img.youtube.com/vi/2gvId6ITWEg/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 2,
        title: "Fido Listening Party",
        tag: "Event & Lifestyle",
        youtubeId: "O-mgaVsCj8Q",
        imageSrc: "https://img.youtube.com/vi/O-mgaVsCj8Q/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 3,
        title: "Fuze Festival",
        tag: "Event & Lifestyle",
        youtubeId: "_imURVADzLM",
        imageSrc: "https://img.youtube.com/vi/_imURVADzLM/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- Mixed ONTT Project ---
      // --- Swapped Joeboy to 4th pos ---
      {
        id: 6,
        title: "Joeboy Listening Party",
        tag: "Event & Lifestyle",
        youtubeId: "qqYQHrXm_zE",
        imageSrc: "https://img.youtube.com/vi/qqYQHrXm_zE/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 4,
        title: "Get to Know Marz",
        tag: "Narrative & Creative",
        youtubeId: "Jmm8uLhxpPI",
        imageSrc: "https://img.youtube.com/vi/Jmm8uLhxpPI/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- TNTS Project ---
      {
        id: 201,
        title: "Thrive Not Survive: Dr Nduka",
        tag: "Thrive Not Survive",
        youtubeId: "aFDiwhBwmHM",
        imageSrc: "/dr.ndukka.jpeg",
        videoUrl: ""
      },
      {
        id: 5,
        title: "Get to Know Zhus",
        tag: "Narrative & Creative",
        youtubeId: "dK3zizZbIeE",
        imageSrc: "https://img.youtube.com/vi/dK3zizZbIeE/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- Swapped ONTT down ---
      {
        id: 101,
        title: "ONTT: Shoday",
        tag: "ONTT",
        videoUrl: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494186/ontt_shoday_wd9uj0.mp4",
        imageSrc: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494186/ontt_shoday_wd9uj0.jpg",
        youtubeId: ""
      },
      // --- Mixed ONTT Project ---
      {
        id: 102,
        title: "ONTT: Djames",
        tag: "ONTT",
        videoUrl: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494088/ontt_djames_s6e25e.mp4",
        imageSrc: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494088/ontt_djames_s6e25e.jpg",
        youtubeId: ""
      },
      {
        id: 7,
        title: "Kara Fest",
        tag: "Event & Lifestyle",
        youtubeId: "8_xqRnE7Ot0",
        imageSrc: "https://img.youtube.com/vi/8_xqRnE7Ot0/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- TNTS Project ---
      {
        id: 202,
        title: "Thrive Not Survive: Adora",
        tag: "Thrive Not Survive",
        youtubeId: "6u2eDcE9k7k",
        imageSrc: "/adora.jpg",
        videoUrl: ""
      },
      {
        id: 8,
        title: "MTV Base Day",
        tag: "Brand & Business",
        youtubeId: "p6SNNvxyO9A",
        imageSrc: "https://img.youtube.com/vi/p6SNNvxyO9A/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 9,
        title: "BET Streetz Ghana",
        tag: "Narrative & Creative",
        youtubeId: "Dhj-E4Co6yo",
        imageSrc: "https://img.youtube.com/vi/Dhj-E4Co6yo/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- Mixed ONTT Project ---
      {
        id: 103,
        title: "ONTT: Falz",
        tag: "ONTT",
        videoUrl: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494084/ontt_falz_gz4glb.mp4",
        imageSrc: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771494084/ontt_falz_gz4glb.jpg",
        youtubeId: ""
      },
      {
        id: 10,
        title: "Real Show Boy vs Tear Boxer",
        tag: "Narrative & Creative",
        youtubeId: "vVlEiRs_e0E",
        imageSrc: "https://img.youtube.com/vi/vVlEiRs_e0E/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 11,
        title: "Rexxie Listening Party",
        tag: "Event & Lifestyle",
        youtubeId: "6rUWHv5SOnM",
        imageSrc: "https://img.youtube.com/vi/6rUWHv5SOnM/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 12,
        title: "Radiat vs Cynthia",
        tag: "Narrative & Creative",
        youtubeId: "gvKw2sI5L7E",
        imageSrc: "https://img.youtube.com/vi/gvKw2sI5L7E/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- OFI Project ---
      {
        id: 301,
        title: "OFI: Make Your Vision Real",
        tag: "Brand & Business",
        youtubeId: "PUu5D0Z_cqw",
        imageSrc: "https://img.youtube.com/vi/PUu5D0Z_cqw/maxresdefault.jpg",
        videoUrl: ""
      },
      // --- Mixed ONTT Project ---
      {
        id: 104,
        title: "ONTT: Ayo Maff",
        tag: "ONTT",
        videoUrl: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771493648/ontt_ayo_maff_meqhny.mp4",
        imageSrc: "https://res.cloudinary.com/dzzwxwttf/video/upload/v1771493648/ontt_ayo_maff_meqhny.jpg",
        youtubeId: ""
      },
      {
        id: 13,
        title: "Sisqo Live in Lagos",
        tag: "Brand & Business",
        youtubeId: "tyh07ygYnIs",
        imageSrc: "https://img.youtube.com/vi/tyh07ygYnIs/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 14,
        title: "Spyro Listening Party",
        tag: "Event & Lifestyle",
        youtubeId: "EvCt4WrW-0c",
        imageSrc: "https://img.youtube.com/vi/EvCt4WrW-0c/maxresdefault.jpg",
        videoUrl: ""
      },
      {
        id: 15,
        title: "Touching Base: Nasty C",
        tag: "Brand & Business",
        youtubeId: "-nvTOwR5w6s",
        imageSrc: "https://img.youtube.com/vi/-nvTOwR5w6s/maxresdefault.jpg",
        videoUrl: ""
      },
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (!showFilters) {
      return projects.slice(0, 4);
    }
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.tag === activeCategory);
  }, [showFilters, activeCategory, projects]);

  return (
    <section id="work" className="w-full py-15 bg-background">
      <Container>
        {showFilters && (
          <WorkFilters
            activeTag={activeCategory}
            onChange={setActiveCategory}
          />
        )}

        {!showFilters && (
          <>
            <SectionLabel className="flex items-center justify-center" />
            <SectionHeading className="md:max-w-[450px] mt-3" />
          </>
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 md:mt-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer" // Ensures the hand icon appears
            >
              <VideoCard
                title={project.title}
                tag={project.tag}
                imageSrc={project.imageSrc}
              // Pass the preview source to VideoCard for the hover effect
              />
            </div>
          ))}
        </div>

        {!showFilters && (
          <div className="w-full mt-16 flex justify-center">
            <Link href="/work">
              <Button className="w-full md:w-auto md:px-12 md:py-[30px] rounded-4xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-7 px-9 md:text-base font-medium">
                View all work
              </Button>
            </Link>
          </div>
        )}
      </Container>

      {/* The Modal Component sits outside the loop */}
      <VideoModal
        isOpen={!!activeProject} // Open if a project is selected
        videoId={activeProject?.youtubeId}
        videoUrl={activeProject?.videoUrl}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default SelectedWork;
