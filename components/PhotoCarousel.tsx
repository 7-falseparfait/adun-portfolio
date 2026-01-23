"use client";

import React from "react";
import Image from "next/image";

const carouselImages = [
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

    return (
        <div className="relative w-full overflow-hidden border border-white/10 mb-16">
            <div className="flex animate-scroll w-[700%] md:w-[350%]">
                {allImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className="relative flex-none w-[calc(100%/14)] aspect-[300/464] overflow-hidden"
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
