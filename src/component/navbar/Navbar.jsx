import { faBars, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { User } from '../Helpers/Helpers'

const Navbar = () => {
  const [toogle, settoogle] = useState(false)
  const [unik, setunik] = useState(false)
  const checkUser = User()
  const Links = [
    {name: 'Home', link: "/"},
    {name: 'About', link:"/about"},
    {name: 'How it works', link: "/works"},
  ]
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 20) {
        setunik(true);
      } else {
        setunik(false);
      }
    });
  }, []);
  const openbar = () => {
    settoogle(!toogle);
    if (!toogle) {
      setunik(true);
    } else {
      setunik(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${unik ? styles.unique : ''}`}>
      <div className={styles.nav_toogle} onClick={openbar}>
        {toogle? <FontAwesomeIcon icon={faTimes} /> :  <FontAwesomeIcon icon={faBars} />}
       </div> 
       <div className={`${styles.nav_logo} ${unik ? styles.gold : ''}`}>
        <Link to="/">
         <h1>Crypto Gland <span className={`dot ${unik ?'white' : null}`}></span></h1>
        </Link>
       </div>
       <div className={`${styles.nav_menu} ${toogle ? styles.nav_show : ''}`} onClick={()=> settoogle(false)}>
        <div className={styles.links}>
          {Links.map((link)=>(
          <Link to={link?.link} onClick={()=> settoogle(false)} key={link?.name}>{link?.name}</Link>
          ))}
        </div>
        <button className={styles.btn}>
          {/* {checkUser ?  */}
          <Link className={styles.profile} to='/account/dashboard'>
            <span className={styles.initials}>
              <FontAwesomeIcon icon={faUserAlt} />
            </span>
            <span className={styles.name}>
              <p>Lucas Boss</p>
            </span>
          </Link>
         {/* :  <Link to='/login'>Sign In</Link> 
          } */}
        </button>
       </div>
    </nav>
  )
}

export default Navbar