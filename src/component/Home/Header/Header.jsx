import React, { useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Button from '../../button/Button';

const Header = () => {
  const [email, setEmail] = useState('');
  const navigatee = useNavigate()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate = (e) => {
    e.preventDefault()
    navigatee('/registration', {state: email}, {replace: true});
  }
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
      </header>
  )
}

export default Header