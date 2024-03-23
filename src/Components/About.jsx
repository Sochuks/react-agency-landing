import React from 'react'
import aboutImg from './img/about.svg'

const About = () => {
  return (
    <section>
        {/* container */}
        <div className='flex flex-col mx-auto max-w-[1240px]'>
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
            <div className='flex flex-col items-center pb-36 sm:flex-row sm:px-12'>
                {/* Image */}
                
                    <img src={aboutImg} alt="" className='mb-8 w-full sm:mb-0 sm:ml-4 sm:w-1/2' />
                
                {/* text */}
                <div className='mr-4 w-full text-center sm:w-1/2 sm:text-left space-y-2'>
                    <h1 className='b-4 text-3xl font-bold leading-tight md:text-4xl'>Lorem ipsum dolor sit amet.</h1>
                    <p className='mb-8 leading-relaxed text-slate-700 max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde est doloremque obcaecati, dolore quibusdam magnam!</p>
                    {/* form */}
                    <div className='flex items-center max-w-xl space-x-2'>
                        <input type="text" className='w-[350px] h-12 border border-gray-400 rounded-md' />
                        <button className='bg-green-800 rounded-md'>S</button>
                    </div>
                    {/* counters */}
                    <div className='flex items-center max-w-sm space-x-10'>
                        <div className='flex flex-col'>
                            <span>5000&nbsp;+ </span>
                            <span>Happy Customers</span>
                        </div>
                        {/* projects */}
                        <div className='flex flex-col'>
                            <span>15000&nbsp;+ </span>
                            <span>Completed Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About