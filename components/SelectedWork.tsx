"use client"; // Required for state
import { useState } from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import SectionHeading from "./ui/SectionHeading";
import SectionLabel from "./ui/SectionLabel";
import WorkFilters from "./ui/WorkFilters";
import VideoCard from "./VideoCard";
import VideoModal from "./ui/VideoModal";

const SelectedWork = () => {
  // State to track which YouTube video is currently open
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Test Project: Nature",
      tag: "Cinematography",
      // A safe 4K nature video on YouTube
      youtubeId: "LXb3EKWsInQ",
      previewSrc: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
      imageSrc:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "zzz",
      tag: "Event & Lifestyle",
      youtubeId: "LXb3EKWsInQ",
      previewSrc: "https://res.cloudinary.com/demo/video/upload/v1/dog.mp4",
      imageSrc:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Tech Review: lorem",
      tag: "Talking Head",
      youtubeId: "dQw4w9WgXcQ",
      previewSrc: "https://res.cloudinary.com/demo/video/upload/v1/dog.mp4",
      imageSrc:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Lalalala",
      tag: "Social Media Edit",
      youtubeId: "LXb3EKWsInQ",
      previewSrc: "https://res.cloudinary.com/demo/video/upload/v1/dog.mp4",
      imageSrc:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-15 bg-background">
      <Container>
        <SectionLabel className="flex items-center justify-center" />
        <SectionHeading className="md:max-w-[450px] mt-3" />
        <WorkFilters />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-22 gap-y-10 md:mt-6">
          {projects.map((project) => (
            // The Wrapper Div handles the click to open the Modal
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
                videoSrc={project.previewSrc}
              />
            </div>
          ))}
        </div>

        <div className="w-full mt-16 flex justify-center">
          <Button className="w-full md:w-auto md:px-12 md:py-[30px] rounded-4xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-7 px-9 md:text-base font-medium">
            View all work
          </Button>
        </div>
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
