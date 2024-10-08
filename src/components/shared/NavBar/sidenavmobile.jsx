"use client";

import React, { useCallback, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { navdata } from "@/data";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";

const SideNavMobile = ({ setSideNav }) => {
  const { pathname } = useRouter();

  return (
    <div className="w-full h-screen z-[9999] top-[60px] sm:top-[80px] p-3 right-0 absolute bg-black m-auto justify-center items-center">
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="lg:navbar mx-auto self-center justify-center items-center"
      >
        <ul
          onClick={() => setSideNav(false)}
          className="flex flex-col mt-5 gap-2"
        >
          {navdata.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md ${
                  isActive && "bg-primary w-[16em]"
                }`}
              >
                <Link
                  href={`${pathname === "/" ? link.route : link.route2}`}
                  className={`flex gap-4 items-center p-4 `}
                >
                  {/* <div>{link.imgURL}</div> */}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="font-bold bg-[#b7ac7f] text-white mt-8 hover:bg-[white] hover:text-[black] p-5 text-center w-fit rounded-md">
        Buy Battery
        </button>

        {/* <button
          className="flex items-center text-white gap-4 p-4 mb-8 mt-12"
          onClick={logout}
        >
          <LogoutIcon />
          <p className="small-medium lg:base-medium">Logout</p>
        </button> */}
      </motion.nav>
    </div>
  );
};

export default SideNavMobile;
