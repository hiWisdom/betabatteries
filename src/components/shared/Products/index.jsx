"use client";

import React from "react";
import ProductList from "./productList";
import Link from "next/link";
import { productData } from "@/data";

export default function Products() {
  return (
    <section
      className='pb-[80px]  w-full  pt-[2rem] box-border justify-center items-center'
      id='courses'
    >
      <div className='flex flex-col justify-start  items-center gap-4'>


        <div className='text-center text-slate-900 text-[28px]  md:text-[26px] font-bold'>
        Beta Batteries - Nationwide Battery Distribution
        </div>


        <div className='w-full flex justify-between text-center text-slate-900 text-lg font-normal border-2 border-[#b7ac7f] p-3 bg-[#b7ac7f]'>

          <div className="text-[white]">
              <a href="#">Featured Products</a>
          </div>

          <div className="text-[white]">
            <a href="#">See more</a>
          </div>

        </div>

        <div className=' w-full grid  place-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[25px] mt-6'>

          
          {productData.slice(0, 4).map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>

        {/* <Link href={"/products"}>
          <button className='px-5 py-2.5 mt-8 rounded-[10px] hover:bg-[#b7ac7f] border-2 hover:border-[#b7ac7f] justify-center items-center flex bg-black transition-all duration-300 group'>
            <div className='group-hover:text-[white] text-xl font-medium leading-normal tracking-wide text-white'>
              View Battery Shop
            </div>
          </button>
        </Link> */}


      </div>
    </section>
  );
}
