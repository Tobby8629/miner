import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../Redux/api/apiSlice';

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [register,setregister] = useState({first_name: '', last_name: '',email: '', password:'', terms: true})
  useEffect(() => {
    const {state} = location
    setregister(prevRegister => ({
      ...prevRegister,
      email: state ?? ""
    }));
  },[location])
  const [visible, setvisible] = useState(false)
  const [registerUser, {data: registered, isLoading, error }] = useRegisterUserMutation(register)
  const handleForm = (e) => {
    const {name, value} = e?.target
    setregister({...register, [name]: value})
  }

  const Submit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(register).unwrap()
      registered && navigate("/login", {replace: true});
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
         It looks like you're new here.<br/> Would you like to create an account?
       </h2>
        <form onSubmit={Submit} className={styles.form}>
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
                  <input type='text' id='first_name' onChange={handleForm} name='first_name' placeholder='please enter first name' />
                </div>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='last_name'>last name</label>
                <div className={styles.email}>
                  <div>
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <input type='text' id='last_name' onChange={handleForm} name='last_name' placeholder='please enter last name' />
                </div>
            </div>
          </div>

            <div className={styles.input_wrapper}>
              <label htmlFor='email'>Email</label>
              <div className={styles.email}>
                <div>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <input type='email' value={register?.email} onChange={handleForm} name='email' id='email' placeholder='please enter email address' />
              </div>
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor='password'>password</label>
              <div className={styles.password}>
                <input type={visible ? "text":"password"} name='password' onChange={handleForm} id='password' placeholder='please enter password' />
                <div className={styles.visible}>
                {visible ?
                <FontAwesomeIcon icon={faEye} onClick={()=> setvisible(!visible)}/>
                : <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setvisible(!visible)} />}
              </div>
              </div>
            </div>

            { error && <p style={{color: "red"}}>{error?.data?.message}</p>}

            <div className={styles.terms}>
              <input type="checkbox" onChange={()=> setregister({...register, terms: !register?.terms})} />
              <p>By creating an account, you have agree to the <Link> Terms and Condition </Link> and <Link>Privacy Policy</Link></p>
            </div>

            <div className={styles.submit}>
              <button type="submit" disabled={register?.terms}>{isLoading ? "creating..." : "Create my account"}</button>
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