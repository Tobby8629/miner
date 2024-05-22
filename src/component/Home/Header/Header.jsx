import React, { useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Button from '../../button/Button';
import { useGetStartedMutation } from '../../../Redux/api/apiSlice';

const Header = () => {
  const [email, setEmail] = useState('');
  const navigatee = useNavigate()
 
   const [get_start, {data, isLoading, error}] = useGetStartedMutation();

   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };
 
   const navigate = async (e) => {
     e.preventDefault();
     try {
       await get_start(email).unwrap();
       if (data && !isLoading && !error) {
         navigatee('/registration', { state: { email }, replace: true });
       } 
     }
     catch (error) {
        console.error(error);
     }
   };

  return (
    <header className={styles.header}>
        <div className={styles.header_text}>
          <h2><span className={styles.bold}>Unlock <span className='gold'>digital wealth</span></span><br/> with Crypto Gland.</h2>
          <p>Crypto Gland: Your trusted partner for cryptocurrency investments, empowering global financial goals and achieving freedom through expert guidance.</p>
        </div>
        <form onSubmit={navigate} className={styles.button}>
          <input type='email' placeholder='Enter your email address' value={email} onChange={handleEmailChange} />
          <Button />
        </form>
          {error && <p style={{color: "red"}}>{error?.error}</p>}
      </header>
  )
}

export default Header