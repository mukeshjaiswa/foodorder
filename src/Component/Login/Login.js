import React from 'react'
import loginimg from '../assest/loginimg.jpg'

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { toast } from 'react-toastify';
import { db } from '../config/firebase';


export default function Login() {
    const navigate = useNavigate()
    const [showpassword, setShowpassword] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handlershowpassword = () => {
        setShowpassword(!showpassword)
    }

    const handlerlogin = async (e) => {
        e.preventDefault();
        try {
            const resp=collection(db,'user');

            const q=query(resp, where('email','==',email),
            where('password','==',password));

            const respdata=await getDocs(q);
        
            if(!respdata.empty){
                const userid=respdata.docs[0].data()
                localStorage.setItem('email',userid.email)
                navigate(`/home`)
                return
            }
            else{
                toast.warn("Not Match")
            }
        } catch (error) {
            toast.warn("Not match")
            
        }
    }
    return (
        <div style={{
            backgroundImage: `url(${loginimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='w-full h-[100vh]  flex items-center justify-center'>
            <div className='w-auto shadow-2xl border-gray-50 border  h-auto gap-3 flex flex-col px-10 py-10  bg-transparent rounded-3xl text-white'>
                <div className='w-full text-center'>
                    <h1 className='text-3xl font-semibold font-sans'>Login Form</h1>
                </div>
                <form action=""  onSubmit={handlerlogin}>
                <div className=' flex flex-col mt-10 gap-5'>
                    <div className=' flex flex-col'>
                        <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>USERNAME:</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email ' className='border bg-transparent text-lg rounded-lg px-3 py-1' />
                    </div>
                    <div className=' flex flex-col'>
                        <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>PASSWORD:</label>
                        <div className='relative flex items-center justify-center'>
                            <input type={showpassword ? 'password' : 'text'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password ' className='w-full pr-10  border bg-transparent text-lg rounded-lg px-3 py-1' />
                            {showpassword ? (
                                <FaRegEyeSlash className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />

                            ) :
                                <FaRegEye className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />}

                        </div>


                    </div>
                   
                        <button type='submit' className='w-full  text-center border py-2 hover:bg-white hover:text-black rounded-md cursor-pointer'>Login</button>
                  
                    

                        <NavLink to='/register' className=' w-full text-center hover:text-[#4bd5ff] cursor-pointer'>Sign Up now</NavLink>
                  

                </div>
                </form>
            </div>

        </div>
    )
}


