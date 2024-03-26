import React from 'react'
import aboutImg from './img/about.svg'
import { FaRegArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <section className='bg-slate-100'>
        {/* container */}
        <div className='container flex flex-col mx-auto'>
            {/* container 1 */}
            <div className='flex flex-col items-center pt-36 sm:flex-row-reverse sm:px-12'>
                {/* Image */}
                
                    <img src={aboutImg} alt="" className='mb-8 w-full sm:mb-0 sm:ml-4 sm:w-1/2' />
                
                {/* text */}
                <div className='mr-4 w-full text-center sm:w-1/2 sm:text-left space-y-2'>
                    <h1 className='b-4 text-3xl font-bold leading-tight md:text-4xl'>Lorem ipsum dolor sit amet.</h1>
                    <p className='mb-8 leading-relaxed text-slate-700 max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde est doloremque obcaecati, dolore quibusdam magnam! Fugiat aliquam sed eveniet harum.</p>
                </div>
            </div>
            {/* container 2 */}
            <div className='flex flex-col items-center md:flex-row sm:px-12'>
                {/* Image */}
                
                    <img src={aboutImg} alt="" className='mb-8 w-full md:w-1/2 sm:mb-0 sm:ml-4' />
                
                {/* text */}
                <div className='mr-4 w-full text-center md:w-1/2 sm:text-left space-y-2 pb-10'>
                    <h1 className='b-4 text-3xl text-primaryColor py-2 font-semibold leading-tight md:text-4xl'>Lorem ipsum dolor sit amet.</h1>
                    <p className='leading-relaxed text-slate-500 text-lg mr-8 pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde est doloremque obcaecati, dolore quibusdam magnam!</p>
                    {/* form */}
                    <div className='flex items-center max-w-xl space-x-2 pt-1.5 pb-3'>
                        <input type="text" className='w-[350px] p-3 h-12 border border-slate-300 rounded-xl' placeholder='Email Address' />
                        <button className='bg-green-500 rounded-xl p-2 hover:bg-primaryColor shadow shadow-slate-950/5 transition-colors ease-in-out duration-150'>
                            <FaArrowRight size={30} color='white' />
                        </button>
                    </div>
                    {/* counters */}
                    <div className='flex items-center max-w-sm space-x-10'>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-semibold'>5000&nbsp;+ </span>
                            <span className='text-slate-600 text-base'>Happy Customers</span>
                        </div>
                        {/* projects */}
                        <div className='flex flex-col'>
                            <span className='text-3xl font-semibold'>15000&nbsp;+ </span>
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