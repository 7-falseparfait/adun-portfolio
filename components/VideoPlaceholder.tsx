"use client";
import { Play } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import VideoModal from "./ui/VideoModal";

const VideoPlaceholder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "O9wzdXYtARo";

  return (
    <>
      <section className="w-full pt-10 pb-20 bg-background">
        <div
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden group cursor-pointer border border-white/10"
        >
          {/* Background Thumbnail */}
          <div className="absolute inset-0 bg-neutral-900">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Showreel Thumbnail"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">

            {/* Play Button / Jumping Logo */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce group-hover:border-white/50 group-hover:bg-white/20">
                {/* Default Play Icon */}
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 group-hover:hidden transition-all" />

                {/* Hover Logo */}
                <div className="hidden group-hover:block relative w-10 h-10 md:w-12 md:h-12 animate-in fade-in zoom-in duration-300">
                  <Image
                    src="/Avatar.jpg"
                    alt="Logo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Quality Hint */}
            <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
              <p className="text-white/80 font-switzer text-xs md:text-sm tracking-[0.2em] font-light uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                Set quality to 4K for best experience
              </p>
            </div>

          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default VideoPlaceholder;
