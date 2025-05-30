import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { db } from '../config/firebase';
import NAvbar from '../Layout/NAvbar'

export default function Cart() {

    const [cartdata, setCartdata] = useState([])
  
    const [totalprice, setTotalPrice] = useState()
 
    const [total, setTotal] = useState(0);
    useEffect(()=>{
     
        const deliveryCharge = total < 1000 ? 150 : 0;
        setTotalPrice(deliveryCharge+total)
    })
    
        


    const email = localStorage.getItem("email")
    const getcartindex = async () => {
        try {
            const resp = collection(db, 'cart');
            const q = query(resp, where('email', '==', email));
            const qdata = await getDocs(q);
            if (!qdata.empty) {
                const respdata = qdata.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setCartdata(respdata);
            }
        } catch {
            toast.warn("error")
        }
    }
    getcartindex();

    const handlerdelete = async (id) => {

        try {
            await deleteDoc(doc(db, 'cart', id));
            setCartdata(prev => prev.filter(item => item.id !== id));
            toast.success("Item Delete")
        } catch (error) {
            console.log('error')
        }
    }
    useEffect(() => {

        const totalAmount = cartdata.reduce((sum, item) => {
            return sum + (item.price || 0) * (item.quantity || 1);
        }, 0);
        setTotal(totalAmount);
    }, [cartdata]);
    const handleQuantityChange = async (id, newQuantity) => {
        const updatedQuantity = parseInt(newQuantity || 1);


        const updatedCart = cartdata.map(item =>
            item.id === id ? { ...item, quantity: updatedQuantity } : item
        );
        setCartdata(updatedCart);


        try {
            const docRef = doc(db, 'cart', id);
            await updateDoc(docRef, { quantity: updatedQuantity });
        } catch (error) {
            console.error("Error updating quantity in Firestore:", error);
            toast.error("Failed to update quantity");
        }
    };


    return (
        <div>
            <NAvbar />
            <div className='flex flex-col items-center mt-5 w-full'>
                <div className='font-sans w-full px-4 sm:px-8'>
                    <h1 className='text-[30px] font-semibold text-center'>Cart</h1>
                    <div className='mt-5 overflow-x-auto'>
                        <table className='w-full border border-black'>
                            <thead className='bg-gray-100 hidden sm:table-header-group'>
                                <tr>
                                    <th className='px-2 py-2 border text-left'>Sno</th>
                                    <th className='px-2 py-2 border text-left'>Image</th>
                                    <th className='px-2 py-2 border text-left'>Product</th>
                                    <th className='px-2 py-2 border text-left'>Price</th>
                                    <th className='px-2 py-2 border text-left'>Quantity</th>
                                    <th className='px-2 py-2 border text-left'>SubTotal</th>
                                    <th className='px-2 py-2 border text-left'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {cartdata.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td><img src={data.strMealThumb} alt="" className='w-[50px] h-[40px]' /></td>
                                        <td>{data.strMeal}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                value={data.quantity ? data.quantity : '1'}
                                                onChange={(e) => handleQuantityChange(data.id, e.target.value)}
                                                className='w-16 border px-1'
                                            />
                                        </td>
                                        <td >{(data.price || 0) * (data.quantity || 1)}</td>
                                        <td onClick={() => handlerdelete(data.id)} className='text-red-500 cursor-pointer'>
                                            Delete
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-[300px] h-auto py-5  place-self-end mt-10'>
                        <h1 className='text-3xl text-green-500 font-semibold'>Carts Total</h1>
                        <div className='border flex py-2'>
                            <h1 className='text-2xl px-4 font-semibold'>SubTotal:</h1>
                            <h1 className='text-2xl font-semibold px-3'>{total}</h1>
                        </div>
                        {total < 1000 ?
                            <div className='border flex py-2'>
                                <h1 className='text-2xl px-4 font-semibold'>Extra Delivery Charge for Orders Under Rs. 1000 :</h1>
                                <h1  className='text-2xl font-semibold px-3'>150</h1>
                            </div>
                            : ""}
                        <div className=' flex'>
                            <h1>Total</h1>
                            <h1>{totalprice}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
