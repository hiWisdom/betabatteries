"use client";

import { links } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import ThemeSwitch from "../ThemeSwitch";
// import ThemeToggler from "./ThemeToggler";
import MenuImage from "@/components/shared/NavBar/MenuImage";
import MobileNav from "@/components/shared/NavBar/MobileNav";
import NavLink from "@/components/shared/NavBar/NavLink";
import SubLink from "@/components/shared/NavBar/SubLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/admin") return null;
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState<number | null>(null);
  const subRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMouseEnter(index) {
    if (links[index].subLinks) {
      setHovering(index);
    } else {
      setHovering(null);
    }
  }

  // const url = [
  //   "auth/login",
  //   "auth/register",
  //   "auth/forgot-password",
  //   "auth/verification",
  // ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-accent bg-red backdrop-blur supports-[backdrop-filter]:bg-background-white transition-all px-3",
        isScrolled && "shadow-sm shadow-accent"
      )}
    >
      {/* <div className="container flex max-sm:h-14 max-w-screen-2xl items-center justify-between mx-auto overflow-hidden"> */}
      <div className="flex items-center justify-between mx-auto">
        {/* Mobile sidebar */}
        <MobileNav />
        <div className="hidden md:flex items-center gap-x-10">
          <Link
            href="/"
            className="relative items-center gap-x-3 flex font-bold text-muted hover:text-accent text-3xl transition ease-in-out"
          >
            <Image
              src="/images/logo/Timob-White-Logo.png"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/timobhealth.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </Link>

          <nav className="flex items-center gap-3"
            onMouseLeave={() => {
              if (!subRef.current) {
                setHovering(null);
              }
            }}>

            {links.map((link, index) => (
              <NavLink
                key={link.label + index}
                link={link}
                index={index}
                hovering={hovering}
                handleMouseEnter={handleMouseEnter}
              />
            ))}

            <div
              ref={subRef}
              className={cn(
                "absolute top-14 left-0 p-8 w-full bg-transparent transition-all ease-in-out",
                hovering || hovering === 0
                  ? "opacity-100"
                  : "opacity-0"
              )}
              onMouseLeave={() => setHovering(null)}
            >
            <div className="grid grid-cols-4 max-w-[1560px] mx-auto gap-6 bg-white -mt-9 p-10 shadow rounded">
              <MenuImage hovering={hovering} />
              {hovering !== null &&
                links[hovering].subLinks?.map((subLink, index) => (
                  <SubLink key={index} index={index} subLink={subLink} />
                ))}
            </div>
            </div>

          </nav>

        </div>

          <Link
            href="/find-doctor"
            className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white max-sm:hidden"
          >
            Find a Doctor
          </Link>

        <div className="flex items-center gap-x-4 max-sm:hidden">
          {/* <ThemeSwitch /> */}
          {/* <ThemeToggler /> */}
          <div className="aspect-square h-10 rounded-full overflow-hidden relative">
            {/* <Image
              src="/witch.jpg"
              alt="profile"
              fill
              className="object-cover object-center"
            /> */}
          </div>
        </div>
        
      </div>

    </header>
  );
}
