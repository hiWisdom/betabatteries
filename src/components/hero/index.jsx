"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "framer-motion";
import HeroTab from "@/components/hero/herotabs";
import Highlight from "@/components/hero/highlight";
import HighlightCountUp from "@/components/hero/highlightcountup"

const patners = ["638ee8bf6f869", "cicio", "weavy", "vrockets", "viewio"];
const carousel = [
  "/assets/images/bg-1.jpeg",
  "/assets/images/bg-2.jpeg",
  "/assets/images/bg-3.jpeg",
  "/assets/images/bg-4.jpeg",
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='lg:w-[90%] mx-auto mt-[60px] md:mt-[80px] flex px-5 md:px-[60px] bg-primary bg-opacity-[0.03] pt-[16vh] md:pt-[126px] flex-col items-start justify-start relative h-screen md:h-[120vh]'>
      {carousel.map((item, index) => (
        <AnimatePresence key={index.toString()}>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className='w-full md:w-[100%] mx-auto top-0 mt-[20px] md:mt-[28px] self-center h-[86vh] md:h-[674px] absolute'
            >
              <Image
                alt='logo'
                fill
                className='object-cover mx-auto md:rounded-[10px]'
                quality={100}
                src={item}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <section className='flex z-10 h-max mx-auto w-[100%]' id="hero-tabs">


        <div className="flex lg:w-[50%] h-[20vh]">

          <HeroTab/>

        </div>

        <div className="flex lg:w-[50%] bg-white h-[65vh] rounded-md" id="hero-tabs-highlight">

          <div className=" flex-col">
            <Highlight/>

            <HighlightCountUp/>
          </div>

        </div>


      </section>

      <section className='flex z-30 absolute  w-full px-[20px] md:px-[80px] justify-between gap-[5vw] bottom-7 md:bottom-10 self-center items-center'>
        <p style={{ fontWeight: 'bold', fontSize: '20px' }} >MANUFACTURER:</p>
        <Marquee
          direction='left'
          speed={80}
          delay={5}
          play={!false}
          pauseOnHover={true}
          autoFill={!true}
          // className=' overflow-x-scroll bord w-screen'
        >
          <div className='flex w-[200vw]  md:w-[85vw] justify-around  items-center'>
            {patners.map((item, ind) => (
              <div className='w-[80px] h-[30px] md:w-[150px] md:h-[46px] relative'>
                <Image
                  fill
                  key={ind.toString()}
                  src={`/assets/logos/${item}.jpg`}
                  alt='log'
                  className=''
                />
              </div>
            ))}
          </div>
        </Marquee>
      </section>

    </div>
  );
}

export default HeroSection;
