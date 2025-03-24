'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const ReadFullBook = ({dataBook}) => {
  console.log(dataBook)
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
        onClick={() => route.push("/book-categories")}
        >Book Categories</h1>
        <Image src={"/icons/arrow-right.svg"} width={22} height={22} alt='arrow-right'/>
        <Image src={"/icons/book12.png"} width={22} height={22} alt='book12'/>
        <h1 className='font-bold text-[#C81D25]'>{dataBook?.book_title}</h1>
    </div>
  
    <div className='bg-white w-[1450px] h-[700px] ml-32 mt-[79px] rounded-t-3xl'>
    <div className='flex justify-end mb-60'>
        <Image className='absolute mt-[-119px] mr-[75px] rounded-2xl w-[281px] h-[350px]' src={dataBook.image} alt='avatar' width={144} height={14}/>
    </div>
    <div className='ml-10'>
       <h1 className='font-bold text-[#0B3954] text-2xl mb-5'>{dataBook.book_title}</h1>
      <h1 className='text-xl flex gap-2'>by<span className='font-bold text-[#087E8B] text-xl mb-5'>{dataBook.book_author}</span></h1>
      <p className=' w-[1380px] font-mono h-[350px] overflow-y-auto scroll-hidden '>{dataBook.description}</p>
    </div>
     
    </div>
    
  </div>
  )
}

export default ReadFullBook
