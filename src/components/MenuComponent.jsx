'use client'
import React from 'react'
import { menus } from "../data/sidebardata";
import Image from 'next/image';
import { useRouter , usePathname } from "next/navigation";
const MenuComponent = () => {
  const route = useRouter();
  const pathName = usePathname();

  return (
    <ul>
      {menus.map((item, index) => (
        <li key={index} className='block'>
              <div
                className={`cursor-pointer mx-5 rounded-2xl h-12 flex items-center px-4 transition-all duration-200 "
                  ${
                  pathName === item.path ? "bg-gray-200" : "hover:bg-[#F5F7F8]"
                }`}
                onClick={() => route.push(item.path)}
              >
                <div className="flex items-center gap-3">
                  <Image src={item.icon} width={20} height={22} alt={item.alt} />
                  <span className="text-[#0B3954]">{item.title}</span>
                </div>
              </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuComponent;