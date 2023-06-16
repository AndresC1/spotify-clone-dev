import React from 'react'
import Navbar from '../../containers/Navbar/navbar'
import { Outlet } from 'react-router'
import MusicPlayer from '../../containers/MusicPlayer/musicPlayer'

export default function MainLayout() {
  return (
    <div className='flex justify-start items-start flex-col h-[100vh] overflow-auto'>
      <div className='col-span-12 w-full h-full flex justify-start items-stretch'>
        <div className='min-w-[20rem] max-w-[30rem] w-full p-4'>
            <Navbar/>
        </div>
        <div className='w-full py-4 pr-4'>
          <section className='bg-[#121212] p-4 rounded-lg h-full'>
            <Outlet/>
          </section>
        </div>
      </div>
      <MusicPlayer/>
    </div>
  )
}
