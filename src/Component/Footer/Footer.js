import React from 'react'

export default function Footer() {
  return (
    <div className='w-full text-white gap-1 text-sm sm:text-lg bg-[#5f9555] flex p-4 items-center justify-center'>
        <p>&copy; {new Date().getFullYear() } </p>
        <p> OnlineFruitDeliveryNepal.</p>
        <p>All Right Reserved</p>
    </div>
  )
}
