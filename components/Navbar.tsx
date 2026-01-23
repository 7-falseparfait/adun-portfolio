"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NavLinks from "./ui/NavLinks";
import Container from "./Container";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-[#030303]">
      <Container className="flex justify-between h-16 items-center">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/Avatar.jpg" alt="Logo" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <Link href="mailto:Ainamuyiwa18@gmail.com">
            <Button className="rounded-4xl cursor-pointer md:py-[22px] bg-white text-black hover:bg-neutral-200 text-sm md:text-base px-4 md:px-8">
              Hire Me
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#030303]">
          <div className="px-5 py-6">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
