import React from 'react'
import hero from '../assest/hero.png'
import { data } from './CustomerData'
import { rule } from './CustomerData'

export default function Customer() {

    return (
        <div className='flex flex-col mb-5  items-center justify-center '>
            <div className=' my-5s text-center'>
                <h1 className=' text-xl sm:text-4xl whitespace-nowrap  font-semibold mt-5 font-sans text-[#4db5ff] '>What Others Say? </h1>
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap  sm:px-10 gap-5  items-center justify-center mt-10'>

                {data.map((item, index) => (


                    <div data-aos='fade-right' key={index} className=' w-[200px] sm:w-[300px] h-auto py-5 rounded-2xl shadow-md flex flex-col items-center cursor-pointer justify-center border px-5 hover:bg-gray-100 '>
                        <div className=' flex items-center justify-center mb-5 '>

                            <img src={item.img} alt="" className='w-[100px] rounded-full h-[100px]' />
                        </div>
                        <p>{item.decs}</p>
                        <h1 className='text-md sm:text-xl whitespace-nowrap  my-4 font-semibold
                   '>{item.name}</h1>
                        <h1>{item.customer}</h1>
                    </div>
                ))}


            </div>
            <div className=' w-full flex flex-col items-center justify-center md:flex-row flex-wrap gap-5 mt-10 mb-10'>
                {rule.map((item, index) => (
                    <div data-aos='fade-right' key={index} className='flex flex-col items-center justify-center  gap-5 p-4 w-full  sm:w-[300px] h-[300px] '>
                        <div className='border mt-5 mb-5 rounded-lg w-full text-center whitespace-nowrap  bg-[#5f9555] py-2 text-white font-semibold'><h1>{item.why}</h1></div>
                        <div className='border-l-2 border-[#5f9555] px-5'>
                            <h5>{item.desc}</h5>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

