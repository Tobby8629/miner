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
import Dashboard from './component/Account/Dashboard/Dashboard';
import Sidebar from './component/Account/sidebar/Sidebar';
import Invest from './component/Account/Invest/Invest';
import Deposit from './component/Account/Deposit/Deposit';
import Withdrawals from './component/Account/withdrawals/Withdrawals';

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [hideNavbar, sethideNavbar] = useState('')


  useEffect(() => {
    const adjust = () => {
      if (window.innerWidth >= 768) {
        sethideNavbar(false);
      } else {
        sethideNavbar(location.pathname.includes("/account"));
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
  const hideFooter = (location.pathname.includes('/account'))
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
      <Route path='account' element={<Profile />}>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='invest' element={<Invest />} />
        <Route path='deposit' element={<Deposit />} />
        <Route path='withdrawals' element={<Withdrawals />} />
      </Route>
    </Routes>
    {!hideFooter && <Footer />}
   </>
  );}


export default App;
