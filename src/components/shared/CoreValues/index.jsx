"use client";

import React from "react";
import Image from "next/image";
import { coreValuesdata } from "@/data/index";
import { motion } from "framer-motion";

const CoreValues = () => {
  return (
    <>
      {/* <!-- ===== CoreValues Start ===== --> */}
      <section className="mx-auto">
        <div className="w-full mx-auto">

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
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >

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
              <div className="w-full mx-auto lg:mx-auto sm:ml-5">
                <h2 className="font-extrabold text-3xl md:text-5xl mb-4">
                  About Us 
                </h2>
                <p className="md:w-[50vw]">
                As a battery specialist, we provide not only batteries but also battery related items. Our goal at Battery Guys is to be the single source solution for your battery and battery related needs.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto py-1 text-white grid grid-cols-3 lg:mx-auto gap-8 xl:gap-18">
              {coreValuesdata.map((value) => (
                <div className="max-w-[1200px] py-1 text-left mx-auto">
                  <div className="reletive w-[41.33px] h-[54px] mb-2">
                    <Image
                      alt="trustlogo"
                      width={64}
                      height={64}
                      quality={100}
                      className=""
                      src={value.imgURL}
                    />
                  </div>

                  <h2 className="font-bold lg:text-xl mb-2 text-black">
                    {value.label}
                  </h2>

                  <p className="text-black text-[15px] xl:w-[95%]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </section>
      {/* <!-- ===== CoreValues End ===== --> */}
    </>
  );
};

export default CoreValues;
