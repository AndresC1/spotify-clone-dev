import LinkBoxNavbarProps from '../../types/LinkBoxNavbarProps'

export default function LinkBoxNavbar({ruta, name, iconDisabled}: LinkBoxNavbarProps) {
  return (
    <a className='w-full h-14 hover:text-white transition-all rounded-md flex justify-start items-center px-4 gap-4 font-semibold text-lg' href={ruta}>
        <span className='w-6 h-auto'>
            {iconDisabled}
        </span>
        {name}
    </a>
  )
}
