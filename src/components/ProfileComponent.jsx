import React from 'react'
import Image from 'next/image'
const ProfileComponent = () => {
  return (
    <div className="mt-8 flex flex-col items-center text-center">
        <Image width={150} height={60} src="/profile.png" alt="Profile"/>
        <h2 className="mt-6 text-2xl font-serif">Black Monster</h2>
        <p className="text-lg font-mono text-[#087E8B]">blackmonster@gmail.com</p>
    </div>
  )
}
export default ProfileComponent
