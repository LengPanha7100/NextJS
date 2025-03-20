import React from 'react'
import Image from 'next/image'
const SettingComponent = () => {
  return (
    <div className='bg-gray-100 py-4 mt-10 mx-5 rounded-2xl'>
        <div className='flex ml-10'>
            <Image src="/icons/setting.svg" width={22} height={22} alt='setting'/>
            <span className='ml-4'>Settings</span>
        </div>
    </div>

  )
}

export default SettingComponent
