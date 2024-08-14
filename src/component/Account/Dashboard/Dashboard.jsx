import React from 'react'
import style from './Dashboard.module.css'
import Box from './Box'
import analtics from '../../../util/analytics.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import Returns from './Returns'
import { Link } from 'react-router-dom'
import { faArrowLeft, faArrowRight, faChartColumn, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useDashboardQuery } from '../../../Redux/api/apiSlice'
import { sessionToken } from '../../Helpers/Helpers'


const Dashboard = () => {
  const token = sessionToken()
  console.log(token)
  const {data: dashboard, isLoading, error } = useDashboardQuery(token ,{skip: !token,});
  console.log(dashboard)
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
        <Box iconstyle={{color: 'rgb(184, 165, 61)' }}  image={faUsers} alt='Referral Earning'  amount="2200 USD"/>
        <Box iconstyle = {{color: 'rgb(47 62 179)'}} image={faChartColumn} alt='active investment' amount="2200 USD"/>
        <Box iconstyle={{color: '#39db39'}} image={faArrowRight} alt='total deposit' amount="2200 USD" className={style.inverse}/>
        <Box iconstyle = {{color: '#ff2727'}} image={faArrowLeft} alt='total withdrawal' amount="2200 USD" className={style.inverse}/>
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