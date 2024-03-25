import React from 'react'
import {FaFacebookSquare,
        FaGithubSquare,
        FaLinkedinIn,
        FaInstagramSquare,
        FaTwitterSquare,} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full py-12'>
        {/* container */}
        <div className="container grid lg:grid-cols-3 gap-8 text-gray-300 max-w-[1240px] mx-auto px-4 py-4">
            {/* Column one */}
            <div>
                {/* Text */}
                <div className=''>
                <span className='text-3xl text-yellow-400'>Prime</span><span className='font-medium text-green-900 text-3xl'>Time</span>
                <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil quasi beatae rerum, quam dolorem?</p>
            </div>
            {/* socials */}
            <div className='flex justify-between my-6 md:75%'>
                <FaFacebookSquare  size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaLinkedinIn size={30} />
                <FaGithubSquare size={30} />
            </div>
        </div>
        {/* Column-two */}
        <div className='flex justify-between mt-4 lg:col-span-2'>
            <div>
                <h3 className='text-medium text-xl'>Solutions</h3>
                <ul>
                    <li className='py-2 text-sm'>Agile Methods</li>
                    <li className='py-2 text-sm'>SCRUM Technique</li>
                    <li className='py-2 text-sm'>Waterfall Model</li>
                </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Services</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            {/* third Link column */}
            <div>
                <h3>Support</h3>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                </ul>
            </div>

        </div>
            
        </div>

    </footer>
  )
}

export default Footer