import React from 'react'
import {cardtypes} from "../data/cardtypesdata"
import Image from 'next/image';

const BodyComponent = () => {
    return (
    <div className='absolute'>
        <div className="flex flex-col gap-5">
          <div className="bg-[#F5F7F8] text-[#087E8B] w-48 text-center p-4 rounded-lg mt-7 ml-10 text-lg font-semibold">
            Homepage
          </div>
          <hr className="border-gray-300 w-[1160px] mx-auto" />
        </div>

        <div className='flex justify-center items-center gap-56 mt-36'>
          {cardtypes.map((item,index) =>(
            <div key={index}>           
              <Image src={item.image} width={240} height={10} alt='book' className='rounded-4xl'/>
            </div>
          ))}

        </div>
    </div>
    );
  };

export default BodyComponent
