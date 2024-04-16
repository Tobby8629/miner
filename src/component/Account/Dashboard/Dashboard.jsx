import React from 'react'
import style from './Dashboard.module.css'
import Box from './Box'
import wallet from '../../../util/wallet.png'
import users from '../../../util/users.svg'
import active from '../../../util/active.jpg'
import withdrawal from '../../../util/withdrawal.jpg'
import total_return from '../../../util/totaldepo.jpg'
import depo from '../../../util/totaldep.jpg'
import analtics from '../../../util/analytics.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import Returns from './Returns'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
  return (
    <section className={style.dashboard}>
      <h1> Welcome Back</h1>
      <main className={style.balance}>
        <section className={style.dashboardbox}>
          <div className={style.wallet}>
            <h3>main wallet</h3>
            <p className={style.bal}>Balance</p>
            <div className={style.input}>
              <p className={style.amt}>$53,968USD</p>
              <div className={style.slash}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            </div>
          </div>
          <div>
            <Link className={style.dashboardLink}>
              <p>Deposit</p>
              <div className={style.icon}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Link>
            <Link className={style.dashboardLink}>
              <p>Withdraw</p>
              <div className={style.icon}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Link>
          </div>
        </section>
        <section className={style.refer}>
          <div className={style.return_info}>
            <div className={style.analtic}>
              <img src={analtics} alt='daily roi' />
            </div>
            <div className={style.roi}>
              <p>Daily ROI</p>
              <p>+3,322</p>
            </div>
          </div>
        </section>
      </main>
      <main className={style.box_wrapper}>
        <Box image={users} alt='Referral Earning'  amount="2200 USD"/>
        <Box image={active} alt='active investment' amount="2200 USD"/>
        <Box style={{color: '#17b917'}} image={withdrawal} alt='total withdrawal' amount="2200 USD" className={style.inverse}/>
        <Box style={{color: '#f3d429'}} image={depo} alt='total deposit' amount="2200 USD" className={style.inverse}/>
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
      </main>
    </section>
  )
}

export default Dashboard