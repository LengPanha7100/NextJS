import React from 'react'
import Image from 'next/image'
const ProfileComponent = () => {
  return (
    <div className="mt-16 flex flex-col items-center text-center">
        <Image width={160} height={70} src="/profile.png" alt="Profile" />
        <h2 className="mt-6 text-2xl font-serif">Black Monster</h2>
        <p className="text-lg font-mono text-[#087E8B]">blackmonster@gmail.com</p>
    </div>
  )
}

export default ProfileComponent
