import React, { useState } from 'react'
import Image from 'next/image'
const SearchComponent = ({onSearch}) => {
  const [search , setSearch] = useState("");

  const handleSearch = (e) =>{
    const value = e.target.value;
    setSearch(value);
    onSearch(value.trim() === "" ? "" : value);
  }
  return (
    <div className="flex items-center border border-none gap-2 rounded-md p-2 w-full max-w-5xl mx-4">
        <Image src="/icons/search-normal.svg" width={25} height={25} alt="Search" />
        <input 
        type="text" 
        placeholder="Search anything you want to" 
        className="ml-2 w-full outline-none bg-transparent"
        value={search}
        onChange={handleSearch}
        />
  </div>
  )
}

export default SearchComponent
