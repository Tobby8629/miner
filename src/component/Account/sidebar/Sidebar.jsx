import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [toggle, settoggle] = useState(false)
  const openbar = () => settoggle(true)
  const closebar = () => settoggle(false)
  return (
    <section className={style.sidebar}>
        <div className={style.flex}>
          <h2>Crypto Gland <span className='dot'></span></h2>
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
            <NavLink to='dashboard' activeClassName={style.active}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='invest' activeClassName={style.active}>Invest</NavLink>
          </li>
          <li>
            <NavLink to='deposit' activeClassName={style.active}>Deposit funds</NavLink>
          </li>
          <li>
            <NavLink to='withdrawals' activeClassName={style.active}>Withdrawals</NavLink>
          </li>
          <li>logout</li>
        </ul>
        <button>
            <Link to='/'>Back to Homepage</Link>
        </button>
      </div> 
    </section>
  )
}

export default Sidebar