import React from 'react'
import Header from '../components/header'
import SideBar from '../components/sidebar'


const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className='flex flex-row gap-x-2'>
            <SideBar/>
            <div className='w-full'>
               {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout