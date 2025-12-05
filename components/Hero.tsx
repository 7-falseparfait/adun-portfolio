import Image from "next/image";
import SocialLinks from "./SocialLinks";
import VideoPlaceholder from "./VideoPlaceholder";

const Hero = () => {
  return (
    <section className="w-full pt-20 pb-20 bg-background">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-26 flex justify-center">
        <div className="absolute left-0 top-0 h-full w-[300px] md:w-[500px] z-0">
          <Image
            width={500}
            height={800}
            src="/bg-image.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="relative z-10 max-w-4xl font-[family-name:var(--font-crimson)] font-normal text-[64px] leading-[80px] tracking-[-0.015em] text-center text-foreground">
          Hello, I am Muyiwa Aina, a Video Editor and Content Creator with over
          5 years of experience.
        </h1>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <p className=" text-[#B3B3B3] place-self-center mt-4 text-base font-[family-name:var(--font-switzer)]">
          Previously, I led video editing at AGR...a PR agency.
        </p>
      </div>
      <SocialLinks />
      <VideoPlaceholder />
    </section>
  );
};

export default Hero;
