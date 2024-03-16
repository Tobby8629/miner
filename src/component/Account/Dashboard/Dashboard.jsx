import React from 'react'
import style from './Dashboard.module.css'
import Box from './Box'
import wallet from '../../../util/wallet.png'
import users from '../../../util/users.svg'
import active from '../../../util/active.jpg'
import withdrawal from '../../../util/withdrawal.jpg'
import total_return from '../../../util/totaldepo.jpg'
import depo from '../../../util/totaldep.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import Returns from './Returns'


const Dashboard = () => {
  return (
    <section className={style.dashboard}>
      <h1> Welcome Back</h1>
      <main className={style.balance}>
        
      </main>
      {/* <main className={style.box_wrapper}>
        <Box image={wallet} alt='balance'  amount="2200 USD"/>
        <Box image={users} alt='Referral Earning'  amount="2200 USD"/>
        <Box image={active} alt='active investment' amount="2200 USD"/>
        <Box style={{color: '#17b917'}} image={withdrawal} alt='total withdrawal' amount="2200 USD" className={style.inverse}/>
        <Box style={{color: '#f3d429'}} image={depo} alt='total deposit' amount="2200 USD" className={style.inverse}/>
        <Box style={{color: '#0ca9f7'}} image={total_return} alt='total return' amount="2200 USD" className={style.inverse}/>
        <div className={style.referral}>
          <h2>Referral Link</h2>
          <div className={style.copylink}>
            <p>https://investors.metahashminingltd.com/register?ref=lucas</p>
            <button>
              <FontAwesomeIcon icon={faCopy} />
              <span>Copy link</span>
            </button>
          </div>
        </div>
        <Returns />
      </main> */}
    </section>
  )
}

export default Dashboard