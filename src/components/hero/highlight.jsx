"use client";
import Image from "next/image";
import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion";

const Highlight = () => {



  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative mx-auto">
        <div className="relative mx-auto px-4 md:px-8 2xl:px-0">

          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >

            <h1 style={{ fontWeight: 'bold', fontSize: '50px'  }} id="hero-typewriter">
                Buy Authentic{' '}
                <span style={{ color: '#b7ac7f', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Solar Panel', 'Car Battery', 'Truck Battery', 'Heavy Duty Battery',  'Inverter', 'Solar Equipement',]}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    delaySpeed={5}
                />
                </span>
            </h1>

            </motion.div>


      </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default Highlight;
