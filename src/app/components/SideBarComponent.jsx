import React from 'react'
import ProfileComponent from './ProfileComponent'
import MenuComponent from './MenuComponent'
import SettingComponent from './SettingComponent'


const SideBarComponent = () => {
  return (
    <div>
      <div>
          <ProfileComponent/>
      </div>
      <div className='mt-7'>
          <MenuComponent/>
      </div>
      <div>
           <SettingComponent/>
      </div>
   
    </div>
  )
}
export default SideBarComponent
