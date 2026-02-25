import Image from "next/image";
import SocialLinks from "./SocialLinks";
import VideoPlaceholder from "./VideoPlaceholder";
import Container from "./Container";

const Hero = () => {
  return (
    <section className="w-full pt-20 pb-20 bg-background">
      <Container>
        <div className="relative flex justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-0 h-[240px] md:h-[300px] w-[300px] md:w-[500px] z-0 overflow-hidden">
            <Image
              width={500}
              height={800}
              src="/bg-image.png"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>

          <h1 className="relative z-10 w-full max-w-[958px] font-[family-name:var(--font-crimson)] font-normal text-[32px] leading-[38px] md:text-[64px] md:leading-[80px] tracking-[-0.015em] text-center text-foreground">
            Hello, I am Muyiwa Aina, a Video <br className="hidden md:block" />
            Editor and Content Creator with over{" "}
            <br className="hidden md:block" />3 years of experience.
          </h1>
        </div>

        <SocialLinks />
        <VideoPlaceholder />
      </Container>
    </section>
  );
};

export default Hero;
