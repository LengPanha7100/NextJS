import React from 'react'
import HomeComponent from '../components/HomeComponent'
import SideBarComponent from '@/components/SideBarComponent'

const page = () => {
  return (
    <div className="flex gap-[100px] bg-[#F5F7F8]">
        <div className="bg-[#FFFFFF] w-80 h-screen">
            <SideBarComponent />
        </div>
        <div>
            <HomeComponent/>
        </div>
    </div>

  )
}

export default page
