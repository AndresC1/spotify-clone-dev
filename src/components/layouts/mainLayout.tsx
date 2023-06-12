import React from 'react'
import Navbar from '../../containers/Navbar/navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div className='w-full min-h-[100vh] h-full flex justify-start items-stretch'>
        <div className='min-w-[20rem] max-w-[30rem] w-full p-4'>
            <Navbar/>
        </div>
        <div className='w-full py-4 pr-4'>
            <Outlet/>
        </div>
    </div>
  )
}
