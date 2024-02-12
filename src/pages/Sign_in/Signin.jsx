import React, { useState } from 'react'
import styles from '../Sign_up/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Signin = () => {
  const [visible, setvisible] = useState(false)
  return (
    <section className={styles.main}>
      <h2 className={styles.welcome_text}> <span className={styles.large_text}>Welcome Back!</span><br/>It's been a minute.<br/>  Enter your details to sign in</h2>
      <form className={`${styles.form} ${styles.signin}`}>
        <div className={styles.wrapper}>
          <div className={styles.reg}>
            <h2>Sign In</h2>
            <p>Log in with the data you entered during sign up</p>
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor='email'>Email</label>
            <div className={styles.email}>
              <div>
                <FontAwesomeIcon icon={faEnvelope}/>
              </div>
              <input type='email' id='email' placeholder='please enter email address' />
            </div>
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor='password'>password</label>
            <div className={styles.password}>
              <input type={visible ? "text":"password"} id='password' placeholder='please enter password' />
              <div className={styles.visible}>
              {visible ?
              <FontAwesomeIcon icon={faEye} onClick={()=> setvisible(!visible)}/>
              : <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setvisible(!visible)} />}
            </div>
            </div>
          </div>
          <div className={styles.submit}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.options}> 
            <div className={styles.forget_password}>
              <Link>I forgot my password</Link>
            </div>  
            <p className={styles.exist}> Don't have an account? <Link to="/registration">sign up</Link></p>
          </div>
         
        </div>
      </form>
    </section>
  )
}

export default Signin