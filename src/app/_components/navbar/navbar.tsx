"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: Add in a logo at somepoint in place of/along w/ the text
export default function Navigation() {
  const currentPath = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (currentPath !== "/") {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, [currentPath]);

  const menuItems = ["Features", "Generator", "Help & Feedback"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBlurred={false}
      position="sticky"
      className={`${
        isHomePage ? "text-white" : "text-primary"
      } top-0 z-50 bg-transparent`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            SongSuggest GPT
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/features">Features</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/generator"
            className="to-amaranth from-bittersweet bg-gradient-to-b bg-clip-text text-transparent"
          >
            Generator
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/how-it-works">How it works</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Help & Feedback</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
