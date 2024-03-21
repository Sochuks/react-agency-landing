import React from 'react'
import HeroImg from './img/hero_img.svg'

const Hero = () => {
  return (
    // Hero
    <div>
        {/* container */}
        <div className=''>
            {/* Text */}
            <div className=''>
                <p className='text-md font-medium p-2 uppercase'>We take it step-by-step</p>
                <h1 className='font-bold text-4xl md:text-5xl sm:text-6ml'>Manage Your Projects</h1>
                <p className=''>Excellent project managers for all</p>
            </div> 
            {/* Image */}
            <div>
                <img src={HeroImg} alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default Hero