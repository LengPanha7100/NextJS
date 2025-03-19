'use client'
import React from 'react'
import { menus } from "../data/sidebardata";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MenuComponent = () => {
  const pathName = usePathname();
  
  return (
    <ul>
      {menus.map((item, index) => (
        <li key={index}>
          {/* Ensure item.path exists before rendering the link */}
          {item.path ? (
            <Link href={item.path} className="block">
              <div
                className={`cursor-pointer mx-5 rounded-2xl h-12 flex items-center px-4 transition-all duration-200 ${
                  pathName === item.path ? "bg-gray-200" : "hover:bg-[#F5F7F8]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image src={item.icon} width={20} height={22} alt={item.alt} />
                  <span className="text-[#0B3954]">{item.title}</span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-not-allowed text-gray-400 mx-5 h-12 flex items-center px-4">
              <span>Invalid Link</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuComponent;

