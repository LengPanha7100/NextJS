'use client'
import React from 'react'
import {cardtypes} from "../app/data/cardtypesdata"
import Image from 'next/image';
import SearchComponent from './SearchComponent';
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const route = useRouter();
    return (
      <div className="mt-10">
          <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
            <SearchComponent/>
          </div>
          <div className="bg-white w-[1160px] h-[735px] mt-10 rounded-t-4xl">
            {/* <HomeComponent/> */}
            <div className='absolute'>
                  <div className="flex flex-col gap-5">
                    <div className="bg-[#F5F7F8] text-[#087E8B] w-48 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
                      Homepage
                    </div>
                    <hr className="border-gray-300 w-[1160px] mx-auto" />
                  </div>

                  <div className='flex justify-center items-center gap-32 mt-28'>
                    {cardtypes.map((item, index) => (
                      <div key={index} 
                      onClick={() => route.push(item.path)}
                      className='relative cursor-pointer'>
                        {/* Tag - Positioned above the image */}
                        <div className='bg-white absolute top-3 left-3 w-24 h-8 flex rounded-4xl items-center justify-center gap-2 shadow-md z-10'>
                          <Image src="/icons/tag.svg" width={20} height={20} alt="tag" />
                          <span className='text-[#087E8B] font-bold text-sm'>{item.type}</span>
                        </div>

                        {/* Image and Hover Effect */}
                        <div className="relative group">
                          <Image
                            src={item.image}
                            width={280}
                            height={385}
                            alt="book"
                            className="rounded-4xl transition-all duration-300 ease-in-out cursor-pointer object-cover"
                          />
                          
                          {/* Hover overlay (visible only on hover) */}
                          <div className="absolute inset-0 bg-[#00000063] cursor-pointer rounded-4xl 00 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                            <span className="text-white text-5xl text-center">{item.title}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

              </div>
          </div>
      </div>
    );
  };

export default HomeComponent


