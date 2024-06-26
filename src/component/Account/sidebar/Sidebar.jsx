import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [toggle, settoggle] = useState(false)
  const openbar = () => settoggle(true)
  const closebar = () => settoggle(false)
  const navigate = useNavigate()
  const signOut = () => {
    sessionStorage.clear()
    navigate('/login', {replace: true})
  }
  return (
    <section className={style.sidebar}>
        <div className={style.flex}>
          <Link to='/'>Crypto Gland <span className='dot'></span></Link>
        </div>
        <div className={style.nav_toogle} onClick={openbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
    
      <div className={`${style.nav_tray} ${toggle ? style.show : ''}`}>
        <div className={style.X}>
            <FontAwesomeIcon icon={faTimes} onClick={closebar}/> 
        </div>
        <ul onClick={closebar}>
          <li>
            <NavLink to='dashboard' className="sides">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='invest' className="sides">Invest</NavLink>
          </li>
          <li>
            <NavLink to='deposit' className="sides">Deposit funds</NavLink>
          </li>
          <li>
            <NavLink to='withdrawals' className="sides">Withdrawals</NavLink>
          </li>
          <li onClick={signOut}>logout</li>
        </ul>
        <button>
            <Link to='/'>Back to Homepage</Link>
        </button>
      </div> 
    </section>
  )
}

export default Sidebar