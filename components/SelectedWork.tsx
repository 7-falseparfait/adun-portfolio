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
  // State to track which YouTube video is currently open
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects = [
    {
      id: 1,
      title: "Joeboy Listening Party",
      tag: "Event & Lifestyle",
      youtubeId: "qqYQHrXm_zE",
      imageSrc: "https://img.youtube.com/vi/qqYQHrXm_zE/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "MTV Base Day",
      tag: "Brand & Business",
      youtubeId: "p6SNNvxyO9A",
      imageSrc: "https://img.youtube.com/vi/p6SNNvxyO9A/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Kara Fest",
      tag: "Event & Lifestyle",
      youtubeId: "8_xqRnE7Ot0",
      imageSrc: "https://img.youtube.com/vi/8_xqRnE7Ot0/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "BET Streetz Ghana",
      tag: "Narrative & Creative",
      youtubeId: "Dhj-E4Co6yo",
      imageSrc: "https://img.youtube.com/vi/Dhj-E4Co6yo/maxresdefault.jpg",
    },
  ];

  const filteredProjects = useMemo(() => {
    if (!showFilters || activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.tag === activeCategory);
  }, [showFilters, activeCategory, projects]);

  return (
    <section id="work" className="w-full py-15 bg-background">
      <Container>
        <SectionLabel className="flex items-center justify-center" />
        <SectionHeading className="md:max-w-[450px] mt-3" />

        {showFilters && (
          <WorkFilters
            activeTag={activeCategory}
            onChange={setActiveCategory}
          />
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-22 gap-y-10 md:mt-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedVideoId(project.youtubeId)}
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
        isOpen={!!selectedVideoId} // Open if ID exists
        videoId={selectedVideoId || ""}
        onClose={() => setSelectedVideoId(null)}
      />
    </section>
  );
};

export default SelectedWork;
