import React from "react";
import Navbar from "@/components/shared/NavBar/nav";
import HeroSection from "@/components/hero";
import Products from "@/components/shared/Products";
import Limits from "@/components/shared/Limits";
import Mandate from "@/components/shared/Our-Mandate";
import CoreValues from "@/components/shared/CoreValues";
// import Modules from '@/components/shared/Modules';
import FAQs from "@/components/shared/Faq";
import CONTACTs from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Teams from "@/components/shared/Our-Mandate/Teams";

export default function App() {
  return (
    <>

      <HeroSection />

      <main className='mt-[2vh] w-full px-[7vw]'>
        <Products />
        <Teams />
      </main>

      <Limits />

      <main className='mt-[2vh] w-full lg:px-[7vw]'>
        <CONTACTs />
        <FAQs />
      </main>

      <Footer />
      




      

        {/* <CoreValues /> */}
        {/* <Mandate /> */}
        {/* </main> */}
        {/* <main className='px-[90.5px] mt-[80px]'> */}
        {/* <Modules /> */}


    </>




  );
}
