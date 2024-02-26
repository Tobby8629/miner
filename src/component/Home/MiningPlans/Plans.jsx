import React from 'react'
import styles from './Plans.module.css'
import { plan } from '../../Helpers/Helpers'

const Plans = () => {
  return (
    <section className={styles.plans}>
        <h2 className={styles.lead_text}>Mining Plans <span className='dot'></span></h2>
        <div className={styles.wrapper}>
          {plan?.map((plan)=>(
            <div key={plan?.miner} className={styles.each}>
              <h2>{plan?.miner}</h2>
              <p>{plan?.duration}</p>
              <p className={styles.amount}>{plan?.amount}</p>
              <p></p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Plans