import React from 'react'
import react_icon from '../assets/react.svg'
import { IoClose, IoCheckmark } from "react-icons/io5";

const Pricing = () => {
  return (
    <section>
            {/* heading */}
            <div className='page-header'>
                <h2 className='text-4xl font-semibold text-primaryColor py-2'>Select The Plan for 
                    <span className='text-yellow-400'> Your Needs</span>
                </h2>
                <p>Choose the Perfect Plan to Unlock Customized Features</p>
            </div>

            {/* Toggle Price */}
            <div>
                    
            </div>
            

        {/* container */}
        <div className="container mx-auto grid md:grid-cols-3 p-10 gap-16 md:py-16">
            {/* First Price */}
            <div className='flex flex-col h-full p-6 bg-slate-100 rounded-2xl border border-slate-200 shadow shadow-slate-950/5 hover:scale-x-105 duration-300'>
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-semibold py-8'>Economy Suit</h3>
                {/* Prices */}
                <div>
                    <p className='inline-flex items-baseline font-bold'><span className='text-3xl'>$</span>
                    <span className='text-4xl'>150</span>
                    <span className='font-medium'>/mo</span>
                    </p>
                </div>
                {/* Text and Button */}
                <div>
                    <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
                    <button className='w-full bg-green-500 rounded-lg my-6 px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-green-950/10 hover:bg-green-600 transition-colors duration-150 text-white' href='#'>
                        Get Started</button>
                </div>
        
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <p className='text-slate-900 font-semibold'>Includes:</p>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                        <IoCheckmark color='green' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <IoClose color='red' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

            {/* Second Price */}
            <div className='relative flex flex-col h-full p-6 bg-yellow-400/85 rounded-2xl border border-slate-200 shadow shadow-slate-950/5 hover:scale-x-105 duration-300'>
                {/* popularity tag */}
                <div className='absolute top-0 right-0 mr-6 -mt-3'>
                    <div className='items-center text-xs font-semibold py-1.5 px-3 bg-green-400 text-white rounded-full shadow-sm shadow-slate-950/5'>
                        Most Popular
                    </div>
                </div>
                
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-semibold py-8'>Standard Suite</h3>
                {/* Prices */}
                <div>
                    <p className='inline-flex items-baseline font-bold'><span className='text-3xl'>$</span>
                    <span className='text-4xl'>150</span>
                    <span className='font-medium'>/mo</span>
                    </p>
                </div>
                {/* Text and Button */}
                <div>
                    <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
                    <button className='w-full bg-green-500 rounded-lg my-6 px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-green-950/10 hover:bg-green-600 transition-colors duration-150 text-white' href='#'>
                        Get Started</button>
                </div>
        
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <p className='text-slate-900 font-semibold'>Includes:</p>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                        <IoCheckmark color='green' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <IoClose color='red' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

            {/* Third Price */}
            <div className='flex flex-col h-full p-6 bg-slate-100 rounded-2xl border border-slate-200 shadow shadow-slate-950/5 hover:scale-x-105 duration-300'>
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-semibold py-8'>Economy Suit</h3>
                {/* Prices */}
                <div>
                    <p className='inline-flex items-baseline font-bold'><span className='text-3xl'>$</span>
                    <span className='text-4xl'>150</span>
                    <span className='font-medium'>/mo</span>
                    </p>
                </div>
                {/* Text and Button */}
                <div>
                    <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odio.</p>
                    <button className='w-full bg-green-500 rounded-lg my-6 px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-green-950/10 hover:bg-green-600 transition-colors duration-150 text-white' href='#'>
                        Get Started</button>
                </div>
        
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <p className='text-slate-900 font-semibold'>Includes:</p>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                        <IoCheckmark color='green' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <IoClose color='red' />
                        </span>
                        <p className='text-sm'>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

        </div>
    </section>
  )
}

export default Pricing