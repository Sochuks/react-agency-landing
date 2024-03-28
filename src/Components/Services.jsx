import React from 'react'
import TaskImg from '../assets/icons/task.svg'
import SolImg from '../assets/icons/solutions.svg'
import TrackImg from '../assets/icons/track.svg'
import PriorImg from '../assets/icons/priority.svg'
import GoalImg from '../assets/icons/goals.svg'
import costImg from '../assets/icons/cost.svg'
import backImg from './img/cover-image.png'
const Services = () => {
  return (
    <section className='services overflow-hidden'>
        {/*Background Image Overlay */}
        <div className='absolute inset-0'>
            <img src={backImg} alt="" className='bg-no-repeat object-cover object-center h-full w-full filter blur-sm' />
            <div className='absolute inset-0 bg-white opacity-80'></div>
        </div>

        {/* heading */}
        <div className='relative page-header py-12'>
                <h2 className='text-4xl font-semibold text-primaryColor py-2'>Increase Productivity with 
                    <span className=' text-yellow-400'> Prime</span><span className='font-medium text-green-900'>Time</span>
                </h2>
                <p className='text-base caret-emerald-700'>Streamlining your workflow for maximum efficiency and succes</p>
            </div>

        {/* container */}
        <div className='relative container mx-auto md:grid md:grid-cols-3 md:py-6'>
                {/* Service 1 */}
                <div className='flex flex-col justify-center text-center space-y-2 py-4'>
                    <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                        <img src={TaskImg} width={60} height={60} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>Task Management</h4>
                        <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                    <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                </div>
                {/* Service 2 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-2 py-4'>
                        <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                            <img src={SolImg} width={60} height={60} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Innovative Solutions</h4>
                            <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                        <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                    </div>
                {/* Service 3 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-2 py-4'>
                        <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                            <img src={TrackImg} width={60} height={60} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Track Checklist</h4>
                            <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                        <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                    </div>
            

                {/* Service 4 */}
                <div className='flex flex-col p-2 justify-center text-center space-y-2 py-4'>
                    <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                        <img src={PriorImg} width={60} height={60} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>Prioritize Task</h4>
                        <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                    <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                </div>
                {/* Service 5 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-2 py-4'>
                        <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                            <img src={GoalImg} width={60} height={60} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Taskbased Goals</h4>
                            <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                        <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                    </div>
                {/* Service 6 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-2 py-4'>
                        <div className='mx-auto bg-bgColor py-4 px-2.5 rounded-[70%]'>
                            <img src={costImg} width={60} height={60} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Save Cost</h4>
                            <p className='text-base text-gray-600 md:max-w-64 md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                        <button className='inline-flex items-center mx-auto text-base py-2 
                    text-green-600 font-semibold gap-1 transition-colors ease-in-out duration-150 hover:text-primaryColor hover:scale-100'>
                        Learn More →
                    </button>

                    </div>
            

        </div>
    </section>
  )
}

export default Services