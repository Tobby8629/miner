import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = ({setactivetab}) => {
  const [toggle, settoggle] = useState(false)
  const openbar = () => settoggle(true)
  const closebar = () => settoggle(false)
  const activateTab = (tab) => {
    setactivetab(tab)
    closebar()
  }
  return (
    <section className={style.sidebar}>
      <div className={style.nav_toogle} onClick={openbar}>
       <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${style.nav_tray} ${toggle ? style.show : ''}`}>
        <div className={style.X}>
            <FontAwesomeIcon icon={faTimes} onClick={closebar}/> 
        </div>
        <ul>
          <li onClick={()=>activateTab("dashboard")}>Dashboard</li>
          <li onClick={()=>activateTab("invest")}>Invest</li>
          <li onClick={()=>activateTab("deposit")}>Deposit funds</li>
          <li onClick={()=>activateTab("withdrawals")}>Withdrawals</li>
          <li onClick={()=>activateTab()}>logout</li>
        </ul>
        <button>
            <Link to='/'>Back to Homepage</Link>
        </button>
      </div> 
    </section>
  )
}

export default Sidebar