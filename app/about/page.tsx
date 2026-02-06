import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import Gallery from "@/components/Gallery";
import Container from "@/components/Container";
import PhotoCarousel from "@/components/PhotoCarousel";

const workHistory = [
  {
    id: 1,
    logo: "/worklogo.png",
    role: "VIDEO EDITOR & CREATIVE PRODUCER",
    company: "DAT Creative International",
    period: "2022 - 2025",
    description:
      "Edited a wide range of television and digital content for platforms including MTV Base West Africa, BET Africa, and major FMCG brands. Collaborated closely with directors and creative teams to shape compelling visual narratives, refine pacing, enhance performances, and deliver polished edits aligned with each project’s creative goals.\n\nIn addition to editing, supported concept development, content strategy, and overall production execution, ensuring a smooth workflow from pre-production to final delivery.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-24 pb-24">
      <Container>
        <PhotoCarousel />

        <div className="mb-20">
          <h1 className="font-[family-name:var(--font-crimson)] font-normal text-[32px] md:text-[64px] md:leading-[88px] leading-[48px] tracking-[-0.015em] text-left text-foreground mb-6">
            About Me
          </h1>
          <div className="font-[family-name:var(--font-switzer)] font-normal text-xl md:leading-14 leading-10 tracking-[-0.015em] text-[#B3B3B3] mb-8 max-w-full">
            I’m a versatile Video Editor dedicated to crafting clear, engaging,
            and visually compelling stories. With over three years of
            experience, I’ve edited content for broadcast, digital, and branded
            platforms—shaping lifestyle, cultural, documentary, and
            entertainment projects that connect with audiences.
            <p className="mt-6">
              My strength lies in story-first editing: refining narrative flow,
              enhancing pacing, elevating performances, and bringing visuals,
              sound, and rhythm together to create edits that feel seamless and
              intentional. With a solid background in production, I understand
              the full journey from concept to final delivery, allowing me to
              collaborate smoothly with directors, producers, and creative
              teams.
            </p>{" "}
            <p className="mt-6">
              Whether it’s a fast-turn social campaign or a full-scale series,
              my goal is simple: deliver polished visuals, smooth storytelling,
              and edits that leave a lasting impact.
            </p>{" "}
            <p className="mt-6">
              Currently, I work as a freelance Video Editor, taking on diverse
              projects across digital, commercial, and branded
              content—continuing to shape stories with clarity, creativity, and
              strong visual direction.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-full md:w-auto">
              <SocialLinks />
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>

        <section>
          <h2 className="font-[family-name:var(--font-crimson)] font-normal md:text-[64px] text-[32px]  leading-[88px] tracking-[-0.015em] text-left text-foreground mb-5 md:mb-12">
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
                  <p className="font-[family-name:var(--font-switzer)] font-normal text-xl leading-relaxed tracking-[-0.015em] text-[#B3B3B3] whitespace-pre-line">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <Gallery /> */}
      </Container>
    </main>
  );
}
