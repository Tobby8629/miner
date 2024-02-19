import React from 'react'
import styles from './Plans.module.css'

const Plans = () => {
  const plan = [ 
    {duration: "720 days", miner:"Antminer S19 XP Hydro. (255TH)", amount: "$15000-$1,000,000"},
    {duration: "360 days", miner: "Bitmain Antminer S19 XP (140Th)", amount:"$7999-$700,00"},
    {duration:" 180 days", miner: "WhatsMiner M30S++ (112 TH)", amount:"$4999-$70,000"},
    {duration: "10 days", miner: "MicroBT WhatsMiner M56S. (50TH)", amount:"$99-$2,999"}
  ]
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