import React, { useState } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
  const [visible, setvisible] = useState(false)
  return (
    <section className={styles.main}>
      <h2 className={styles.welcome_text}> <span className={styles.large_text}>Welcome!</span><br/> It looks like you're new here.<br/> Would you like to create an account?</h2>
      <form className={styles.form}>
        <div>
          <label htmlFor='email'>Email</label>
          <div>
            <div>
              <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <input type='email' placeholder='please enter email address' />
          </div>
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <div>
            <input type={visible ? "text":"password"} placeholder='please enter password' />
            <div className='visible'>
            {visible ?
            <FontAwesomeIcon icon={faEye} onClick={()=> setvisible(!visible)}/>
            : <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setvisible(!visible)} />}
          </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Signup