"use client";

import Image from "next/image";
import { Check } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Past_Events() {
  return (
    <div className="flex flex-col lg:flex-row mt-20 justify-center lg:items-center gap-12">

      <div className="flex-col lg:w-[50%] h-full justify-center items-start gap-4 flex">
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
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_left"
        >
        <div className="flex-col justify-start items-start gap-3 flex">
          <h5 className="text-primary text-xl font-bold uppercase tracking-[3px]">
            Event
          </h5>
          <div className="flex-col justify-start items-start gap-2 inline-flex font-bold">
            <h3 className="text-slate-900 text-[56px] leading-[52.80px]">
              Customer
            </h3>
            <h3 className="text-indigo-400 text-[56px] leading-[52.80px]">
              Testimonial
            </h3>
          </div>
        </div>
        
      </motion.div>
      </div>


      <div className="relative lg:w-[40%] h-full">
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
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_right"
        >
        {/* <Image
          alt="past-event"
            width={550}
            height={200}
          quality={50}
          className="object-cover"
          src="/assets/images/testimonial-1.png"
        /> */}

         <p className="text-[white]"> 
          
          "I couldn't be happier with the products and services provided by Beta Batteries. Their team guided me through selecting the perfect solar panels and inverter batteries for my home, making the entire process seamless and stress-free. The quality of their products is exceptional — my energy bills have significantly reduced, and I now have a reliable backup power source. What truly sets them apart is their commitment to trust and integrity. I felt valued and heard every step of the way. I highly recommend Beta Batteries to anyone looking for reliable, sustainable energy solutions."

          — Ike Donald
        
        </p>
        </motion.div>
      </div>

    </div>
  );
}
