import React from 'react'
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";

import { IoMdPerson } from "react-icons/io";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

export default function () {
    const [countcart, setCountcart] = useState();
    const [menuicon, setMenuIcon] = useState(false);


    const handlermenu = () => {
        setMenuIcon(!menuicon);
    }

    const getcount = async () => {
        try {
            const email = localStorage.getItem('email')
            const resp = collection(db, 'cart');
            const q = query(resp, where("email", "==", email));
            const qdata = await getDocs(q);

            if (!qdata.empty) {
                const cartdata = qdata.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setCountcart(cartdata.length)
            }


        } catch {
            toast.warn('error')
        }
    }

    getcount();




    return (
        <div className='    w-full'>

            <div className='w-full border-b sticky top-0   flex justify-between px-5  sm:px-8 md:px-10 py-3  '>
                <NavLink to='/home' data-aos='fade-right' className='flex tracking-wider py-1 md:py-2 px-4 items-center justify-center text-xl' >

                    <h1 className='text-red-500 font-sans font-semibold'>F</h1>
                    <h1 className=''>R</h1>
                    <h1 className='text-red-500 font-sans font-semibold'>U</h1>
                    <h1>I</h1>
                    <h1 className='text-red-500 font-sans font-semibold'>T</h1>
                    <h1>S</h1>

                </NavLink>

                <div data-aos='fade-left' className=' hidden sm:flex '>
                    <NavLink to='/home' className='text-xl cursor-pointer hover:text-white rounded py-1 flex items-center px-4 hover:bg-red-500'>
                        <li className='list-none'>Home</li>
                    </NavLink>
                    <NavLink to='/about-us' className='text-xl cursor-pointer hover:text-white rounded py-1 flex items-center px-4 hover:bg-red-500'>
                        <li className='list-none'>About</li>
                    </NavLink>
                    <NavLink to='/services' className='text-xl cursor-pointer hover:text-white rounded py-1 flex items-center px-4 hover:bg-red-500'>
                        <li className='list-none'>Service</li>
                    </NavLink>
                    <NavLink to='/contact' className='text-xl cursor-pointer hover:text-white rounded py-1 flex items-center px-4 hover:bg-red-500'>
                        <li className='list-none'>Contact</li>
                    </NavLink>

                    <div className='flex text-3xl '>

                        <NavLink to='/profile' className=' py-2 hover:text-green-500 text-black' ><IoMdPerson /></NavLink>
                    </div>
                    <div className='flex items-center justify-center'>
                        <CiShoppingCart className='text-5xl px-1' />
                        <NavLink to='/cart' className='absolute right-4 top-[0.7rem] text-red-400 cursor-pointer'>{countcart}</NavLink>
                    </div>

                </div>

                <div className='sm:hidden py-1'>
                    {!menuicon ?
                        <MdMenu className='text-2xl' onClick={handlermenu} />
                        :
                        <RxCross1 className='text-2xl' onClick={handlermenu} />

                    }



                </div>
                {menuicon ?

                    <div className=' w-[40%]  sm:hidden h-screen gap-3 py-4 bg-slate-700 text-white flex px-5 flex-col absolute top-[60px] right-0 text-center'>
                        <NavLink to='/home' className='text-xl rounded cursor-pointer hover:text-black py-1 px-4 hover:bg-gray-300'>
                            <li className='list-none'>Home</li>
                        </NavLink>
                        <NavLink to='/about-us' className='text-xl rounded cursor-pointer hover:text-black py-1 px-4 hover:bg-gray-300'>
                            <li className='list-none'>About</li>
                        </NavLink>
                        <NavLink to='/services' className='text-xl rounded cursor-pointer hover:text-black py-1 px-4 hover:bg-gray-300'>
                            <li className='list-none'>Service</li>
                        </NavLink>
                        <NavLink to='/contact' className='text-xl rounded cursor-pointer hover:text-black py-1 px-4 hover:bg-gray-300'>
                            <li className='list-none'>Contact</li>
                        </NavLink>

                    </div>
                    : ''
                }

            </div>

        </div>
    )
}
