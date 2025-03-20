import React from 'react'
import Image from 'next/image'
const SearchComponent = () => {
  return (
    <div className="flex items-center border border-none gap-2 rounded-md p-2 w-full max-w-5xl mx-4">
        <Image src="/icons/search-normal.svg" width={25} height={25} alt="Search" />
        <input 
        type="text" 
        placeholder="Search anything you want to" 
        className="ml-2 w-full outline-none bg-transparent"
        />
  </div>
  )
}

export default SearchComponent
