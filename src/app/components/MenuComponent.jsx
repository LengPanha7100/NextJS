import React from 'react'
import {menus} from "../data/sidebardata";
import Image from 'next/image';

const MenuComponent = () => {
  return (
    <ul>
        {menus.map((item, index) =>(
            <li key={index} className='flex ml-16 mt-4'>
                <Image src={item.icon} width={20} height={22} alt={item.alt}/>    
                <span className='ml-4 text-[#0B3954]'>{item.title}</span>
            </li> 
        ))}
    </ul>
  )
}
export default MenuComponent
