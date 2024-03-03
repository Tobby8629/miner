import React, { useState } from 'react'
import style from './Profile.module.css'
import Sidebar from '../../component/Account/sidebar/Sidebar'
import Dashboard from '../../component/Account/Dashboard/Dashboard'
import Invest from '../../component/Account/Invest/Invest'
import Deposit from '../../component/Account/Deposit/Deposit'
import Withdrawals from '../../component/Account/withdrawals/Withdrawals'

const Profile = () => {
  const [activetab, setactivetab] = useState('')
  const renderactivetab = () => {
    switch (activetab) {
      case "dashboard": return <Dashboard />;
      case "invest": return <Invest/>;
      case "deposit": return <Deposit/>;
      case "withdrawals": return <Withdrawals/>;
      default:
        return <Dashboard />;
    }
  }
  return (
    <section className={style.profile}>
       <div className={style.wrapper}>
         <Sidebar setactivetab={setactivetab}/>
         <div className={style.tab_wrapper}>
            {renderactivetab()}
         </div>
       </div>
    </section>
  )
}

export default Profile