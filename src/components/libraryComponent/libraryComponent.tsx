// import React from 'react'
import LinkBoxNavbar from '../linkBoxNavbar/linkBoxNavbar'
import { IoLibrary, IoLibraryOutline } from 'react-icons/io5'
import SearchLibrary from '../searchLibrary/searchLibrary'

export default function LibraryComponent() {
  return (
    <div className='w-full p-2 h-full rounded-lg flex-col flex justify-start items-start bg-[#121212] gap-2'>
        <LinkBoxNavbar 
            id={3} 
            ruta='/library' 
            name='Biblioteca' 
            iconActived=<IoLibrary/> 
            iconDisabled=<IoLibraryOutline/>
        />
        <SearchLibrary/>
    </div>
  )
}
