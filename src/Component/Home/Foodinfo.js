import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { toast } from 'react-toastify';
import NAvbar from '../Layout/NAvbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function Foodinfo() {
   const{id} =useParams()
   
    const [food, setFood] = useState();
  
   
    const email = localStorage.getItem('email')
    const handlercartplus = async () => {
        
        try {
            const resp = collection(db, 'cart');
            await addDoc(resp, {
                strMealThumb: food.strMealThumb,
                strMeal: food.strMeal,
                price: 350,
                email:email,
              });
            toast.success("Add to cart")
        } catch (error) {
            toast.warn("Not add")
        }

    }

    useEffect(() => {
        const fetchbyid = async () => {
            const BASEURl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
            const api = await fetch(BASEURl);
            const jsondata = await api.json();
            console.log(jsondata)
            setFood(jsondata.meals ? jsondata.meals[0] : null)


        }
        fetchbyid();

    }, [id])
    if (!food) {
        return <div>Loading......</div>
    }

   
    return (
        <>
            <NAvbar  />
            <div className="md:flex  mt-10 px-10 p-4">
                <div>
                    <img data-aos='fade-right'
                        src={food.strMealThumb}
                        alt={food.strMeal}
                        className=" w-[600px] h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div data-aos='fade-left' className='ml-5 w-[500px]'>

                    <p className=" text-2xl font-semibold text-gray-900">Name: {food.strMeal}</p>
                    <p className=" text-2xl font-bold text-gray-500">Category: {food.strCategory}</p>


                    <p>{food.strInstructions}</p>
                    <p className='text-2xl'>Prices: <span className='font-semibold text-slate-800' >Rs.350</span> </p>
                 
                    <div className='flex mt-4 px-5 item-center justify-center gap-5'>
                       
                        <button className=' w-full bg-red-700 text-white hover:bg-red-900 rounded px-10 py-2' onClick={handlercartplus}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
