"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import VideoModal from "./ui/VideoModal";

const shorts = [
    { id: "jCsc_RB0hU0", title: "Short 1" },
    { id: "yU20ao4xSRs", title: "Short 2" },
    { id: "PxcIdtZtIkI", title: "Short 3" },
    { id: "NFT1DyYJP8w", title: "Short 4" },
    { id: "Obq-TXPir3I", title: "Short 5" },
    { id: "ruWceVEyntM", title: "Short 6" },
    { id: "64D2KXmkCPU", title: "Short 7" },
    { id: "9wBbD4l8Dlc", title: "Short 8" },
    { id: "R_YGBF6IQ7Y", title: "Short 9" },
    { id: "zd2wRjLqJVU", title: "Short 10" },
    { id: "a2xcoPUhW3Q", title: "Short 11" },
    { id: "f-a8tDeAZ5Y", title: "Short 12" },
];

const ShortsGallery = () => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    return (
        <section className="w-full py-20 bg-background border-t border-white/5">
            <Container>
                <SectionLabel text="Shorts" className="flex items-center justify-center" />
                <SectionHeading
                    text="Bite-sized creative moments."
                    className="md:max-w-[800px] mt-3 mb-10 text-center mx-auto"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {shorts.map((short) => (
                        <div
                            key={short.id}
                            onClick={() => setSelectedVideoId(short.id)}
                            className="group relative w-full aspect-9/16 bg-neutral-900 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all"
                        >
                            {/* Thumbnail */}
                            {/* 
                 YouTube thumbnails for vertical videos are often 16:9 with black bars (pillarbox).
                 using object-cover on a 9:16 container will zoom into the center, 
                 effectively cropping out the side black bars and showing the video content.
              */}
                            <Image
                                src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                                alt={short.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <VideoModal
                isOpen={!!selectedVideoId}
                videoId={selectedVideoId || ""}
                onClose={() => setSelectedVideoId(null)}
            />
        </section>
    );
};

export default ShortsGallery;
