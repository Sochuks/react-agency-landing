import React from 'react'
import TaskImg from '../assets/icons/task.svg'

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
                        <img src={TaskImg} width={80} height={80} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                        <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                </div>
                {/* Service 2 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={TaskImg} width={80} height={80} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
                {/* Service 3 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={TaskImg} width={80} height={80} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
            </div>

            {/* 2nd row */}
            <div className='flex justify-between'>
                {/* Service 1 */}
                <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                    <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                        <img src={TaskImg} width={80} height={80} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                        <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                </div>
                {/* Service 2 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={TaskImg} width={80} height={80} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
                {/* Service 3 */}
                    <div className='flex flex-col p-2 justify-center text-center space-y-1'>
                        <div className='mx-auto bg-darkColor p-6 rounded-[50%]'>
                            <img src={TaskImg} width={80} height={80} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-primaryColor'>HEADING 1</h4>
                            <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                        </div>

                    </div>
            </div>

        </div>
    </section>
  )
}

export default Services