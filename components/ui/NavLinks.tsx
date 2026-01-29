"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavLinksProps {
  isMobile?: boolean;
  className?: string;
}

const NavLinks = ({ isMobile = false, className = "" }: NavLinksProps) => {
  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "#resume" },
  ];

  if (isMobile) {
    return (
      <div className={`w-full flex justify-between items-center ${className}`}>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="font-inter text-sm font-normal tracking-normal bg-transparent text-[#B3B3B3] hover:text-[#B3B3B3] hover:underline underline-offset-4 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navLinks.map((link, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className={`${navigationMenuTriggerStyle()} font-inter text-base font-normal tracking-normal bg-transparent text-[#B3B3B3] hover:bg-transparent hover:!text-[#B3B3B3] hover:underline underline-offset-4 focus:bg-transparent focus:!text-[#B3B3B3]`}
              >
                {link.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
