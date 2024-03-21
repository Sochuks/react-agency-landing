import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    // navbar state
    const [nav, setNav] = useState(true);

    const toggleNav = () =>{
        setNav(!nav);
    }

  return (
    <nav className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        {/* logo */}
        <div className='w-full text-3xl'>
            <span className=' text-yellow-400'>Prime</span><span className='font-medium text-green-900'>Time</span>
        </div>

        {/* Navbar Links */}
        <ul className='hidden items-center gap-4 md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul> 

        {/* Menu Button */}
        <div className='flex md:hidden' onClick={toggleNav}>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            
        </div>

        {/* Mobile Menu */}
        <div className={!nav ? `fixed left-0 top-0 w-4/12 h-full border-r border-r-gray-900 bg-yellow-100 ease-in-out duration-500` : `fixed left-[-150px]`}>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Services</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar