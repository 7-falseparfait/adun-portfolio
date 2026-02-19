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
    { src: "/carousel-photo3.webp", alt: "Photo 3" },
    { src: "/carousel-photo4.webp", alt: "Photo 4" },
    { src: "/carousel-photo5.webp", alt: "Photo 5" },
    { src: "/carousel-photo6.webp", alt: "Photo 6" },
    { src: "/carousel-photo7.webp", alt: "Photo 7" },
];

export default function PhotoCarousel() {
    // Duplicate images to create a seamless loop for the marquee
    const allImages = [...carouselImages, ...carouselImages];
    // Total items: 12 * 2 = 24

    return (
        <div className="relative w-full overflow-hidden border border-white/10 mb-16">
            {/* 
                Width Calculation:
                Mobile (2 items visible): Total Items * 50% = 12 * 50% = 600% for one set. 
                Wait, previous logic:
                Atomic Item Width = 100% / Total Items (container relative)
                Screen Width = 100% (viewport)
                
                Goal: Show 2 items on mobile (50vw each)
                Goal: Show 4 items on desktop (25vw each)

                Container Width (Mobile) = Total Items * 50vw
                Container Width (Desktop) = Total Items * 25vw

                Total Items in 'allImages' = 24.
                
                Mobile Container Width: 24 * 50% = 1200%
                Desktop Container Width: 24 * 25% = 600%
            */}
            <div className="flex animate-scroll w-[1200%] md:w-[600%]">
                {allImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        // Width for 24 items: 100% / 24
                        className="relative flex-none w-[calc(100%/24)] aspect-[300/464] overflow-hidden"
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
