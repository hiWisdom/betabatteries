"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { navdata } from "@/data";
import useFunctions from "@/hooks/useFunctions";
import SideNavMobile from "./sidenavmobile";
// import NavLink from "@/components/shared/NavBar/NavLink";

const url = [
  "auth/login",
  "auth/register",
  "auth/forgot-password",
  "auth/verification",
];

const Navbar = () => {
  const pathname = usePathname();
  const [sideNav, setSideNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { imageLoader } = useFunctions();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${sideNav ? "bg-white" : "bg-white"} ${
        pathname.includes("auth") && "hidden"
      } fixed border-b w-full h-[60px] sm:h-[80px] px-3 md:px-10 lg:px-6 xl:px-14 shadow-lg z-50 flex flex-row justify-between items-center`}
    >
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className='flex flex-row mx-auto gap-5 lg:gap-8 justify-start items-center w-full'
      >
        <div className='flex py-5 w-[24vh] h-[16vh] justify-start items-center' id='company-logo'>
          <Link href={"/"}>
            <Image
              loader={imageLoader}
              alt='logo'
              width={140}
              height={60}
              quality={100}
              className=''
              src='/assets/images/BETA-BATTERY-MAIN-SITE-WEBSITE-COMPANY-LOGO.jpeg'
            />
          </Link>
        </div>

        <div className='md:flex flex-row gap hidden justify-center items-center'>
          <ul
            onClick={() => setSideNav(false)}
            className='md:flex flex-row hidden lg:gap-3'
          >
            {navdata.map((link) => {
              const isSticky = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={` ${isSticky ? "text-[#b7ac7f]" : "text-black"}`}
                >
                  {/* <Image
                    alt='navtitleImages'
                    fill
                    quality={100}
                    className='w-[20px]'
                    src={`/assets/icons${link.imgURL}`}
                  /> */}

                  <Link
                    href={`${pathname === "/" ? link.route : link.route2}`}
                    className={`flex gap-4 hover:text-[#b7ac7f] text-sm duration-150 items-center p-4 `}
                  >
                    {link.label}


                    {/* {links.map((link, index) => (
                      <NavLink
                        key={link.label + index}
                        link={link}
                        index={index}
                        hovering={hovering}
                        handleMouseEnter={handleMouseEnter}
                      />
                    ))} */}


                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      <motion.div
        initial={{ width: "30%" }}
        animate={{ width: "17%" }}
        transition={{ duration: 0.2 }}
        className='md:flex w-[15em] md:w-[20%] justify-end hidden items-center'
      >
        <Link
          href={"/#"}
          className={`font-bold w-[100%] bg-[black] text-white duration-300 hover:bg-[#b7ac7f] hover:text-[white] px-3 ${
            pathname === `/auth/login` || `/${url}` ? "" : "block"
          } py-3 text-center w-full md:w-[100%] rounded-md`}
        >
          Buy Battery
        </Link>
      </motion.div>

      <button
        onClick={() => setSideNav(!sideNav)}
        className={`text-[black] text-[5vh] flex md:hidden`}
      >
        {sideNav ? (
          <IoCloseSharp className='' />
        ) : (
          <MdOutlineMenu className='' />
        )}
      </button>

      {sideNav && <SideNavMobile setSideNav={setSideNav} />}
      
    </nav>
  );
};

export default Navbar;
