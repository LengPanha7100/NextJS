'use client'
import React from 'react'
import SearchComponent from './SearchComponent'
import {cardBooks} from '../data/cardbookdata'
import Image from 'next/image'
import { useRouter } from "next/navigation";

const BookCategories = ({bookId}) => {
  const route = useRouter();
  return (
    <div className="mt-10">
      <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
        <SearchComponent/>
      </div>
      <div className="bg-white w-[1180px] h-[735px] mt-10 rounded-t-4xl">
          <div className="flex flex-col gap-5">
            <div className='flex justify-between'>
                <div className="bg-[#F5F7F8] text-[#087E8B] w-48 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
                    All Books
                </div>
                <div className='flex bg-[#F5F7F8] mr-10 w-72 h-14 mt-7 rounded-2xl gap-8'>
                  <input type="text" placeholder='Filter By Category' className='ml-5 border-none outline-none bg-transparent' />
                  <Image src="/icons/arrow-down.svg" width={22} height={22} alt='dropdown' />
                </div>
                
            </div>
            
            <hr className="border-gray-300 w-[1160px] mx-auto" />
          </div>


           <div className='grid grid-cols-2 pl-10 gap-28 pt-24'>
            {cardBooks.map((item,index) =>(
                  
              <div key={index}>
                <div className='absolute mt-[-75px] ml-[17px] '>
                    <Image src={item?.image} width={160} height={20} alt="book" className="h-52 rounded-2xl" />
                </div>
              
                <div className='bg-[#F5F7F8] w-[470px] h-[205px] rounded-3xl'>
                <div className='flex gap-5'>
                  <div className='bg-[#BFD7EA] w-40 mt-36 ml-4 h-12 hover:bg-[#087E8B] hover:text-white  rounded-3xl'
                  onClick={() => route.push(`/read-full-article/${bookId}`)}
                  >
                    <button className=' color=[#0B3954] font-mono text-sm pl-3 pt-4 cursor-pointer'>{item.text}</button>
                  </div>
                  <div className='  w-64 h-44 font-mono mt-5 whitespace-break-spaces '>
                    <h1 className='truncate w-64 font-bold text-2xl color-[#0B3954] mb-2 '>{item.title}</h1>
                    <p className='text-md color-[#0B3954] w-60 '>{item.description}</p>
                  </div>
                </div>
                
              </div>
              </div>
      
            ))}
          
           </div>
      </div>
    </div>
  )
}

export default BookCategories
