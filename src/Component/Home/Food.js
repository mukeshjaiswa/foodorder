import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Hero from '../assest/hero.png'

export default function Food({ getfoods,handlercart }) {
    const [showfood, setFood] = useState(6);
    const [showless, setLess] = useState(false);
    const handlershowmore = () => {
        const newcount = showfood + 3;
        setFood(newcount)
        if (newcount > 6) {
            setLess(true)

        }
    }
    const handlershowless = () => {
        const newcount = showfood - 3;
        setFood(newcount)
        if (newcount <= 6) {
            setLess(false);
        }
    }
    


    return (
        <div className='flex flex-col justify-center items-center'>

            <div data-aos='fade-right' className='w-full flex   sm:flex-row gap-5 flex-wrap items-center justify-center my-5 px-5'>
                {getfoods.slice(0, showfood).map((item, index) => (
                    <div key={index} className='  w-[200px]  sm:w-[300px] rounded shadow-md h-[350px] '>


                        <div className='w-[200px] sm:w-[300px] h-[250px]   '>
                            <img src={item.strMealThumb} alt="food" className='w-[200px] sm:w-[300px]  h-[250px] rounded-tl rounded-tr ' />
                        </div>
                        <div className='mx-2 p-2'>
                            <h1  className=' text-md sm:text-2xl font-semibold text-slate-600  '>{item.strMeal.substring(0, 18)}...</h1>
                        </div>
                        <NavLink to={`/${item.idMeal}` } className='px-4 text-xl hover:text-red-500 '>Read More...</NavLink>
                    </div>

                ))}

            </div>
            <div className='my-4 flex gap-4'>

                <h1 onClick={handlershowmore} className='px-3 py-1 border-b-[5px] border-red-500 hover:border cursor-pointer  text-xl rounded-md  text-black '>Show More</h1>
                {showless ?
                    <h1 onClick={handlershowless} className='px-3 py-1 border-b-[5px] border-red-500 hover:border cursor-pointer  text-xl rounded-md  text-black '>Show Less</h1>
                    : ""
                }
            </div>
        </div>
    )
}
