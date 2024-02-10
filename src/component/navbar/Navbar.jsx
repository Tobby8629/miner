import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Navbar = () => {
  const [toogle, settoogle] = useState(false)
  const Links = [
    {name: 'Home', link: "/"},
    {name: 'About', link:"/about"},
    {name: 'Contact', link: "/contact"},
  ]
  return (
    <nav className={styles.nav}>
     <div className={styles.nav_toogle} onClick={()=>settoogle(!toogle)}>
        {toogle? <FontAwesomeIcon icon={faTimes} /> :  <FontAwesomeIcon icon={faBars} />}
       </div> 
       <div className={styles.nav_logo}>
        <Link to="/">
         <h1>LOGO</h1>
        </Link>
       </div>
       <div className={toogle ? styles.nav_show : styles.nav_menu}>
        {Links.map((link)=>(
         <Link to={link?.link} key={link?.name}>{link?.name}</Link>
        ))}
       </div>
    </nav>
  )
}

export default Navbar