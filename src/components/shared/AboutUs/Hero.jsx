import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className='h-[35rem] w-full relative  md:h-[85vh]'>
      <div className='w-full h-[35rem]  md:h-[85vh] -z-20 '>
        <Image
          alt='logo'
          fill
          className='lg:object-contain max-sm:object-cover rounded-md'
          quality={100}
          src='/assets/images/about/solar-panel-1.jpg'
        />
      </div>
    <section className='flex absolute top-[5rem] bottom-0 py-[5em] md:py-[4em] flex-col items-start justify-center max-sm:ml-5'>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className='animate_left'
        >
          <div className='flex flex-col justify-start items-start gap-4 lg:ml-20'>


            <div className='justify-start items-start gap-2.5 inline-flex'>
              <div className='text-white text-[30px]  md:text-[65px] font-semibold'>
                About us
              </div>
            </div>
            <div className='flex flex-col gap-3 md:w-[50vw]'>
              <span className='text-white text-lg md:text-xl font-normal leading-7'>
              Beta Batteries is an official distributor for: Lifeline Battery, Sun Xtender, Chairman, Vision Energy Power, Crown Deep Cycle, Optima, Northstar and many more.
              </span>
              <span className='text-white text-base md:text-xl font-normal leading-7'>
                {"(Certified Worldwide Battery Distributor)"}
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroSection;
