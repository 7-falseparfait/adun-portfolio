import React from "react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import NavLinks from "./ui/NavLinks";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-26">
        <div className="w-full h-[600px] bg-[url('/footer.webp')] bg-cover bg-center relative rounded-[48px] overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between items-center p-8">
            <div></div>

            <div className="flex flex-col items-center space-y-4  mt-16">
              <h1 className="font-[family-name:var(--font-crimson)] font-medium text-6xl">
                Have a project in mind?
              </h1>
              <Button className="rounded-3xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-6 px-9">
                Send a mail
              </Button>
            </div>

            <div className="flex justify-between items-center w-full">
              <SocialLinks />
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
