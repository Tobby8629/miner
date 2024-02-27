import React from 'react'
import style from './procedures.module.css'
import { Link } from 'react-router-dom'
import register from '../../../util/490748-PH5A0U-472.jpg'
import plans from '../../../util/plans.jpg'
import fund from '../../../util/fund.jpg'
import check from '../../../util/check.jpg'
import withdraw from '../../../util/withdraw.jpg'
import rollover from '../../../util/rollover.jpg'

const Procedures = () => {

  const procedures = [
    {
      title: "Registration",
      desc: `To embark on the journey of unlocking your digital wealth, 
      the initial step is to register at CryptoGland. Here, you'll find 
      diverse mining opportunities awaiting you. To commence, kindly visit 
      our`,
      link: <Link to='/registration'>sign up page</Link>,
      vector: register
    },
    {
      title: "Choose Investment Plan",
      desc: ` 
      After signing in, navigate to the profile page. 
      There, click on the "Start Investment" button to select an investment plan and provide additional information.`,
      link: <a href='#plans' >Checkout our Investment plans</a>,
      vector: plans
     },
     {
      title: 'funding your wallet',
      desc: `To fund your Crypto Gland wallet for investment, purchase trade coin through 
      platforms such as Coinbase, Trust Wallet, or Crypto.com, and transfer it into your crypto wallet.`,
      vector: fund
     },
     {
      title: 'Profile check',
      desc: `Monitor your investment progress and count down the business days until your investment plan matures,
       at which point you can collect both your ROI and the initial capital. `,
       vector: check
     },
     {
      title: 'withdrawal',
      desc: `Upon investment maturity, the withdrawal button activates. Clicking it initiates the 
      transfer of your ROI and capital to your crypto wallet, typically within 10-30 minutes.`,
      vector: withdraw
     }, 
     {
      title: 'Rollovers',
      desc: `On investment expiration the withdraw button becomes active, on click on the withdrawal button your ROI
      from the investment plan and capital will be withdrawn and sent to your cryto wallet. This process takes about 10 -30 mins`,
      vector: rollover
    }   
  ]

  return (
    <section className={style.procedure}>
      <h2>How to Get Started <span className='dot'></span></h2>
      <main className={style.wrapper}>
        {procedures.map(procedure =>(
          <div className={style.each}>
            <div className={style.image}>
              <img src={procedure?.vector} alt={procedure?.title} />
            </div>
            <div className={style.text}>
              <h3>{procedure?.title}</h3>
              <p>{procedure?.desc} {procedure?.link}</p>
            </div>
          </div>
        ))}
      </main>    
    </section>
  )
}

export default Procedures