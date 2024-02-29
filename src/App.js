import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Sign_in/Signin';
import Signup from './pages/Sign_up/Signup';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './pages/Home/Home';
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { cryptoFetch } from './Redux/CryptoMarket/Crypto';
import HowItWorks from './pages/How_it_works/HowItWorks';
import About from './pages/About/About';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCoins = async () => {
    dispatch(cryptoFetch())
    }
    getCoins()
  },[dispatch])
  const coins = useSelector((state)=> state?.cryptoFetch?.cryptofetch)
  console.log(coins)
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/registration' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='works' element={<HowItWorks />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;
