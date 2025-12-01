"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavLinks = () => {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className={`${navigationMenuTriggerStyle()} font-inter text-base font-normal tracking-normal bg-transparent text-[#B3B3B3] hover:bg-transparent hover:!text-[#B3B3B3] hover:underline underline-offset-4 focus:bg-transparent focus: !text-[#B3B3B3]c `}
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
