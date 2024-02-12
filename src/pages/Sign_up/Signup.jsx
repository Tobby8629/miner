import React, { useState } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [visible, setvisible] = useState(false)
  return (
    <section className={styles.main}>
        <h2 className={styles.welcome_text}> <span className={styles.large_text}>Welcome!</span><br/> It looks like you're new here.<br/> Would you like to create an account?</h2>
        <form className={styles.form}>
        <div className={styles.reg}>
          <h2>Sign Up</h2>
          <p>Let’s get you started, input your details below.</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.userInfo}>
            <div className={styles.input_wrapper}>
                <label htmlFor='first_name'>first name</label>
                <div className={styles.email}>
                  <div>
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <input type='text' id='first_name' placeholder='please enter first name' />
                </div>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='last_name'>last name</label>
                <div className={styles.email}>
                  <div>
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <input type='text' id='last_name' placeholder='please enter last name' />
                </div>
            </div>
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

            <div className={styles.terms}>
              <input type="checkbox"  />
              <p>By creating an account, you have agree to the <Link> Terms and Condition </Link> and <Link>Privacy Policy</Link></p>
            </div>

            <div className={styles.submit}>
              <button type="submit">Create my account</button>
            </div>
            <div className={styles.options}>
            <div className={styles.forget_password}>
              <Link>I forgot my password</Link>
            </div>  
            <p className={styles.exist}> Already an Existing User? <Link to="/login">Log in</Link></p>
            </div>
          </div>
        </form>
    </section>
  )
}

export default Signup