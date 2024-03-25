import React from 'react'

const ToggleButton = () => {
  return (
    <div className='flex max-w-[224px] mx-auto justify-center'>
        {/* Button container */}
        <div className='relative flex w-full p-1 bg-slate-200 rounded-full'>
            {/* toggle */}
            <div className='absolute inset-0 m-1 pointer-events-none' aria-hidden="true">
                <span className='absolute inset-0 w-1/2 bg-primaryColor rounded-full shadow-sm shadow-slate-950/5 transform transition-transform duration-150 ease-in-out'></span>
            </div>

            {/* Button month */}
            <button className='relative flex-1 text-sm font-medium h-8 rounded-full text-white transition-colors delay-150 ease-in-out'>Monthly</button>

            {/* Button month */}
            <button className='relative flex-1 text-sm text-slate-500 font-medium h-8 rounded-full transition-colors delay-150 ease-in-out'>Yearly<span className='text-green-500'> -20%</span></button>

        </div>

    </div>
  )
}

export default ToggleButton