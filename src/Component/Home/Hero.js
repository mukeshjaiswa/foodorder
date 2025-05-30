import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Heroimg from '../assest/hero.png'
import Food from './Food';

export default function Hero({ handlercart }) {
    const [search, setSearch] = useState('cake')
    const [getfoods, setGetfoods] = useState([])
    const [getcategory, setGetCategory] = useState([]);
    const getfood = async () => {
        const BASEURl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        const api = await fetch(BASEURl);
        const jsonData = await api.json();
        setGetfoods(jsonData.meals || []);
        setGetCategory(jsonData.strCategory)
    }
    useEffect(() => {

        getfood();
    }, [])
    const searchhandler = () => {
        
        
        getfood();


    }
    return (
        <div className=''>

            <div className='mt-1 h-[70vh] center object-center   ' >
                <img data-aos="flip-left" src={Heroimg} alt="hero" className=' w-full h-[100%]' />

            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[66%] w-full flex justify-center items-center px-4">
                <div className='w-full sm:w-[60%] grid grid-cols-1  justify-center items-center gap-6   p-3 sm:p-8 rounded-xl mt-1' data-aos='zoom-in'>
             


                        <div data-aos='zoom-in' className='w-full flex shadow-md borer-black  y-4 sm:justify-center  sm:items-center '>
                            <input type="text" placeholder='Search Food Items' className='bg-none h-12 p-2 w-full rounded-tl-md  rounded-bl-md px-2 sm:px-4 border-b-[1px] border-[#c9c7c1] outline-none' onChange={(e) => setSearch(e.target.value)} >


                            </input>

                            <button onClick={searchhandler} className='text-white h-12 px-2 sm:px-6 border-none bg-red-500 hover:bg-slate-800   rounded-tr-md rounded-br-md '> Search</button>
                        </div>
                 
                </div>
            </div>
            <Food getfoods={getfoods} handlercart={handlercart} search={search} />
        </div>

    )
}
