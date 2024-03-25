import React, {useState} from 'react'

const ToggleButton = () => {
    const [isAnnual, setIsAnnual] = useState(false)


  return (
    <div className='flex max-w-[224px] mx-auto justify-center'>
        {/* Button container */}
        <div className='relative flex w-full p-1 bg-slate-200 rounded-full'>
            {/* toggle */}
            <div className='absolute inset-0 m-1 pointer-events-none' aria-hidden="true">
                <span className={`absolute inset-0 w-1/2 bg-primaryColor rounded-full shadow-sm shadow-slate-950/5 
                transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`}></span>
            </div>

            {/* Button month */}
            <button className={`relative flex-1 text-sm font-medium h-8 rounded-full 
             transition-colors delay-150 ease-in-out ${isAnnual ? 'text-slate-500' : 'text-white'}`}
            onClick={()=>setIsAnnual(false)} aria-pressed={isAnnual}>Monthly</button>

            {/* Button year */}
            <button className={`relative flex-1 text-sm font-medium h-8 
            rounded-full transition-colors delay-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500'}`}
            onClick={()=>setIsAnnual(true)} aria-pressed={isAnnual}>Yearly
            <span className={`${isAnnual ? 'text-green-200' : 'text-green-500'} `}> -20%</span></button>

        </div>

    </div>
  )
}

export default ToggleButton