import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { IoSearchOutline, IoSearch } from 'react-icons/io5';
import LinkBoxNavbar from '../../components/linkBoxNavbar/linkBoxNavbar';
import LibraryComponent from '../../components/libraryComponent/libraryComponent';
const urls = [
    {
        id: 1,
        url: "/",
        name: "Inicio",
        iconActived: <AiFillHome className="w-full h-full"/>,
        iconDisabled: <AiOutlineHome className="w-full h-full"/>
    },
    {
        id: 2,
        url: "/Search",
        name: "Busqueda",
        iconActived: <IoSearch className="w-full h-full"/>,
        iconDisabled: <IoSearchOutline className="w-full h-full"/>
    }
]

export default function Navbar() {
  return (
    <div className='w-full flex justify-start items-start flex-col h-full gap-4'>
        <div className='w-full p-2 rounded-lg h-auto flex justify-start items-start flex-col bg-[#121212]'>
            {
                urls.map((url) => (
                    <LinkBoxNavbar 
                        id={url.id} 
                        ruta={url.url} 
                        name={url.name} 
                        iconActived={url.iconActived} 
                        iconDisabled={url.iconDisabled}
                    />
                ))
            }
        </div>
        <LibraryComponent/>
    </div>
  )
}
