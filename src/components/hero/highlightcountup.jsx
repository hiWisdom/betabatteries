"use client";
import Image from "next/image";
import { useState } from "react";
import CountUp from 'react-countup';
import { AnimatePresence, motion } from "framer-motion";

const HighlightCountUp = (isOpen) => {


    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = () => {
      setOpenAccordionId((openAccordionId) =>
        openAccordionId === openAccordionId ? null : openAccordionId
      );
    };


  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 pt-18.5 lg:pb-22.5 mx-auto">
        <div className="relative mx-auto md:px-8 2xl:px-0">

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


            <div className="flex">

                <div className="flex flex-col m-1 justify-center  border-2 p-3 border-[#b7ac7f] rounded-md">

                    <div className="">
                        <p className="text-[#b7ac7f] s:text-[12px] lg:text-xl font-bold">Battery Sold</p>
                    </div>

                    <div className="justify-center">
                        <span className="text-[#b7ac7f] lg:text-xl font-bold">+</span>
                        <CountUp end={1000}
                        className="text-[#b7ac7f] lg:text-xl font-bold text-center" />
                    </div>
          
                </div>

                
                <div className="flex flex-col m-1 justify-center border-2 p-3 border-[#b7ac7f] rounded-md">


                    <div className="flex flex-col justify-center">

                        <div className="">
                            <p className="text-[#b7ac7f] s:text-[12px] lg:text-xl font-bold">Solar Panel Sold</p>
                        </div>

                        <div className="justify-center">
                            <span className="text-[#b7ac7f] lg:text-xl font-bold">+</span>
                            <CountUp end={1000}
                            className="text-[#b7ac7f] lg:text-xl font-bold text-center" />
                        </div>

                    </div>

                </div>

                
                <div className="flex flex-col m-1 justify-center  border-2 p-3 border-[#b7ac7f] rounded-md">


                    <div className="flex flex-col justify-center">

                        <div className="">
                            <p className="text-[#b7ac7f] s:text-[12px] lg:text-xl font-bold">Customer Satifcation</p>
                        </div>

                        <div className="justify-center">
                            <span className="text-[#b7ac7f] lg:text-xl font-bold">+</span>
                            <CountUp end={2000}
                            className="text-[#b7ac7f] lg:text-xl font-bold text-center" />
                        </div>

                    </div>

                </div>

            </div>

          </motion.div>


            <div>
                
            <div className='flex w-full duration-300 flex-col text-black pt-2 my-4 justify-center items-start'>
              <div
                onClick={() => toggleAccordion(openAccordionId)}
                className='border-t w-[200px] cursor-pointer flex flex-row pt-4 gap-3 rounded-md justify-between items-center'
              >
                <p className={`text-[15px] md:text-[18.687px] w-full font-bold text-center`}>
                  Contact the Seller
                </p>
                <div className='flex mr-auto justify-end items-end'>
                  {isOpen ? (
                    <img
                      src='/assets/icons/right.svg'
                      className='rotate-[90deg]'
                      alt=''
                    />
                  ) : (
                    <img src='/assets/icons/right.svg' alt='' />
                  )}
                </div>
              </div>
              {/* <div className='flex flex-col bord text-black justify-center items-center'> */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className='flex mt-2 flex-col w-full rounded-md justify-center items-start'
                  >
                    <p className='text-[15.29px] px-2'>

                      <div className="flex">

                        <div className="m-1">
                          <ul>
                            <li>Phone: <a href="">234(0)-706-919-9257</a></li>
                            <li>Email: <a href="">betahbatteries@gmail.com</a></li>
                          </ul>
                        </div>

                        
                        <div className="m-1">
                          <ul>
                            <li>Phone: <a href="">234(0)-706-919-9257</a></li>
                            <li>Email: <a href="">betahbatteries@gmail.com</a></li>
                          </ul>
                        </div>

                      </div>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* </div> */}
            </div>

            </div>

      </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default HighlightCountUp;
