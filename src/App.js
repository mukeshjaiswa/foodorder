
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Foodinfo from './Component/Home/Foodinfo';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Cart from './Component/Cart/Cart';
import Order from './Component/Order/Order';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Profile from './Component/Profile/Profile';
import About from './Component/About/About';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });


  }, [])
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/:id' element={<Foodinfo />} />
        <Route path='/about-us' element ={<About/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <ToastContainer position='top-center' autoClose='1000' />
    </BrowserRouter>
  );
}

export default App;
