'use client'
import React, {useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { getAllFilterAction, getFilterByIdAction, searchReadBookAction } from '@/action/bookAction';

const BookCategories = ({data}) => {
  const [dataBook , setDataBook] = useState(data || []);
  const [dataSearch , setDataSearch] = useState("")
  const [isOpen,setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Filter By Category");
  const route = useRouter();
  const [categories , setCategories] = useState([]);

  useEffect(() =>{
    async function fetchCategories() {
      try{
        const datafilter = await getAllFilterAction();
        setCategories(datafilter || [])
      }catch(error){
        console.error("Error fetchdata filter : ",error);
      }
    }
    fetchCategories()
 
  },[])


  const handleSelect = async (item) => {
    setSelectedCategory(item.cartoon_genre);
    setIsOpen(false); // Close dropdown after selecting
    console.log("id book:" , item.id);
    const filterid = item.id;
    try{
      const dataBookId = await getFilterByIdAction(filterid)
      setDataBook(dataBookId?.payload || [])
    }catch(error){
      console.error("Error fetch data : ",error);
      setDataBook([])
    }
  };

  const handleSearchBook = async (e) =>{
    const value = e.target.value;
    setDataSearch(value);
    if(!value.trim() || value === null){
      setDataBook(data);
    }
    try{
      const resultSearch = await searchReadBookAction(value);
      console.log("resultSearch" , resultSearch);
      setDataBook(resultSearch.length >0 ? resultSearch : [])
    }catch(error){
      console.error("error can not search",error)
      setDataBook([])
    }
  };
  return (
    <div className="mt-10">
      <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
        <div className="flex items-center border border-none gap-2 rounded-md p-2 w-full max-w-5xl mx-4">
          <Image src="/icons/search-normal.svg" width={25} height={25} alt="Search" />
          <input 
              type="text"
              placeholder="Search by title..."
              className="ml-2 w-full outline-none bg-transparent"
              value={dataSearch}
              onChange={handleSearchBook}
          />
        </div>
      </div>
      <div className="bg-white w-[1180px] h-[735px] mt-10 rounded-t-4xl">
          <div className="flex flex-col gap-5">
            <div className='flex justify-between'>
                <div className="bg-[#F5F7F8] text-[#087E8B] w-56 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
                   <input className='w-48 overflow-x-auto' type='text' value={selectedCategory} readOnly />
                </div>
                <div className='relative'>
                   <div className='flex bg-[#F5F7F8] mr-10 w-72 h-14 mt-7 rounded-2xl gap-8' onClick={() =>setIsOpen(!isOpen)}>
                      <input type="text" 
                        value={selectedCategory}
                        className='ml-5 border-none outline-none bg-transparent'
                        readOnly
                        />
                      <Image src="/icons/arrow-down.svg" width={22} height={22} alt='dropdown'
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    {isOpen && (
                      <div className="absolute mt-1 w-72  bg-white shadow-lg rounded-xl border border-gray-200  z-50">
                        <ul className="h-80 overflow-y-auto scroll-hidden">
                          <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer' 
                          onClick={() =>{
                            setDataBook(data)
                            setIsOpen(false);
                          }
                          }>Filter By Book</li>
                          {categories?.payload?.map((item , index) =>(
                            <li
                              key={index}
                              className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleSelect(item)}>
                              {item.cartoon_genre}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
               
            </div>
            
            <hr className="border-gray-300 w-[1160px] mx-auto" />
          </div>


           <div className='grid grid-cols-2 pl-10 max-h-[620px] overflow-y-auto scroll-hidden gap-28 pt-24'>
            {Array.isArray(dataBook) && dataBook?.length > 0 ? (

            dataBook?.map((item,index) =>(
              <div key={index} className='relative'>
                <div className='bg-[#F5F7F8] w-[470px] h-[205px] rounded-3xl'>
                <div className='absolute mt-[-75px] ml-[17px] '>
                        <Image src={item?.image} width={160} height={20} alt="book" className="h-52 rounded-2xl" />
                </div>
                <div className='flex gap-5'>
                  <div className='bg-[#BFD7EA] w-40 mt-36 ml-4 h-12 hover:bg-[#087E8B] hover:text-white  rounded-3xl'
                  onClick={() => route.push(`/read-full-article/${item.id}`)}
                  >
                    <button className=' color=[#0B3954] font-mono text-sm pl-3 pt-4 cursor-pointer'>READ FULL ARTICLE</button>
                  </div>
                  <div className='  w-64 h-44 font-mono mt-5 whitespace-break-spaces '>
                    <h1 className='truncate w-64 font-bold text-2xl color-[#0B3954] mb-2 '>{item.book_title}</h1>
                    <p className='text-md color-[#0B3954] w-60 line-clamp-5 '>{item.description}</p>
                  </div>
                </div>
                
              </div>
              </div>
      
            ))
            )
            :(
              <div className="ml-[80%] text-center text-3xl mt-44 text-gray-500  w-64">Not Book found</div>
            )

            }
          
           </div>
      </div>
    </div>
  )
}

export default BookCategories
