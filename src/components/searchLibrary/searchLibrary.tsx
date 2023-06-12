import { HiOutlineSearch } from 'react-icons/hi'

export default function SearchLibrary() {
  return (
    <form action="" className='h-14 w-full px-2'>
        <HiOutlineSearch className='w-6 h-6 absolute translate-x-3 translate-y-4' />
        <input type="text" placeholder='Buscar en tu biblioteca' className='w-full bg-[#222] h-full pl-12 pr-4 font-medium rounded-md' />
    </form>
  )
}
