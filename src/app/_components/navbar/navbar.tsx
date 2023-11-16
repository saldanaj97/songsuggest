"use client";

import { Button } from "@nextui-org/button";
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

  const menuItems = [
    "Features",
    "Generator",
    "Pricing",
    "Help & Feedback",
    "Profile",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBlurred={false}
      position="static"
      className={`${isHomePage ? "text-white" : "text-primary"}`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            BackgroundBlendr
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/features">Features</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/generator">Generator</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing">Pricing</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" variant="flat">
            Sign Up
          </Button>
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
