import React from 'react'
import styles from './Plans.module.css'
import { plans } from '../../Helpers/Helpers'

const Plans = () => {
  return (
    <section className={styles.plans}>
        <h2 className={styles.lead_text}>Mining Plans <span className='dot'></span></h2>
        <div className={styles.wrapper}>
          {plans?.map((plan)=>(
            <div key={plan?.miner} className={styles.each}>
              <h2>{plan?.name}</h2>
                <p><span className={styles.bold}>referral bonus: </span>{plan?.referral}%</p>
                <p className={styles.duration}><span className={styles.bold}>duration: </span>{plan?.duration}</p>
                <p><span className={styles.bold}>Min:</span> {plan?.min}</p>
                <p><span className={styles.bold}>Max:</span> {plan?.max}</p>
                <p><span className={styles.bold}>ROI: </span>{plan?.percentage}% daily</p>
            
              <p></p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Plans