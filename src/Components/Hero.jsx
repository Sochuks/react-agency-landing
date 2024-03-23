import React from 'react'
import HeroImg from './img/hero_img.svg'

const Hero = () => {
  return (
    // Hero
    <section className='py-6'>
        {/* container */}
        <div className='flex flex-col-reverse items-center max-w-[900px] mx-auto space-y-0 text-center md:flex-col'>

          {/* Text container*/}
          <div className="flex flex-col space-y-2 p-4">
              <p className='text-xl text-primaryColor font-bold uppercase md:text-2xl'>Lorem ipsum dolor sit.</p>
              <h1 className='text-5xl font-bold mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
              <p className="text-xl text-gray500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia maxime eveniet, fuga possimus beatae culpa?</p>
          </div>
            {/* buttons */}
            <div>
                <button className='bg-gradient-to-r from-green-400 to-green-700 px-4 py-2 rounded-md font-medium text-whiteColor'>
                    Start Free Trial
                </button>
            </div>
            {/* Image */}
              <img src={HeroImg} alt="" className='w-[700px]' />
            
        </div>

    </section>
  )
}

export default Hero