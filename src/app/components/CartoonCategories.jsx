import React from 'react'
import SearchComponent from './SearchComponent'
import Image from 'next/image'
import {oldschools} from '../data/oldschooldata'

const CartoonCategories = () => {
  return (
    <div className="mt-10">
      <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
        <SearchComponent/>
      </div>
      <div className="bg-white w-[1180px] h-[735px] mt-10 rounded-t-4xl">
          <div className="flex flex-col gap-5">
            <div className='flex justify-between'>
                <div className="bg-[#F5F7F8] text-[#087E8B] w-62 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
                Old School Cartoon
                </div>
                <div className='flex bg-[#F5F7F8] mr-10 w-72 h-14 mt-7 rounded-2xl gap-8'>
                  <input type="text" placeholder='Filter By Category' className='ml-5 border-none outline-none bg-transparent' />
                  <Image src="/icons/arrow-down.svg" width={22} height={22} alt='dropdown' />
                </div>
                
            </div>
            
            <hr className="border-gray-300 w-[1160px] mx-auto" />
          </div>
          <div className='grid grid-cols-3'>
            {oldschools.map((item,index) =>(
              <div key={index} className='  w-[314px] h-[420px] ml-10 mt-10'>
                <div className=' flex justify-center'>
                     <Image src={item.image} width={260} height={60} alt='cartoon' className=''/>
                </div>
                <div className='ml-10'>
                  <h1 className='font-mono text-xl font-bold mt-5 text-[#0B3954] '>{item.title}</h1>
                  
                  <div className='flex mt-2 gap-5 '>
                    <div className='flex gap-2'>
                        <Image src="/icons/eye.svg" width={22} height={22} alt='eye'/>
                        <p className='text-[#087E8B]'>{item.time}</p>
                    </div>
                    <div className='text-[#087E8B]'>|</div>
                    <div className='text-[#087E8B]'>{item.year}</div>
                  </div>
                </div>
             
             
              </div> 
            ))}
           
          </div>
      </div>
    </div>    
  )
}

export default CartoonCategories
