"use client";

import React from "react";
import Image from "next/image";

const carouselImages = [
    { src: "/adun-1.png", alt: "Adun 1" },
    { src: "/adun-2.jpeg", alt: "Adun 2" },
    { src: "/adun-3.png", alt: "Adun 3" },
    { src: "/adun-4.png", alt: "Adun 4" },
    { src: "/adun-5.png", alt: "Adun 5" },
    { src: "/carousel-photo1.webp", alt: "Photo 1" },
    { src: "/carousel-photo2.webp", alt: "Photo 2" },
    { src: "/carousel-photo5.webp", alt: "Photo 5" },
    { src: "/carousel-photo6.webp", alt: "Photo 6" },
    { src: "/carousel-photo7.webp", alt: "Photo 7" },
];

export default function PhotoCarousel() {
    // Duplicate images to create a seamless loop for the marquee
    const allImages = [...carouselImages, ...carouselImages];
    // Total items: 10 * 2 = 20

    return (
        <div className="relative w-full overflow-hidden border border-white/10 mb-16">
            {/* 
                Width Calculation:
                Mobile (2 items visible): Total Items * 50% = 10 * 50% = 500% for one set. 
                Wait, previous logic:
                Atomic Item Width = 100% / Total Items (container relative)
                Screen Width = 100% (viewport)
                
                Goal: Show 2 items on mobile (50vw each)
                Goal: Show 4 items on desktop (25vw each)

                Container Width (Mobile) = Total Items * 50vw
                Container Width (Desktop) = Total Items * 25vw

                Total Items in 'allImages' = 20.
                
                Mobile Container Width: 20 * 50% = 1000%
                Desktop Container Width: 20 * 25% = 500%
            */}
            <div className="flex animate-scroll hover:paused w-[1000%] md:w-[500%]">
                {allImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        // Width for 20 items: 100% / 20
                        className="relative flex-none w-[calc(100%/20)] aspect-[300/464] overflow-hidden"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index < 4}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
