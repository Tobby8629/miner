import React from 'react'
import style from './Invest.module.css'

const Invest = () => {
  const plans = [
    {percentage:20,duration: "720 days", miner:"Antminer S19 XP Hydro. (255TH)", min: "$15000", max:"$1,000,000"},
    {percentage:15,duration: "360 days", miner: "Bitmain Antminer S19 XP (140Th)", min:"$7999", max:"$700,00"},
    {percentage:10,duration:" 180 days", miner: "WhatsMiner M30S++ (112 TH)", min:"$4999", max:"$70,000"},
    {percentage: 7.5, duration: "10 days", miner: "MicroBT WhatsMiner M56S. (50TH)", min:"$99", max:"$2,999"}
  ]
  return (
    <section className={style.invest}>
      <h1>Start Investing</h1>
       <main>
          {plans?.map((plan)=>(
            <div key={plan?.miner} className={style.card}>
              <h2>{plan?.miner}</h2>
              <p>{plan?.percentage}%</p>
              <p>Min: {plan?.min}</p>
              <p>Max: {plan?.max}</p>
              <p>{plan?.duration}</p>
              <div className={style.input}>
                <p className={style?.sign}>$</p>
                <input
                placeholder='enter amount'
                />
                <p className={style.currency}>USD</p>
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