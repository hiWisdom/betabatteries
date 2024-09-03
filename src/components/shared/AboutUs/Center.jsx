"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Past_Events from "@/components/shared/Events/Past_Events";

function Center() {
  return (
    <>
      {/* <!-- ===== Center Start ===== --> */}

      <div className='h-max bg-[black] lg:p-20 max-sm:p-5'>


        {/* <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className='animate_top'
        >
          <div className='h-max lg:flex justify-evenly'>
            <div className='lg:w-[50%]'>
              <div className='lg:p-9 font-bold lg:text-5xl'>
                <p className='text-white leading-relaxed max-sm:text-[30px] max-sm:m-2'>
                  Why Christ-Centered Education?
                </p>
              </div>
            </div>

            <div className='lg:w-[50%] text-gray-400 leading-relaxed p-10'>
              <li className=''>
                Professional career developement as critical, innovative
                educators.
              </li>
              <li className='mb-1'>
                Moral and spiritual transformation in learners.
              </li>
              <li className='lg:w-[78%]'>
                Empower to impact and raise Godly. Global Generations (G3s).
              </li>
            </div>
          </div>
        </motion.div> */}

      <div className='px-[7vw] pb-6 mt-[2rem] md:mt-[6rem]'>
        <Past_Events />
      </div>



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
          className='animate_right'
        >
          <div className='flex-col justify-start items-start gap-3 flex mb-6 sm:mt-10 sm:ml-5'>
            <h1 className='text-appBlack text-[26px] md:text-[36px] leading-none xl:w-[100%] font-extrabold text-white'>
              Why Use BETA Batteries?
            </h1>
          </div>

          <ul>

            <li className="mb-6">
              {/* <span
              style={{
                backgroundImage: `url(${CheckMark.src})`,
                width: '100%',
                height: '100%',
              }}></span> */}

              <div className="flex">

                <div className="">
                  <Image src="/assets/icons/black-check-mark.jpg" alt="Image description" width="64" height="64" />
                </div>

                <div className="text-white">
                    <h3 className="font-extrabold text-white">Longer Service Life</h3>
                    <p className="text-white">8-12-year design life and 3-10-year service life.</p>
                </div>
                
              </div>


            </li>

            <li className="mb-6">
              {/* <span
              style={{
                backgroundImage: `url(${CheckMark.src})`,
                width: '100%',
                height: '100%',
              }}></span> */}

              <div className="flex">

                <div className="">
                  <Image src="/assets/icons/black-check-mark.jpg" alt="Image description" width="64" height="64" />
                </div>

                <div className="text-white">
                    <h3 className="font-extrabold text-white">Extended Cycle Life</h3>
                    <p className="text-white">400 charge-discharge cycles at 80% depth of discharge.</p>
                </div>
                
              </div>


            </li>

            <li className="mb-6">
              {/* <span
              style={{
                backgroundImage: `url(${CheckMark.src})`,
                width: '100%',
                height: '100%',
              }}></span> */}

              <div className="flex">

                <div className="">
                  <Image src="/assets/icons/black-check-mark.jpg" alt="Image description" width="64" height="64" />
                </div>

                <div className="text-white">
                    <h3 className="font-extrabold text-white">Massive Starting Power</h3>
                    <p className="text-white">Engine cranking pulses up to 2700 amps for 5 seconds.</p>
                </div>
                
              </div>


            </li>

            <li className="mb-6">
              {/* <span
              style={{
                backgroundImage: `url(${CheckMark.src})`,
                width: '100%',
                height: '100%',
              }}></span> */}

              <div className="flex">

                <div className="">
                  <Image src="/assets/icons/black-check-mark.jpg" alt="Image description" width="64" height="64" />
                </div>

                <div className="text-white">
                    <h3 className="font-extrabold text-white">Evalasting Electric Power </h3>
                    <p className="text-white">long service life with no ending, but good maintenance.</p>
                </div>
                
              </div>


            </li>


            <div className="">
              <button className="bg-[white] px-7 py-3 text-black rounded-[5px] ml-[13%] font-extrabold ">
                Learn More
              </button>
            </div>

          </ul>
        </motion.div>
      </div>

      {/* <!-- ===== Center End ===== --> */}
    </>
  );
}

export default Center;
