import React, { useState } from 'react'
import styles from '../Sign_up/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate,  } from 'react-router-dom'
import { useLoginUserMutation } from '../../Redux/api/apiSlice'
import { useDispatch } from 'react-redux'
import { logger } from '../../Redux/LoginSlice'


const Signin = () => {
  const dispatch = useDispatch()
  const [visible, setvisible] = useState(false)
  const navigate = useNavigate()
  const [login,setlogin] = useState({email: '', password:''})
  const [loggedIn, {data: logged, isLoading, error }] = useLoginUserMutation(login)
  const handleForm = (e) => {
    console.log(login)
    const {name, value} = e?.target
    setlogin({...login, [name]: value})
  }

  const Submit = async (e) => {
    e.preventDefault()
    try {
      await loggedIn(login).unwrap()
      logged && navigate("/", {replace: true});
      // const logged = await dispatch(logger(login))
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <section className={styles.main}>
      <h2 className={styles.welcome_text}>
         <span className={styles.large_text}>Welcome to</span>
         <br/> <span className={styles.logo}>Crypto gland </span><span className='dot'></span><br/>  
         <span className={styles.quote}>         
          "Embrace the power of crypto mining with Crypto gland 
          - where cutting-edge technology meets lucrative opportunities."
         </span>
        Enter your details to continue
       </h2>
      <form onSubmit={Submit} className={`${styles.form} ${styles.signin}`}>
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
              <input type='email' name='email' onChange={handleForm} id='email' placeholder='please enter email address' />
            </div>
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor='password'>password</label>
            <div className={styles.password}>
              <input type={visible ? "text":"password"} id='password' name='password' onChange={handleForm} placeholder='please enter password' />
              <div className={styles.visible}>
              {visible ?
              <FontAwesomeIcon icon={faEye} onClick={()=> setvisible(!visible)}/>
              : <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setvisible(!visible)} />}
            </div>
            </div>
          </div>
          { error && <p style={{color: "red"}}>{error?.data?.message}</p>}
          <div className={styles.submit}>
            <button type="submit">{isLoading ? "Logging..." : "Login"}</button>
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