import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    // navbar state
    const [nav, setNav] = useState(true);

    const toggleNav = () =>{
        setNav(!nav);
    }

  return (
    <section className='md:mt-4'>
         <nav className='flex justify-around items-center max-w-[1240px] mx-auto px-8 py-5'>
        {/* logo */}
        <div className='w-full text-3xl font-extrabold drop-shadow-sm'>
            <span className=' text-yellow-400'>Prime</span><span className='text-green-900'>Time</span>
        </div>

        {/* Navbar Links */}
        <ul className='hidden items-center gap-8 uppercase md:flex'>
            <li className='text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Home</li>
            <li className='text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>About</li>
            <li className='text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Services</li>
            <li className='text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Contact</li>
        </ul> 

        {/* Menu Button */}
        <div className='block md:hidden' onClick={toggleNav}>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            
        </div>

        {/* Mobile Menu */}
        <div className={!nav ? `fixed left-0 top-0 w-4/12 h-full border-r border-r-gray-900 bg-yellow-300 ease-in-out duration-500 md:hidden` : `fixed left-[-150px]`}>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600
                text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Home</li>
                <li className='p-4 border-b border-gray-600
                text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>About</li>
                <li className='p-4 border-b border-gray-600
                text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Services</li>
                <li className='p-4 border-b border-gray-600
                text-sm tracking-wide font-medium cursor-pointer text-green-500 hover:text-primaryColor transition-all ease-in-out duration-300'>Contact</li>
            </ul>
        </div>
        
    </nav>
    </section>
   
  )
}

export default Navbar