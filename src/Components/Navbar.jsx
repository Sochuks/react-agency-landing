import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        {/* logo */}
        <div className='w-full text-3xl'>
            <span className=' text-yellow-400'>Prime</span><span className='font-medium text-green-900'>Time</span>
        </div>

        {/* Navbar Links */}
        <ul className='flex items-center gap-4 hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul> 

        {/* CTA Button */}
        <div>
            <AiOutlineMenu size={20} />
        </div>

        {/* Mobile Menu */}
        <div className='fixed left-0 top-0 w-4/12 h-full border-r border-r-gray-900 bg-yellow-100'>
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