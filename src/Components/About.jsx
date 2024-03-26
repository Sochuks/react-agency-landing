import React from 'react'
import aboutImg from './img/about.svg'
import ProjectImg from './img/project-360.svg'

import {FaArrowRight, FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <section className='bg-slate-100'>
        {/* container */}
        <div className='container flex flex-col mx-auto'>
            {/* container 1 */}
            <div className='flex flex-col items-center my-8 md:flex-row-reverse'>
                {/* Image */}
                
                    <img src={ProjectImg} alt="" className='w-full md:w-1/2 sm:ml-4 scale-110 transition ease-in-out duration-500 hover:translate-y-1 hover:scale-150' />
                
                {/* text */}
                <div className='mr-4 w-full text-center sm:w-1/2 md:text-left space-y-2'>
                <h2 className='text-3xl text-primaryColor py-2 font-semibold leading-tight md:text-4xl'>Lorem ipsum dolor sit amet.</h2>
                <p className='leading-relaxed text-slate-500 text-lg md:mr-8 pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Lorem ipsum dolor sit amet. Unde est doloremque obcaecati, dolore quibusdam magnam!</p>
                
                {/* points */}
                <div className='flex flex-col space-y-3'>
                    <div className='flex items-center space-x-4 text-base text-slate-700 '>
                            <span className='bg-bgColor p-1 rounded-full'><FaCheck color='green' /></span>
                            <span>Prioritize what matters </span>
                    </div>

                    <div className='flex items-center space-x-4 text-base text-slate-700 '>
                            <span className='bg-bgColor p-1 rounded-full'><FaCheck color='green' /></span>
                            <span>Manage your task across all apps</span>
                    </div>

                    <div className='flex items-center space-x-4 text-base text-slate-700 '>
                            <span className='bg-bgColor p-1 rounded-full'><FaCheck color='green' /></span>
                            <span>Workplace and taskboards</span>
                    </div>

                    <div className='flex items-center space-x-4 text-base text-slate-700 '>
                            <span className='bg-bgColor p-1 rounded-full'><FaCheck color='green' /></span>
                            <span>Import task from spreadsheet</span>
                    </div>
                </div>
                
                
                {/* buttons */}
                <div className='pt-6'>
                    <button className='bg-gradient-to-r from-green-400 to-green-700 px-4 py-2 rounded-md font-medium text-whiteColor' href="#">
                        Start new Project 
                    </button>
                </div>
                </div>
                
            </div>
            {/* container 2 */}
            <div className='flex flex-col items-center pb-8 md:flex-row'>
                {/* Image */}
                
                    <img src={aboutImg} alt="" className='mb-8 md:scale-110 transition ease-in-out duration-500 hover:translate-y-1 hover:scale-150 md:w-1/2 sm:mb-0' />
                
                {/* text */}
                <div className='mr-4 w-full text-center md:w-1/2 md:text-left space-y-2 pb-10'>
                    <h2 className='text-3xl text-primaryColor py-2 font-semibold leading-tight md:text-4xl'>Lorem ipsum dolor sit amet.</h2>
                    <p className='leading-relaxed text-slate-500 text-lg md:mr-8 pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde est doloremque obcaecati, dolore quibusdam magnam!</p>
                    {/* form */}
                    <div className='flex items-center max-w-xl space-x-2 pt-1.5 pb-3'>
                        <input type="text" className='w-[350px] p-3 h-12 border border-slate-300 rounded-xl' placeholder='Email Address' />
                        <button className='bg-green-500 rounded-xl p-2 hover:bg-primaryColor shadow shadow-slate-950/5 transition-colors ease-in-out duration-150'>
                            <FaArrowRight size={30} color='white' />
                        </button>
                    </div>
                    {/* counters */}
                    <div className='flex items-center max-w-sm pt-6 space-x-10 md:pt-2'>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-semibold text-slate-800'>5000&nbsp;+ </span>
                            <span className='text-slate-600 text-base'>Happy Customers</span>
                        </div>
                        {/* projects */}
                        <div className='flex flex-col'>
                            <span className='text-3xl font-semibold text-slate-800'>15000&nbsp;+ </span>
                            <span className='text-slate-600 text-base'>Completed Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About