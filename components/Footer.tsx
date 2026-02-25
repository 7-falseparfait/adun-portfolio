import React from "react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import NavLinks from "./ui/NavLinks";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="hidden md:block w-full pt-15 pb-20 bg-background">
      <Container>
        <div className="w-full h-[600px] bg-[url('/footer.webp')] bg-cover bg-center relative rounded-[48px] overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between items-center p-8">
            <div></div>

            <div className="flex flex-col items-center space-y-4  mt-16">
              <h1 className="font-[family-name:var(--font-crimson)] font-medium text-6xl">
                Have a project in mind?
              </h1>
              <a href="mailto:Ainamuyiwa18@gmail.com">
                <Button className="w-full rounded-3xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-6 px-9">
                  Send a mail
                </Button>
              </a>
            </div>

            <div className="flex justify-between items-center w-full">
              <SocialLinks />
              <NavLinks />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
