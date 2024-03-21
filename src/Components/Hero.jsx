import React from 'react'
import HeroImg from './img/hero_img.svg'

const Hero = () => {
  return (
    // Hero
    <section className='py-6'>
        {/* container */}
        <div className='flex flex-col-reverse items-center text-center px-6 max-w-[1240px] mx-auto lg:py-10 md:flex-row'>
            {/* Text */}
            <div className='flex flex-col mb-10 space-y-2 md:mt-10 md:w-1/2 md:text-left'>
                <p className='font-bold uppercase text-md md:-mb-2'>We take it step-by-step</p>
                <h1 className='font-bold text-3xl md:text-6xl sm:text-5xl'>Manage Your Projects</h1>
                <p className='max-w-xl text-xl text-gray-500 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quaerat minima ad dolor odit, ea sint? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='mx-auto bg-[#00df9a] my-6 py-3 text-base rounded-md w-[200px] font-medium md:mx-0'>Get Started</button>
            </div> 
            {/* Image */}
            <div className='md:w-1/2'>
                <img src={HeroImg} height="900px" width="900px" alt="" />
            </div>
                
        </div>

    </section>
  )
}

export default Hero