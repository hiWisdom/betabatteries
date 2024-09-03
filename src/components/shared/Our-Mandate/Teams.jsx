"use client";

import Link from "next/link";
import React from "react";
// import { ImageZoom } from 'react-responsive-image-zoom';

export default function Teams({ mobile }) {
  return (
    <section
      className='flex flex-col pt-7 w-full gap-2 justify-center items-center'
      id='teams'
    >

      <div className='text-center text-slate-500 text-[18px]  md:text-[16px] font-bold'>
        FREE shipping on most items Financing available!Highest Quality Deep Cycle Batteries Available with Lifeline Marine/RV Batteries, SunXtender Solar/Renewable Energy Batteries, Chairman Mobility Batteries, Vision Energy Power Batteries, Crown Deep Cycle Batteries

      </div>

      
      <div className='w-full flex justify-between text-center text-slate-900 text-lg font-normal border-2 border-[black] p-3 bg-[black]'>

        <div className="text-[white] text-800">
            <a href="#">Featured Services</a>
        </div>

        <div className="text-[white] text-800">
          <a href="#">See more</a>
        </div>

      </div>

      <div className='flex flex-col md:flex-row w-full justify-start items-start gap-2'>

        <a href="" className='border-2 border-[black] w-[100%]'>
        <img
          className='md:flex h-[380px] md:w-[100%]'
          src='/assets/products/s-1.jpg'
        />

        {/* <ImageZoom
        src="/assets/products/s-1.jpg"
        defaultZoomFactor={1.5}
        transition={0.5}
        breakpoints={[
          { maxWidth: 768, zoomFactor: 1.2 },
          { maxWidth: 1024, zoomFactor: 1.4 }
        ]}
        imgClassName="my-image-class"
        debug={false}
        /> */}

        </a>

        <a href="" className='border-2 border-[black] w-[100%]'>
        <img
          className='md:flex h-[380px] md:w-[100%]'
          src='/assets/products/s-2.jpg'
        />
        </a>

      </div>

      <div className='w-full justify-start items-start gap-2.5 inline-flex'>

        <a href="" className='w-full h-[210px] sm:h-[90px]'>
          <img
            className='w-full h-[210px]'
            src='/assets/products/s-2.jpg'
            />
        </a>

        <a href="" className='w-full h-[210px] sm:h-[90px]'>
          <img
            className='w-[300px] h-[210px]'
            src='/assets/products/s-1.jpg'
          />
        </a>

        <a href="" className='w-full h-[210px] sm:h-[90px]'>
          <img
            className='w-full h-[210px]'
            src='/assets/products/s-3.jpg'
          />
        </a>

        <a href="" className='w-full h-[210px] sm:h-[90px]'>
          <img
            className='w-[420px] h-[210px]'
            src='/assets/products/s-4.jpg'
          />
        </a>

      </div>

    </section>
  );
}
