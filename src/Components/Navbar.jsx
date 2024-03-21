import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        {/* logo */}
        <div className='w-full text-3xl'>
            <span className=' text-yellow-400'>Prime</span><span className='font-medium text-green-900'>Time</span>
        </div>

        {/* Navbar Links */}
        <ul className='flex items-center gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul> 
    </nav>
  )
}

export default Navbar