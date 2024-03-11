import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = ({setactivetab}) => {
  const [toggle, settoggle] = useState(false)
  const openbar = () => settoggle(true)
  const closebar = () => settoggle(false)
  const activateTab = (tab,e) => {
    setactivetab(tab)
    closebar()
  }
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
        <ul>
          <li onClick={(e)=>activateTab("dashboard",e)}>Dashboard</li>
          <li onClick={(e)=>activateTab("invest",e)}>Invest</li>
          <li onClick={(e)=>activateTab("deposit",e)}>Deposit funds</li>
          <li onClick={(e)=>activateTab("withdrawals",e)}>Withdrawals</li>
          <li onClick={(e)=>activateTab()}>logout</li>
        </ul>
        <button>
            <Link to='/'>Back to Homepage</Link>
        </button>
      </div> 
    </section>
  )
}

export default Sidebar