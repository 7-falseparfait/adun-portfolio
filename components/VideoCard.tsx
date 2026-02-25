"use client"; // Required for hover interactions

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  tag?: string;
  imageSrc?: string;
  videoSrc?: string; // New Prop for the preview video
  imageClassName?: string;
}

const VideoCard = ({
  title,
  tag,
  imageSrc = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
  videoSrc,
  imageClassName = "",
}: VideoCardProps) => {
  // 1. Setup Refs and State to control the video
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 2. Play video on Hover
  const handleMouseEnter = () => {
    if (videoRef.current && videoSrc) {
      setIsPlaying(true);
      videoRef.current.play().catch((e) => {
        // Silent catch in case browser blocks autoplay (rare for muted vids)
        console.log("Playback interrupted", e);
      });
    }
  };

  // 3. Pause and Reset on Leave
  const handleMouseLeave = () => {
    if (videoRef.current && videoSrc) {
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // This inline style (mask-image) is the "Nuclear Fix" for the border-radius bug
      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
      className="
      group 
      flex flex-col 
      w-full 
      
      /* --- Dimensions --- */
      max-w-[400px] md:max-w-[604px]
      h-[408px] md:h-[572px]
      rounded-[24px] md:rounded-[32px]
      
      overflow-hidden 
      cursor-pointer 
      bg-[#050505] 
      
      /* --- Borders --- */
      border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-t-0
      border-white/15 
      
      /* --- Fix: Hardware Acceleration --- */
      transform-gpu
    "
    >
      {/* Media Section */}
      <div className="relative w-full h-[310px] md:h-auto md:flex-1 overflow-hidden">
        {/* VIDEO LAYER (Bottom) - Only renders if videoSrc exists */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* IMAGE LAYER (Top) - Fades out when playing */}
        <img
          src={imageSrc}
          alt={title}
          className={`
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-500 z-10
            will-change-transform
            group-hover:scale-105 /* Keep your zoom effect */
            ${isPlaying ? "opacity-0" : "opacity-100"}
            ${imageClassName}
          `}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 z-20" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full px-6 py-4 md:p-8 flex flex-col gap-1 md:gap-2 bg-[#050505] h-[98px] md:h-[106px] justify-center overflow-hidden z-20 relative">
        {tag && (
          <span className="font-switzer text-[10px] md:text-[12px] font-semibold leading-[14px] md:leading-[18px] tracking-[2px] uppercase text-[#FFFFFF]">
            {tag}
          </span>
        )}

        <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[32px] leading-tight text-white font-normal">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
