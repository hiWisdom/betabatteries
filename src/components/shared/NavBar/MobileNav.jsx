"use client";

import { links } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

export default function MobileNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState<number | null>(null);

  function handleClick(index, e) {
    e.preventDefault();
    setOpenedMenu(openedMenu === index ? null : index);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>

      <div className="animate lg:hidden">
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
            src="/images/logo/timobhealth-mobile.svg"
            alt="logo"
            width={119.03}
            height={30}
            className="dark:hidden"
          />
        </Link>
      </div>

      <Link
        href="/find-doctor"
        className="flex items-center justify-center rounded-full bg-primary px-3.5 py-0.5 text-[12px] text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white lg:hidden"
      >
        Find a Doctor
      </Link>

      <div className="flex items-center gap-x-4 lg:hidden">
        {/* <ThemeSwitch /> */}
        <ThemeToggler />
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden"
      >
        <Menu className="w-8 h-8" />
      </button>


      <div
        className={cn(
          "flex overflow-y-auto flex-col px-6 pt-12 h-full min-h-screen fixed left-0 top-0 z-50 bg-background md:hidden border-r border-accent w-[75%] transition-all duration-300 ease-in-out bg-white",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between bg-white">

          <div>
            <Link
              href="/"
              className="relative items-center gap-x-3 flex font-bold text-muted hover:text-accent text-3xl transition ease-in-out"
            >
              <Image
                src="/images/logo/timobhealth.svg"
                alt="logo"
                width={119.03}
                height={30}
                className="w-full"
              />
            </Link>
          </div>

          <div>        
            <button
              className="hover:text-accent transition ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

        </div>
        
        <nav className="flex flex-col gap-4 pt-12 overflow-y-auto bg-white">
          {links.map((link, index) => (
            <div key={link.label + index}>
              <Link
                href={link.href}
                className={cn(
                  "text-muted hover:cursor-pointer rounded-md hover:text-accent hover:bg-secondary transition ease-in-out py-2 px-2 flex items-center justify-between",
                  pathname === link.href &&
                    "text-accent bg-secondary font-semibold",
                  openedMenu === index &&
                    "text-accent bg-secondary font-semibold"
                )}
              >
                {link.label}
                {link.subLinks && (
                  <button onClick={(e) => handleClick(index, e)}>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-all cursor-pointer",
                        openedMenu === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                )}
              </Link>
              {openedMenu === index && (
                <div className="pl-2">
                  {link.subLinks?.map((subLink, idx) => (
                    <React.Fragment key={idx}>
                      {subLink.header && (
                        <div className="space-y-2">
                          <div className="text-primary font-bold mt-1 text-sm">
                            {subLink.header}
                          </div>
                          {subLink.subMenu && (
                            <>
                              {subLink.subMenu.map((subItem) => (
                                <Link
                                  href={subItem.href}
                                  key={subItem.label}
                                  className="text-muted block text-xs hover:text-accent transition pl-4"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                      {subLink.subImages?.map((subImage) => (
                        <Link key={subImage.label} href={subImage.href}>
                          {subImage.label}
                        </Link>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}

        <Link
          href="/find-doctor"
          className="flex items-center justify-center rounded-full bg-primary px-3.5 py-0.5 text-[12px] text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white lg:hidden"
        >
          Find a Doctor
        </Link>

        {/* <Link
          href="/tele"
          className="flex items-center justify-center rounded-full bg-primary px-3.5 py-0.5 text-[12px] text-white duration-300 ease-in-out hover:bg-primaryblack hover:text-white lg:hidden"
        >
          Find an Ambulance
        </Link> */}
        </nav>

      </div>
      
    </>
  );
}
