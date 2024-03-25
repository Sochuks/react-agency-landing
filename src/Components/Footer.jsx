import React from 'react'
import {FaFacebookSquare,
        FaGithubSquare,
        FaLinkedinIn,
        FaInstagramSquare,
        FaTwitterSquare,} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-10 mt-20 bg-gray-100'>
        {/* container */}
        <div className="container grid lg:grid-cols-3 gap-8 text-gray-300 mx-auto px-4 py-4 mb-0">
            {/* Column one */}
            <div className='p-4'>
                {/* Text */}
                <div>
                <span className='text-3xl text-yellow-400'>Prime</span><span className='font-medium text-green-900 text-3xl'>Time</span>
                <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil quasi beatae rerum, quam dolorem?</p>
            </div>
            {/* socials */}
            <div>
                <ul className='flex justify-between my-6 md:75% text-green-500'>
                    <li className='hover:text-primaryColor'><FaFacebookSquare  size={30} /></li>
                    <li className='hover:text-primaryColor'><FaInstagramSquare size={30} /></li>
                    <li className='hover:text-primaryColor'><FaTwitterSquare size={30} /></li>
                    <li className='hover:text-primaryColor'><FaLinkedinIn size={30} /></li>
                    <li className='hover:text-primaryColor'><FaGithubSquare size={30} /></li>


                </ul>
                
            </div>
        </div>
        {/* Column-two */}
        <div className='flex justify-between mt-4 p-2 lg:col-span-2 text-gray-600'>
            <div>
                <h3 className='font-medium text-xl text-primaryColor py-2'>Solutions</h3>
                <ul className='footer_links'>
                    <li className='py-2 text-sm'>Agile Methods</li>
                    <li className='py-2 text-sm'>SCRUM Technique</li>
                    <li className='py-2 text-sm'>Waterfall Model</li>
                </ul>
            </div>
            <div>
                <h3 className='font-medium text-xl text-primaryColor py-2'>Company</h3>
                <ul className='footer_links'>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Services</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            {/* third Link column */}
            <div>
                <h3 className='font-medium text-xl text-primaryColor py-2'>Support</h3>
                <ul className='footer_links'>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                </ul>
            </div>

        </div>
            
        </div>

        <div className='text-center pb-10 text-base text-gray-400 -mt-6'>
            <p>PrimeTime &#169; 2024 by Sochuks&#129514;</p>
        </div>

    </footer>
  )
}

export default Footer