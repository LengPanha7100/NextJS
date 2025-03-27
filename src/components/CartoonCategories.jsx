'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { getAllFilterCartoonAction, getFilterCartoonByIdAction, searchCartoonAction } from '@/action/cartoonAction'

const CartoonCategories = ({ dataCartoon }) => {
    const [data, setData] = useState(dataCartoon || []);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const [isOpen,setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCartoon] = useState("Filter By Category");
    const [oldData , setOldData] = useState("Old School Cartoon")
      const [cartoon , setCartton] = useState([]);

    useEffect(()=>{
        async function filterCartoon() {
            try{
                const filterCartoon = await getAllFilterCartoonAction();
                setCartton(filterCartoon);
                console.log(filterCartoon);
            }catch (error){
                console.log("Error fetch data cartoon : ", error);
            }
        }
        filterCartoon();
    },[])

    const handleSelect = async (item) => {
        setSelectedCartoon(item.cartoon_genre);
        setIsOpen(false); // Close dropdown after selecting
        const filterid = item.id;
        try{
            const dataBookId = await getFilterCartoonByIdAction(filterid)
            console.log(dataBookId);
            setData(dataBookId?.payload || [])
        }catch(error){
            console.error("Error fetch data : ",error);
            setData([])
        }
      };

    const handleSearch = async (e) => {
        const value = e.target.value;
        setSearch(value);

        if (!value.trim() || value === null) {
            setData(dataCartoon);
            return;
        }

        try {
            const resultSearch = await searchCartoonAction(value);
            console.log("Search results:", resultSearch);
            setData(resultSearch.length > 0 ? resultSearch : []);
        } catch (error) {
            console.error("Error during search:", error);
            setData([]);
        }
    };

    return (
        <div className="mt-10">
            {/* 🔍 Search Input */}
            <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
                <div className="flex items-center border border-none gap-2 rounded-md p-2 w-full max-w-5xl mx-4">
                    <Image src="/icons/search-normal.svg" width={25} height={25} alt="Search" />
                    <input 
                        type="text"
                        placeholder="Search by title..."
                        className="ml-2 w-full outline-none bg-transparent"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* 🔥 Cartoon List */}
            <div className="bg-white w-[1180px] h-[735px] mt-10 rounded-t-4xl">
                <div className="flex flex-col gap-5">
                    <div className='flex justify-between'>
                        <div className="bg-[#F5F7F8] text-[#087E8B] w-62 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
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
                                            setData(dataCartoon)
                                            setIsOpen(false);
                                        }}>Filter By Categories
                                    </li>
                                    {cartoon?.payload?.map((item , index) =>(
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

                {/* 🖼️ Display Cartoons */}
                <div className='grid grid-cols-3 max-h-[625px] overflow-y-auto scroll-hidden'>
                    {Array.isArray(data) && data?.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className='w-[314px] h-[420px] ml-10 mt-10 cursor-pointer'
                                onClick={() => router.push(`/view-cartoon/${item.id}`)}
                            >
                                <div className='flex justify-center max-w-[360px] max-h-[360px]'>
                                    <Image src={item.image} width={260} height={60} alt='cartoon' />
                                </div>
                                <div className='ml-10'>
                                    <h1 className='font-mono text-xl font-bold mt-5 text-[#0B3954] line-clamp-1 '>{item.ct_title}</h1>
                                    <div className='flex mt-2 gap-5 '>
                                        <div className='flex gap-2'>
                                            <Image src="/icons/eye.svg" width={22} height={22} alt='eye' />
                                            <p className='text-[#087E8B]'>{item.view_count}</p>
                                        </div>
                                        <div className='text-[#087E8B]'>|</div>
                                        <div className='text-[#087E8B]'>{moment(item.published_year).format("YYYY")}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="ml-[110%] text-center text-3xl mt-52 text-gray-500  w-64">No cartoons found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartoonCategories;
