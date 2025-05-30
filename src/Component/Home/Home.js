import React from 'react'
import { useParams } from 'react-router-dom'
import Customer from '../Customer/Customer'
import Footer from '../Footer/Footer'

import NAvbar from '../Layout/NAvbar'

import Hero from './Hero'


export default function Home() {

 
  return (
    <div className='flex flex-col'>
      <NAvbar  />
      <Hero  />
    
      <Customer/>
      <Footer/>
    </div>
  )
}
