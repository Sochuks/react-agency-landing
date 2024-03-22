import React from 'react'
import TaskImg from '../assets/icons/task.svg'
import SolImg from '../assets/icons/solutions.svg'
import TrackImg from '../assets/icons/track.svg'
import PriorImg from '../assets/icons/priority.svg'
import GoalImg from '../assets/icons/goals.svg'
import costImg from '../assets/icons/cost.svg'

const Services = () => {
  return (
    <section>
        {/* container */}
        <div className='max-w-6xl mx-auto grid grid-rows-2'>
            {/* 1st row */}
            <div className='flex justify-between'>
                {/* Service 1 */}
                <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                    <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                        <img src={TaskImg} width={50} height={50} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>Task Management</h4>
                        <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                </div>
                {/* Service 2 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={SolImg} width={50} height={50} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Innovative Solutions</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
                {/* Service 3 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={TrackImg} width={50} height={50} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Track Checklist</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
            </div>

            {/* 2nd row */}
            <div className='flex justify-between'>
                {/* Service 1 */}
                <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                    <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                        <img src={PriorImg} width={50} height={50} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>Prioritize Task</h4>
                        <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                </div>
                {/* Service 2 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={GoalImg} width={50} height={50} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Taskbased Goals</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
                {/* Service 3 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={costImg} width={50} height={50} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>Save Cost</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
            </div>

        </div>
    </section>
  )
}

export default Services