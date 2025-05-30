import React from 'react'
import Customer from '../Customer/Customer'
import Footer from '../Footer/Footer'
import NAvbar from '../Layout/NAvbar'

export default function About() {
  return (
    <div className='w-full h-auto'>
        <NAvbar/>
        <div className=' justify-center px-10 py-5'>
            <div className=' w-[90%] m-auto h-auto flex flex-col  items-center justify-center'>
                <h1 className='text-3xl text-green-500 font-semibold'>About</h1>
                <h2 className='text-xl mt-5'>We are dedicated to delivering fresh vegetables, fruits, and groceries right to your doorstep in just a few minutes. Our easy-to-use platform allows you to browse through a wide range of products, add them to your cart, fill in your address, and place your order. Once you’ve made your purchase, we’ll deliver your items within 3 hours (terms and conditions apply). We offer three delivery options: Express Delivery, Same Day Delivery, and Next Day Delivery.</h2>
                <h2 className='text-xl mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptates libero praesentium beatae error doloremque, ea consequuntur quos, dolorum atque laudantium blanditiis. Ut ullam voluptatum vitae saepe ducimus id eligendi culpa quidem quo vel alias amet dolores, officiis maxime omnis, excepturi placeat in? Adipisci iste voluptatum corporis porro blanditiis est illo architecto voluptatibus, ipsa explicabo nemo natus vero quos at!</h2>
                <h2 className='text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis eveniet. Facere nostrum minus optio saepe iste, aut quam dolorem, modi dolor id quae eius, qui laborum quis blanditiis architecto? Quis facilis obcaecati accusantium nihil non maiores similique ipsam fugit vel. Sunt exercitationem pariatur sed obcaecati illo suscipit itaque ratione..</h2>
                <h2 className='text-xl mt-5 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus culpa blanditiis perferendis dolorem rem, dignissimos fugit molestias, temporibus qui tempore, reiciendis iusto atque odit fugiat quo nemo quas. Aspernatur, voluptates!</h2>
                <Customer className='mt-10'/>
            </div>
        </div>
                <Footer/>
    </div>

  )
}
