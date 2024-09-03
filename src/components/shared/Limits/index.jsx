"use client";

import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import Video from 'next-video';
// import getStarted from '/videos/v-1.mp4';
import MuxPlayer from '@mux/mux-player-react';
import Past_Events from "@/components/shared/Events/Past_Events";
// import CheckMark from '/assets/icons/check-mark-symbol-black-background-drawing.jpg';

export default function Limits() {
  return (


    <div className='border-2 border-[black] flex flex-col-reverse gap-[5vh] md:gap-0 md:flex-row mt-36 justify-between items-center bg-[black]' id="limits">
   
      {/* <div className='w-full text-slate-900 text-lg font-normal border-2 border-[#b7ac7f] p-3 bg-[#b7ac7f]'>
          <p>Visit the BETA Battery store today.</p>
        </div> */}


      <div className='relative md:w-[50%] md:w-[48%] h-[374px] md:h-full'>
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
          className='animate_left '
        >
          {/* <Image
            alt='limits'
            fill
            quality={100}
            className='rounded-lg object-cover'
            src='/assets/images/courses.png'
          /> */}

            {/* <Video src={getStarted}/> */}

            <MuxPlayer
              streamType="on-demand"
              playbackId="bIsm401MguXPFDMMNoT02QHT4Wz8XoP11MpZyCbA5Yjao"
              metadataVideoTitle="Placeholder (optional)"
              metadataViewerUserId="Placeholder (optional)"
              primaryColor="#FFFFFF"
              secondaryColor="#000000"
              className="h-[100vh]"
            />

        </motion.div>
      </div>

      <div className='flex-col md:w-[50%] h-full items-start gap-4 flex'>
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


      {/* <div className="c_about_us_B_div_con_h_list">

        <div>
            <ul>
                <li>Place a hot water bottle or heated wheat bag on your abdomen.</li>
                <li>Drink plenty of clear fluids such as water.</li>
                <li>Reduce your intake of coffee, tea and alcohol as these can make the pain worse.</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>Avoiding greasy or spicy foods</li>
                <li>getting plenty of rest, and avoiding tobacco and caffeine. </li>
                <li>Eating small and frequent meals</li>
            </ul>
        </div>

      </div> */}

      {/* <div className='px-[7vw] pb-6 mt-[2rem] md:mt-[6rem]'>
        <Past_Events />
      </div> */}

    </div>
    
  );
}
