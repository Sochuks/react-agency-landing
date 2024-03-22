import React from 'react'

const Services = () => {
  return (
    <section>
        {/* container */}
        <div className='max-w-xl mx-auto grid grid-rows-2'>
            {/* 1st row */}
            <div>
                {/* Service 1 */}
                <div className='flex flex-col p-4'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h4>HEADING 1</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                    </div>

                </div>
                {/* Service 2 */}
                <div>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                </div>
                {/* Service 3 */}
                <div>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, temporibus?</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services