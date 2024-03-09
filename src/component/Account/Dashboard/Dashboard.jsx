import React from 'react'
import style from './Dashboard.module.css'
import Box from './Box'
import wallet from '../../../util/wallet.png'
import users from '../../../util/users.svg'
import active from '../../../util/active.jpg'
import withdrawal from '../../../util/withdrawal.jpg'
import total_return from '../../../util/totaldepo.jpg'
import depo from '../../../util/totaldep.jpg'


const Dashboard = () => {
  return (
    <section className={style.dashboard}>
      <h2>Dashboard</h2>
      <main className={style.box_wrapper}>
        <Box image={wallet} alt='balance'  amount="2200 USD"/>
        <Box image={users} alt='Referral Earning'  amount="2200 USD"/>
        <Box image={active} alt='active investment' amount="2200 USD"/>
        <Box style={{color: '#17b917'}} image={withdrawal} alt='total withdrawal' amount="2200 USD" className={style.inverse}/>
        <Box style={{color: '#f3d429'}} image={depo} alt='total deposit' amount="2200 USD" className={style.inverse}/>
        <Box style={{color: '#0ca9f7'}} image={total_return} alt='total return' amount="2200 USD" className={style.inverse}/>
      </main>
    </section>
  )
}

export default Dashboard