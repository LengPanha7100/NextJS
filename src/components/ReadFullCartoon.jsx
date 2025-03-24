'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import moment from "moment";
const ReadFullCartoon = ({dataCartoon}) => {
    console.log("Hi1" , dataCartoon);
    const route = useRouter();
  
  return (
      <div className='bg-[#F5F7F8] w-full h-screen'>
        <div className='flex gap-4 ml-32 pt-20'>
            <Image src={"/icons/home-2.png"} width={22} height={22} alt='home'/>
            <h1 className='font-bold text-[#0B3954] cursor-pointer'
            onClick={() => route.push("/home")}
            >Home</h1>
            <Image src={"/icons/arrow-right.svg"} width={22} height={22} alt='arrow-right'/>
            <Image src={"/icons/book21.png"} width={22} height={22} alt='book'/>
            <h1 className='font-bold text-[#0B3954] cursor-pointer'
            onClick={() => route.push("/cartoon-categories")}
            >Old-School Cartoons</h1>
            <Image src={"/icons/arrow-right.svg"} width={22} height={22} alt='arrow-right'/>
            <Image src={"/icons/book12.png"} width={22} height={22} alt='book12'/>
            <h1 className='font-bold text-[#C81D25]'>{dataCartoon.ct_title}</h1>
        </div>
        <div className='bg-white w-[1450px] h-[700px] ml-32 mt-[79px] rounded-t-3xl  '>
        <div className='flex justify-between'>
            <div className="ml-10 mt-36 mb-5"> 
                <h1 className='font-bold text-[#0B3954] text-2xl mb-5'>{dataCartoon.ct_title}</h1>
                <h1 className='text-xl flex gap-2 mb-5'>by<span className='font-bold text-[#087E8B] text-xl'>{dataCartoon.ct_creator}</span></h1>  
                <div className="flex gap-3">
                    <Image src="/icons/eye.svg" width={30} height={25} alt="eye" />
                    <h1 className='font-bold text-[#087E8B] text-lg'>{dataCartoon.view_count}</h1>
                    <h1 className='font-bold text-[#087E8B] text-lg'>|</h1>
                    <h1 className='font-bold text-[#087E8B] text-lg'>{moment(dataCartoon.created_at).format("YYYY")}</h1>
                </div>
            </div>
            <div className="absolute ml-[65%]  mt-[-119px] ">
                 <Image className='rounded-2xl w-[281px] h-[350px]' src={dataCartoon.image} alt='avatar' width={144} height={14} />
            </div>
            
        </div>
        <div className='ml-10'>
          <p className=' w-[1380px] font-mono h-[380px] overflow-y-auto scroll-hidden '>{dataCartoon.ct_description}</p>
        </div>
         
        </div>
        
    </div>
  )
}

export default ReadFullCartoon
