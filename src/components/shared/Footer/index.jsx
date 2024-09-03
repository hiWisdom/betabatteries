"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Footer({ mobile }) {
  const { imageLoader } = useFunctions();
  return (
    <>
      <section
        className='w-full bg-gray flex-col justify-center items-start border-t inline-flex'
        id='footer'
      >
        <div className='flex flex-col px-5 py-10 md:flex-row md:w-full py-3 border-b border-slate-200 justify-between items-start md:items-center gap-3'>
          <div className='w-[24vh] h-[16vh] bg-white justify-center items-center flex'>
            <Image
              loader={imageLoader}
              alt='logo'
              width={200}
              height={60}
              quality={100}
              className=''
              src='/assets/images/BETA-BATTERY-MAIN-SITE-WEBSITE-COMPANY-LOGO.jpeg'
            />
          </div>

          <div className='flex flex-col md:flex-row w-auto gap-8 justify-center items-start md:items-center'>
            <div className='h-11 py-3 justify-start items-center gap-2 flex'>
              <Link
                href={"/courses"}
                className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug"
              >
                Find a Battery
              </Link>
            </div>
            <div className='h-11 py-3 justify-start items-center gap-2 flex'>
              <Link
                href={"/about"}
                className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug"
              >
                All Battery Available
              </Link>
            </div>
            <div className='h-11 py-3 justify-start items-center gap-2 flex'>
              <Link
                href={"/#our-mandate"}
                className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug"
              >
                Quick battery purchase
              </Link>
            </div>
            <div className='h-11 py-3 justify-start items-center gap-2 flex'>
              <Link
                href={"/courses"}
                className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug"
              >
                FAQ
              </Link>
            </div>
            <div className='h-11 py-3 justify-start items-center gap-2 flex'>
              <Link
                href={"/#faq"}
                className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug"
              >
                Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Footer Top --> */}
        <div className="border-2 border-[black] bg-black w-full">

          <div className="flex flex-wrap border-2 border-[black] lg:py-20 lg:px-10 px-5 py-6 gap-1 lg:justify-between">

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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top lg:w-1/4 "
            >

                <h4 className="text-2xl font-medium text-[#b7ac7f]">
                  Contact Info & Mailing Address
                </h4>

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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                <br/>

                  <ul className="flex items-center gap-5">

                    <li>
                      <a href="https://wa.me/+2347069199257?text=Hello Beta Batteries, Quick enquires" aria-label="social icon">
                      <Image
                        src="/assets/icons/whatsapp.svg"
                        alt="whatsapp logo"
                        width={119.03}
                        height={30}
                        className="w-full"
                      />
                      </a>
                    </li>

                    {/* <li>
                      <a href="#" aria-label="social icon">
                      <Image
                        src="/assets/icons/Facebook.svg"
                        alt="facebook logo"
                        width={119.03}
                        height={30}
                        className="w-full"
                      />
                      </a>
                    </li> */}

                    <li>
                      <a href="#" aria-label="social icon">
                      <Image
                        src="/assets/icons/instagram.svg"
                        alt="instagram logo"
                        width={119.03}
                        height={30}
                        className="w-full"
                      />
                      </a>
                    </li>

                    {/* <li>
                      <a href="#" aria-label="social icon">
                      <Image
                        src="/assets/icons/youtube.svg"
                        alt="youtube logo"
                        width={119.03}
                        height={30}
                        className="w-full"
                      />
                      </a>
                    </li> */}

                  </ul>
                </motion.div>
                <br/>

                <ul>

                <li className="flex">
                  <a
                    href="#"
                    className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                  >
                    www.betabatteries.com.ng 
                  </a>
                </li>

                <li className="flex">
                  <a
                    href="#"
                    className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                  >
                    6635 W. Happy Valley Rd
                    Suite# A104-253
                    Glendale, AZ 85310
                  </a>
                </li>

                
                <li className="flex">
                  <a
                    href="#"
                    className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                  >
                  Phone: 800-350-8101
                  </a>
                </li>
                
                <li className="flex">
                  <a
                    href="#"
                    className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                  >
                    Email: support@betabatteries.com
                  </a>
                </li>


                </ul>

              </motion.div>


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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top lg:w-1/4 "
            >

                <h4 className="text-2xl font-medium text-[#b7ac7f]">
                  Official Distributor
                </h4>

                <ul>

                <li className="flex">
                  <a
                    href="#"
                    className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                  >
                    Beta Batteries is an official distributor for: Lifeline Battery, Sun Xtender, Chairman, Vision Energy Power, Crown Deep Cycle, Optima, Northstar and many more. 
                  </a>
                </li>

                </ul>

              </motion.div>

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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top lg:w-1/4 "
            >

                <h4 className="text-2xl font-medium text-[#b7ac7f]">
                  Quick Links
                </h4>

                <ul>

                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >
                      Home
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >                      
                      Our Battery
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >
                      Our Solar Panel

                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >
                      Shipping Information
                    </a>
                  </li>

                  <li className="flex">
                    <a
                      href="#"
                      className="mb-3 inline-block text-white hover:text-[#b7ac7f]"
                    >
                      Returns and Exchanges 
                    </a>
                  </li>

                </ul>

              </motion.div>

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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >

              <div className="newsletter">

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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h1 className="text-2xl font-medium text-[#b7ac7f]">
                    Newsletter
                  </h1>
                  <p className="mb-4 w-[90%] text-white hover:text-[#b7ac7f]">
                    Subscribe to receive future battery solutions.
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-primary dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>

              </div>

              </motion.div>

          </div>
        
        </div>

        {/* <!-- Footer Top --> */}

        <div className='flex flex-col-reverse px-5 md:flex-row w-full py-10 justify-between items-start md:items-center gap-4 md:gap-12'>
          
          <div className="w-full text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
            @ 2024 Beta Batteries. All rights reserved.
          </div>

          {/* <div className="w-full text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
            Payment methods & Delivery Partners

              <Image
                src="/assets/images/paystack-logo-vector.png"
                alt="paystack logo"
                width={100}
                height={30}
                className="w-full"
              />

          </div> */}

          <div className='flex w-full flex-row justify-end items-center'>
            <div className='flex w-auto flex-row gap-4 justify-center items-center'>
              <div className='py-3 justify-start items-center gap-2 flex'>
                <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                  <a href="">Terms of Service</a>
                </div>
              </div>
              <div className='py-3 justify-start items-center gap-2 flex'>
                <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                  <a href="">Privacy Policy</a>
                </div>
              </div>
              <div className='py-3 justify-start items-center gap-2 flex'>
                <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                  <a href="">Contact us</a> 
                </div>
              </div>
            </div>

            <div className='justify-end items-center gap-4 flex'>
            
              <ul className="flex items-center gap-5">

              <li>
                <a href="https://wa.me/+2347069199257?text=Hello Beta Batteries, Quick enquires" aria-label="social icon"> 
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt="whatsapp logo"
                  width={119.03}
                  height={30}
                  className="w-full"
                />
                </a>
              </li>


              <li>
                <a href="#" aria-label="social icon"> 
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="instagram logo"
                  width={119.03}
                  height={30}
                  className="w-full"
                />
                </a>
              </li>

              </ul>
              
            </div>
            
          </div>

        </div>
      </section>
    </>
  );
}
