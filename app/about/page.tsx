import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import Gallery from "@/components/Gallery";

const workHistory = [
  {
    id: 1,
    logo: "/work-logo.png",
    role: "Senior Video Editor",
    company: "CutLab",
    period: "2024 - PRESENT",
    description:
      "Previously, I worked as a senior video editor at VisionCraft Media, where I led post-production for campaigns viewed by millions. On the side, I'm building CutLab, a tool that helps editors and creative teams streamline their editing workflow and collaborate with more clarity.",
  },
  {
    id: 2,
    logo: "/work-logo.png",
    role: "Senior Video Editor",
    company: "CutLab",
    period: "2024 - PRESENT",
    description:
      "Previously, I worked as a senior video editor at VisionCraft Media, where I led post-production for campaigns viewed by millions. On the side, I'm building CutLab, a tool that helps editors and creative teams streamline their editing workflow and collaborate with more clarity.",
  },
  {
    id: 3,
    logo: "/work-logo.png",
    role: "Senior Video Editor",
    company: "CutLab",
    period: "2024 - PRESENT",
    description:
      "Previously, I worked as a senior video editor at VisionCraft Media, where I led post-production for campaigns viewed by millions. On the side, I'm building CutLab, a tool that helps editors and creative teams streamline their editing workflow and collaborate with more clarity.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-24 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-26">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 mb-16 overflow-hidden">
          <Image
            width={300}
            height={464}
            src="/1.jpg"
            alt="image-1"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/2.jpg"
            alt="image-2"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/3.jpg"
            alt="image-3"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/4.jpg"
            alt="image-4"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mb-20">
          <h1 className="font-[family-name:var(--font-crimson)] font-normal text-[64px] leading-[88px] tracking-[-0.015em] text-left text-foreground mb-6">
            About Me
          </h1>
          <p className="font-[family-name:var(--font-switzer)] font-normal text-xl leading-10 tracking-[-0.015em] text-[#B3B3B3] mb-8 max-w-full">
            Currently, I work as a video editor at FrameForge Studios, where I
            help brands, creators, and startups craft stories that feel sharp,
            intentional, and unforgettable. Previously, I worked as a senior
            video editor at VisionCraft Media, where I led post-production for
            campaigns viewed by millions. On the side, I'm building CutLab, a
            tool that helps editors and creative teams streamline their editing
            workflow and collaborate with more clarity. Before CutLab, I
            cofounded ReelSync, a lightweight web app that lets creators
            organize their footage, share selects, and get timestamped feedback
            without friction. Before ReelSync, I spent 2 years leading the
            editorial team at Studio Nine, shaping how production houses
            approach narrative, color, pacing, and sound design across long-form
            and short-form content. In 2024, I worked on the early edit
            direction for FocusFlow (Alpha) at Collective Studios in London,
            helping define the video aesthetic and story arc for the product's
            launch. FocusFlow was later re-edited to create a more distilled,
            cinematic experience that helped users feel immersed and motivated.
            As a storyteller with a deep love for pacing, emotion, and rhythm, I
            enjoy bringing ideas to life with other creative people. And when
            I'm not editing, refining cuts, building tools, or directing
            post-production workflows, you'll probably find me watching YouTube
            videos about filmmaking, design, color theory, and creative
            excellence.
          </p>
          <div className="flex justify-between">
            <SocialLinks />
            <div></div>
          </div>
        </div>

        <section>
          <h2 className="font-[family-name:var(--font-crimson)] font-normal text-[64px] leading-[88px] tracking-[-0.015em] text-left text-foreground mb-12">
            Work History
          </h2>

          <div className="flex flex-col">
            {workHistory.map((job) => (
              <div
                key={job.id}
                className="py-12 border-b border-white/10 last:border-b-0"
              >
                <div className="w-16 h-16 mb-6">
                  <Image
                    src={job.logo}
                    width={64}
                    height={64}
                    alt={`${job.company} logo`}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                <div className="mb-6">
                  <p className="font-[family-name:var(--font-crimson)] font-normal text-2xl text-foreground mb-2">
                    {job.role}, {job.company}
                  </p>
                  <p className="font-[family-name:var(--font-switzer)] tracking-widest text-base font-medium text-[#8C8C8C] uppercase">
                    {job.period}
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-switzer)] font-normal text-xl leading-relaxed tracking-[-0.015em] text-[#B3B3B3]">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Gallery />
      </div>
    </main>
  );
}
