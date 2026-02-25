import React from "react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import NavLinks from "./ui/NavLinks";
import Container from "./Container";

const FooterMobile = () => {
  return (
    <footer className="md:hidden w-full pt-15 pb-15 bg-background">
      <Container>
        <div className="w-full min-h-[414px] bg-[url('/footer.webp')] bg-cover bg-center relative rounded-[32px] overflow-hidden px-6 py-12">
          <div className="flex flex-col items-center space-y-6 mt-3">
            <h1 className="font-[family-name:var(--font-crimson)] font-medium text-[28px] md:text-[56px] leading-[48px] md:leading-[72px] text-center text-foreground">
              Have a project in mind?
            </h1>

            <a href="mailto:Ainamuyiwa18@gmail.com" className="w-full">
              <Button className="w-full rounded-3xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-6 mt-0 md:mt-0 px-9">
                Send a mail
              </Button>
            </a>
            <div className="w-full mt-10">
              <div className="w-full pt-3">
                <NavLinks isMobile />
              </div>
              <div className="w-fullborder">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterMobile;
