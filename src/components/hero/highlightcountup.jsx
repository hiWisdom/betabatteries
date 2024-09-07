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

                    <div>
                        <p className="text-[black] s:text-[12px] lg:text-xl font-bold">Battery Sold</p>
                    </div>

                    <div className="justify-center flex">

                        <div>
                          <span className="text-[black] lg:text-xl font-bold">+</span>
                        </div>
                        
                        <div>
                          <CountUp end={1000}
                          className="text-[black] lg:text-xl font-bold text-center" />
                        </div>

                        <div className="w-[30px] my-auto">
                          <span className="text-[#b7ac7f] lg:text-xl font-bold">
                            <a href="tel:23407069199257" aria-label="car-battery icon">
                              <Image
                                src="/assets/icon/car-battery.svg"
                                alt="car-battery logo"
                                width={25}
                                height={9}
                                className="w-full"
                              />
                            </a>
                          </span>
                        </div>

                    </div>
          
                </div>

                
                <div className="flex flex-col m-1 justify-center  border-2 p-3 border-[#b7ac7f] rounded-md">

                    <div className="">
                        <p className="text-[black] s:text-[12px] lg:text-xl font-bold">Solar Panel Sold</p>
                    </div>

                    <div className="justify-center flex">

                        <div>
                          <span className="text-[black] lg:text-xl font-bold">+</span>
                        </div>
                        
                        <div>
                          <CountUp end={1000}
                          className="text-[black] lg:text-xl font-bold text-center" />
                        </div>

                        <div className="w-[30px] my-auto">
                          <span className="text-[#b7ac7f] lg:text-xl font-bold">
                            <a href="tel:23407069199257" aria-label="solar-power">
                              <Image
                                src="/assets/icon/solar-power.svg"
                                alt="solar-power logo"
                                width={25}
                                height={9}
                                className="w-full"
                              />
                            </a>
                          </span>
                        </div>

                    </div>
          
                </div>

                <div className="flex flex-col m-1 justify-center  border-2 p-3 border-[#b7ac7f] rounded-md">

                  <div className="">
                      <p className="text-[black] s:text-[12px] lg:text-xl font-bold">Customer Satifcation</p>
                  </div>

                  <div className="justify-center flex">

                      <div>
                        <span className="text-[black] lg:text-xl font-bold">+</span>
                      </div>
                      
                      <div>
                        <CountUp end={2000}
                        className="text-[black] lg:text-xl font-bold text-center" />
                      </div>

                      <div className="w-[30px] my-auto">
                        <span className="text-[#b7ac7f] lg:text-xl font-bold">
                          <a href="tel:23407069199257" aria-label="social icon">
                            <Image
                              src="/assets/icon/customer-satisfaction.svg"
                              alt="customer-satisfaction logo"
                              width={25}
                              height={9}
                              className="w-full"
                            />
                          </a>
                        </span>
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

                            <li className="mb-2">


                              <div className="flex">
                                
                                <div className="w-[30px] my-auto">
                                  <span className="text-[#b7ac7f] lg:text-xl font-bold">
                                    <a href="tel:23407069199257" aria-label="social icon">
                                      <Image
                                        src="/assets/icon/customer-service-24.svg"
                                        alt="instagram logo"
                                        width={25}
                                        height={9}
                                        className="w-full"
                                      />
                                    </a>
                                  </span>
                                </div>
  
                                <div className="ml-2 mt-2">
  
                                  <a href="tel:+23407069199257">234(0)-706-919-9257</a>
                               
                                </div>

                              </div>
                            
                            </li>

                            <li>

                              <div className="flex">

                                <div className="w-[30px] my-auto">
                                  <span className="text-[#b7ac7f] lg:text-xl font-bold">
                                    <a href="tel:23407069199257" aria-label="social icon">
                                      <Image
                                        src="/assets/icon/email-mail.svg"
                                        alt="instagram logo"
                                        width={25}
                                        height={9}
                                        className="w-full"
                                      />
                                    </a>
                                  </span>
                                </div>
                                
                                <div className="ml-2 mt-2">
                                  <a href="mail:betahbatteries@gmail.com">betahbatteries@gmail.com</a>
                                </div>

                              </div>
                              
                            </li>

                          </ul>
                        </div>

                        
                        {/* <div className="m-1">
                          <ul>
                            <li>Phone: <a href="tel:+23407069199257">234(0)-706-919-9257</a></li>
                            <li>Email: <a href="mail:betahbatteries@gmail.com">betahbatteries@gmail.com</a></li>
                          </ul>
                        </div> */}

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
