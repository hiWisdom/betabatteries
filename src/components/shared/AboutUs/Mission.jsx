"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  return (
    <div className='h-max w-full flex justify-between gap-5 md:gap-0 max-sm:flex-col-reverse'>
      {/* <!-- ===== Mission Start ===== --> */}
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
        className='animate_left w-full  md:w-[40%]'
      >
        <Image
          alt='logo'
          width={500}
          height={500}
          quality={100}
          src='/assets/images/about/solar-panel.jpg'
          className=''
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 50,
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
        className='animate_right  flex flex-col justify-center w-full md:w-[53%]'
      >
        <div className='font-extrabold  lg:text-[56px] mb-3 md:mb-10'>
          <p className='max-sm:text-[48px] max-sm:font-semibold max-sm:-mt-2'>
            Our Solar Panel
          </p>
        </div>

        <div className='lg:leading-7 lg:w-[100%] text-lg border-l-4 border-[#AA205E] rounded-s-sm pl-6 max-sm:m-2'>
          <p className='lg:mb-5 text-[#AA205E]'>
          Harness the power of the sun with our durable and efficient solar panels. 
          </p>

          <p className='w-[90%]'>
          Ideal for residential, commercial, and industrial applications, our panels deliver reliable, clean energy to help reduce your carbon footprint and energy costs.
          </p>
        </div>

        <Link href={"/#"}>
          <button className='px-8 py-2.5 mt-8 rounded-[10px] border-2 border-[black] justify-center items-center flex hover:bg-white bg-[black] transition-all duration-300 group shadow-lg shadow-[#000000]/20'>
            <div className="group-hover:text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide text-white">
              Purchase Solar Panel
            </div>
          </button>
        </Link>

      </motion.div>
      {/* <!-- ===== Mission End ===== --> */}
    </div>
  );
}

export default Mission;
