import React from 'react'
import style from './Invest.module.css'
import { plans } from '../../Helpers/Helpers'

const Invest = () => {
 
  return (
    <section className={style.invest}>
      <h1>Start Investing</h1>
       <main className={style.wrapper}>
          {plans?.map((plan)=>(
            <div key={plan?.miner} className={style.card}>
              <h2>{plan?.name} <span className={style.white}>X{plan?.repeat}</span></h2>
              <div className={style.attr}>
                <p><span className={style.bold}>Hardware: </span>{plan?.miner} <span className={style.green}>{plan?.range}</span></p>
                <p><span className={style.bold}>referral bonus: </span>{plan?.referral}%</p>
                <p className={style.duration}><span className={style.bold}>duration: </span>{plan?.duration}</p>
                <p><span className={style.bold}>Min:</span> {plan?.min}</p>
                <p><span className={style.bold}>Max:</span> {plan?.max}</p>
                <p><span className={style.bold}>ROI: </span>{plan?.percentage}% daily</p>
              </div>
              <div className={style.input_wrapper}>
                <div className={style.input}>
                  <p className={style?.sign}>$</p>
                  <input
                  placeholder='enter amount'
                  />
                  <p className={style.currency}>USD</p>
                </div>
              </div>
              <div className={style.btn}>
                <button>Invest Now</button>
              </div>
            </div>
          ))}
       </main>
    </section>
  )
}

export default Invest