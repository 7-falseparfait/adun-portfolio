"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Container from "./Container";
import VideoModal from "./ui/VideoModal";

const funShorts = [
  { id: "Obq-TXPir3I", title: "Fun Short 1" },
  { id: "PxcIdtZtIkI", title: "Fun Short 2" },
  { id: "yU20ao4xSRs", title: "Fun Short 3" },
  { id: "tYhs9WwvSTg", title: "Fun Short 4" },
  { id: "NFT1DyYJP8w", title: "Fun Short 5" },
];

const Gallery = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <section className="mt-6 mb-20">
      <h2 className="font-[family-name:var(--font-crimson)] font-normal text-[32px] md:text-[64px] md:leading-[88px] leading-[38px] tracking-[-0.015em] text-center text-foreground mb-5 md:mb-12">
        Fun Projects
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px md:gap-0.5 max-w-6xl mx-auto px-4 md:px-8">
        {funShorts.map((short) => (
          <div
            key={short.id}
            onClick={() => setSelectedVideoId(short.id)}
            className="group relative w-full aspect-9/16 bg-neutral-900 overflow-hidden cursor-pointer hover:opacity-90 transition-all"
          >
            <Image
              src={`https://img.youtube.com/vi/${short.id}/hqdefault.jpg`}
              alt={short.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <VideoModal
        isOpen={!!selectedVideoId}
        videoId={selectedVideoId || ""}
        onClose={() => setSelectedVideoId(null)}
      />
    </section>
  );
};

export default Gallery;
