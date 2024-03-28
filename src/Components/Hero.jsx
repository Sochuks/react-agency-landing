import React from 'react'
import HeroImg from './img/hero_img.svg'

const Hero = () => {
  return (
    // Hero
    <section className='py-6 bg-slate-100 overflow-hidden'>
        {/* container */}
        <div className='flex flex-col-reverse items-center justify-center max-w-[1240px] px-0 mx-auto md:pt-20 md:flex-row'>
            {/* Text */}
            <div className='flex flex-col mb-10 space-y-2 text-center md:mt-10 md:w-1/3 md:text-left'>
                <p className='font-bold text-primaryColor uppercase text-base md:-mb-2'>We take it step-by-step</p>
                <h1 className='font-bold py-1 bg-gradient-to-br from-primaryColor via-[#6DAFA7] to-primaryColor 
                bg-clip-text text-transparent text-3xl md:text-6xl sm:text-5xl'>Manage Your Projects</h1>
                <p className='max-w-xl text-xl text-slate-500 px-4 md:px-0 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quaerat minima ad dolor odit, ea sint? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <div className="pt-2 pb-6">
                    <button className='bg-gradient-to-r from-green-400 to-green-700 px-12 py-4 
                    rounded-md font-medium text-whiteColor text-base' href="#">
                            Sign In →
                    </button>
                </div>
                
            </div> 
            {/* Image */}
            <div className='md:w-1/2'>
                <img src={HeroImg} height="1000px" width="1000px" alt="" />
            </div>
                
        </div>

    </section>
  )
}

export default Hero