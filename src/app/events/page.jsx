"use client";

import React from "react";
import Navbar from "@/components/shared/NavBar/nav";
import Events from "@/components/shared/Events";
import CONTACTs from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Mission from "@/components/shared/AboutUs/Mission";
import Belief from "@/components/shared/AboutUs/Belief";
import Center from "@/components/shared/AboutUs/Center";
import HeroSection from "@/components/shared/AboutUs/Hero";

export default function EventPage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      
      <Events />

      <div className='px-[7vw]'>
        <Mission />
        <Belief />
      </div>
      <Center />

      <div className='px-[7vw] pb-6 mt-[2rem] md:mt-[6rem]'>
      <CONTACTs />
      </div>
      <Footer />
    </>
  );
}
