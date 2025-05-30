import React from 'react'
import img1 from '../assest/img1.jpg'
import { MdOutlineEdit } from "react-icons/md";

import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../config/firebase';
import NAvbar from '../Layout/NAvbar';

export default function Profile() {
   
    const [data, setData] = useState([])
    const email=localStorage.getItem('email')
   
    useEffect(() => {
        const fetchdata = async () => {
            const resp = collection(db, 'user');
            const q = query(resp, where('email', '==', email));
            const respdata = await getDocs(q);
            if (!respdata.empty) {
                const userdata=respdata.docs[0].data()
                setData(userdata);
            }
        }
        fetchdata()
    },[email])
 console.log(data)
    return (
        <>
  
           <NAvbar className='w-full bg-gray-100 h-[100vh]'/>
        <div className=' w-full bg-gray-100 h-[80vh] flex items-center justify-center'>
            <div className='w-[300px] h-[300px] flex flex-col items-center bg-white px-5 py-2'>
                <div>
                    <img src={img1} alt='person' className='w-[150px] h-[150px]  rounded-full' />
                </div>
                <div className=' mt-2 text-xl text-gray-900'> <h1>{data.name}
                </h1></div>
                <div className='flex w-full justify-between items-center text-xl mt-2  text-gray-500 '>
                    <h1>Username:</h1>
                    <h1 className='whitespace-nowrap'>{data.name}</h1>
                    <MdOutlineEdit className='text-blue-400 cursor-pointer' />
                </div>
                <div className='flex w-full justify-between items-center text-xl mt-2 text-gray-500  '>
                    <h1>Email:</h1>
                    <h1 className='whitespace-nowrap'>{data.email}</h1>
                    <MdOutlineEdit className='text-blue-400 cursor-pointer' />
                </div>
            </div>


        </div>
        </>
    )
}
