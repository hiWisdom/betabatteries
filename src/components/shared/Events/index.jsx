"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MuxPlayer from '@mux/mux-player-react';
import CoreValues from "@/components/shared/CoreValues";

export default function Events() {
  return (
    <motion.div
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
      <div className='flex lg:h-[792px] flex-col-reverse bg-[#8f060e]/5 lg:flex-row px-5 xl:px-20 py-10 md:py-20 w-full gap-8 justify-center lg:items-center rounded'>


        <div className='lg:w-[60%]'>

        <div className='flex flex-col'>
            <CoreValues /> 

            
          <Link href={"/auth/register"}>
            <button className='px-8 py-2.5 mt-8 rounded-[10px] border-2 border-[black] justify-center items-center flex hover:bg-white bg-[black] transition-all duration-300 group shadow-lg shadow-[#000000]/20'>
              <div className="group-hover:text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide text-white">
                Our Market
              </div>
            </button>
          </Link>

        </div>
          
        </div>

        
        <div className='flex-col lg:w-[auto] h-full justify-center items-start gap-4 flex'>



          {/* <MuxPlayer
            streamType="on-demand"
            playbackId="KiZS7L8CF02T3Qvel1jHaAJdgeQ02gRgLVybMuwpZi3PA"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            className="h-[100vh]"
          /> */}

          <MuxPlayer
            streamType="on-demand"
            playbackId="t02Lb2CwDlPYgw2xjieSmJAewjsqWLUWRVavlFVDV6zI"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            className="h-[100vh]"
          />
          

        </div>
      </div>
    </motion.div>
  );
}
