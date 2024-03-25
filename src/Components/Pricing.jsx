import React from 'react'
import react_icon from '../assets/react.svg'
import check_icon from '../assets/icons/check.png'
import close_icon from '../assets/icons/close.png'

const Pricing = () => {
  return (
    <section>
        {/* container */}
        <div className="container max-w-[1200px] mx-auto grid md:grid-cols-3 p-10 gap-16">
            {/* First Price */}
            <div className='flex flex-col w-full p-4 my-4 bg-gray-200 rounded-lg border shadow-xl hover:scale-x-105 duration-300'>
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-bold text-center py-8 md:'>Economy Suit</h3>
                <p className='text-center text-4xl font-bold'>$150</p>
                <button className='bg-green-600 rounded-lg font-edium my-6 px-6 py-3 text-white'>Get Started</button>
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-gray-200 rounded-full'>
                            <img src={check_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <img src={close_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

            {/* Second Price */}
            <div className='flex flex-col w-full p-4 my-4 bg-yellow-200 rounded-lg border shadow-xl hover:scale-x-105 duration-300'>
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-bold text-center py-8'>Economy Suit</h3>
                <p className='text-center text-4xl font-bold'>$150</p>
                <button className='bg-green-600 rounded-lg font-edium my-6 px-6 py-3 text-white'>Get Started</button>
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-gray-200 rounded-full'>
                            <img src={check_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <img src={close_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

            {/* Third Price */}
            <div className='flex flex-col w-full p-4 my-4 bg-gray-200 rounded-lg border shadow-xl hover:scale-x-105 duration-300'>
                {/* top */}
                <img src={react_icon} alt="" className='w-20 mx-auto mt-[-3rem]' />
                <h3 className='text-2xl font-bold text-center py-8 md:'>Economy Suit</h3>
                <p className='text-center text-4xl font-bold'>$150</p>
                <button className='bg-green-600 rounded-lg font-edium my-6 px-6 py-3 text-white'>Get Started</button>
                {/* features */}
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-gray-200 rounded-full'>
                            <img src={check_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>

                    <div className='flex items-center gap-6'>
                        <span className='p-1 bg-bgColor rounded-full'>
                            <img src={close_icon} width={30} height={30} alt="" />
                        </span>
                        <p>500 GB Storage</p>
                    </div>
                    

                </div>

            </div>

        </div>
    </section>
  )
}

export default Pricing