import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signin from './pages/Sign_in/Signin';
import Signup from './pages/Sign_up/Signup';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './pages/Home/Home';
import {useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { cryptoFetch } from './Redux/CryptoMarket/Crypto';
import HowItWorks from './pages/How_it_works/HowItWorks';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [hideNavbar, sethideNavbar] = useState('')
  // useEffect(() => {
  //   // const getCoins = async () => {
  //   // dispatch(cryptoFetch())
  //   // }
  //   // getCoins()
  //  const adjust = () => {
  //     if (window.innerWidth >= 768) {
  //       sethideNavbar(false)
  //     } else {
  //       sethideNavbar(location.pathname === "/account") 
  //     }
  //   };
  //   window.addEventListener('resize', adjust())
  //   adjust()
  // },[dispatch, location.pathname])

  useEffect(() => {
    const adjust = () => {
      if (window.innerWidth >= 768) {
        sethideNavbar(false);
      } else {
        sethideNavbar(location.pathname === "/account");
      }
    };
    adjust();
    const handleResize = () => {
      adjust(); 
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);
  
  
  const coins = useSelector((state)=> state?.cryptoFetch?.cryptofetch)
  console.log(hideNavbar)
  
  
  return (
    <>
    {!hideNavbar && <Navbar />}
    <Routes>
      <Route path='/registration' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='works' element={<HowItWorks />} />
      <Route path='account' element={<Profile />} />
    </Routes>
    <Footer />
   </>
  );}


export default App;
