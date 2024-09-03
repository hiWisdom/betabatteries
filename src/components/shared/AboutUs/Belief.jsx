"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  return (
    <div className='h-max mb-20 flex flex-col gap-5 md:gap-0 pt-[80px] lg:flex-row justify-between'>
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
        className='animate_left lg:w-[45%] flex flex-col justify-center'
      >
        <p className='p-2 text-[55px] max-sm:text-[30px] max-sm:leading-[2rem] font-semibold leading-[3.5rem]'>
          Our Inverter Battery
        </p>

        <div className='lg:leading-7 lg:w-[100%] text-lg border-l-4 border-[#AA205E] rounded-s-sm pl-6 max-sm:m-2'>
          <p className='lg:mb-5 text-[#AA205E]'>
          Ensure uninterrupted power supply with our robust inverter batteries. 
          </p>

          <p className='w-[90%]'>
          Designed for maximum efficiency and long life, they provide dependable backup power for homes, businesses, and critical operations during outages.
          </p>
        </div>

        
            
        <Link href={"/auth/register"}>
          <button className='px-8 py-2.5 mt-8 rounded-[10px] border-2 border-[black] justify-center items-center flex hover:bg-white bg-[black] transition-all duration-300 group shadow-lg shadow-[#000000]/20'>
            <div className="group-hover:text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide text-white">
              Purchase Inverter Battery
            </div>
          </button>
        </Link>

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
        className='animate_right flex justify-end md:w-[45%]'
      >
        <Image
          alt='logo'
          width={500}
          height={500}
          quality={100}
          src='/assets/betabatteries/inverter.jpeg'
          className='p-1'
        />
      </motion.div>
    </div>
  );
}

export default Mission;
