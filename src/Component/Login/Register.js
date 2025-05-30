import React from 'react'
import loginimg from '../assest/loginimg.jpg'

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useState } from 'react';
import { toast } from 'react-toastify';

import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function Register() {
    const [showpassword, setShowpassword] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const handlershowpassword = () => {
        setShowpassword(!showpassword)
    }
    const addregisterdata = async () => {
        try {
            const response = collection(db, 'user');

            const q=query(response,where('email','==',email));
            const responsedata=await getDocs(q)
            if(!responsedata.empty){
                toast.warn("Email is already exit")
                return
            }
            await addDoc(response, { name: name.trim(), email: email.trim(), password: password.trim() })

            toast.success("Regsiter sucess")
            setName('')
            setEmail('')
            setCPassword('')
            setPassword('')
        } catch (error) {
            toast.warn("error")
        }
    }
    const hanlerregister = (e) => {
        e.preventDefault();

        if (password !== cpassword) {
            toast.warn("Password and confirm password is not match")
            return
        }
       
        console.log(name, email, password)

        addregisterdata();




    }
    return (
        <div style={{
            backgroundImage: `url(${loginimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='w-full h-[100vh]  flex items-center justify-center'>
            <div className='w-auto shadow-2xl border-gray-50 border  h-auto gap-3 flex flex-col px-10 py-10  bg-transparent rounded-3xl text-white'>
                <div className='w-full text-center'>
                    <h1 className='text-3xl font-semibold font-sans'>Register Form</h1>
                </div>
                <form onSubmit={hanlerregister}>
                    <div className=' flex flex-col mt-5 gap-2'>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>FULLNAME:</label>
                            <input
                                type='text'
                                value={name} required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Full Name ' className='border bg-transparent text-lg rounded-lg px-3 py-1' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>USERNAME:</label>
                            <input
                                type='email'
                                value={email} required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter Email ' className='border bg-transparent text-lg rounded-lg px-3 py-1' />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>PASSWORD:</label>
                            <div className='relative flex items-center justify-center'>
                                <input type={showpassword ? 'password' : 'text'}
                                    value={password} required
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter Password ' className='w-full pr-10  border bg-transparent text-lg rounded-lg px-3 py-1' />
                                {showpassword ? (
                                    <FaRegEyeSlash className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />

                                ) :
                                    <FaRegEye className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />}

                            </div>


                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="" className='text-xl py-1 tracking-wide font-sans font-semibold '>CONFIRM PASSWORD:</label>
                            <div className='relative flex items-center justify-center'>
                                <input type={showpassword ? 'password' : 'text'}
                                    value={cpassword} required
                                    onChange={(e) => setCPassword(e.target.value)}
                                    placeholder='Confirm Password ' className='w-full pr-10  border bg-transparent text-lg rounded-lg px-3 py-1' />
                                {showpassword ? (
                                    <FaRegEyeSlash className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />

                                ) :
                                    <FaRegEye className='absolute right-3 cursor-pointer text-gray-500 ' onClick={handlershowpassword} />}

                            </div>


                        </div>
                        {/* <div className='w-full  text-center border py-2 hover:bg-white hover:text-black mt-1 rounded-md cursor-pointer'> */}
                            <button type='submit' className='w-full  text-center border py-2 hover:bg-white hover:text-black mt-1 rounded-md cursor-pointer'>Register</button>
                       


                    </div>
                </form>
            </div>

        </div>
    )
}
