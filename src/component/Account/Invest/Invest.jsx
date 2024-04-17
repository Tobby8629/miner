import React from 'react'
import style from './Invest.module.css'

const Invest = () => {
  const plans = [
    {name: "Pro 255T/TH", repeat:1,  referral: 20,percentage:25,duration: "720 days", miner:"Antminer S19", range: 'XP Hydro', min: "$15000", max:"$1,000,000"},
    {name: "Ultra 140T/TH", repeat:1, referral:15 ,percentage:20,duration: "360 days", miner: "Bitmain Antminer S19", range: 'XP', min:"$7999", max:"$700,00"},
    {name: "Gland 5G 112T/TH", repeat:2, referral: 10,percentage:15,duration:" 180 days", miner: "WhatsMiner", range: 'M30s++', min:"$4999", max:"$70,000"},
    {name: "Hydro 4G 192T/TH", repeat:1, referral: 10,percentage: 10, duration: "90 days", miner: "MicroBT", range: 'M56s', min:"$2,999", max:"$35,000"},
    {name: "3G Fast 90T/TH", repeat:2, referral: 5,percentage:2.5,duration:" 10 days", miner: "AntMiner", range: 'M36s', min:"$99", max:"$1,970"},
    {name: "AI Cloud 5G", repeat:1, referral: 5,percentage: 5, duration: "45 days", miner: "MicroBT", range: 'Pro3', min:"unlimited", max:"unlimited"}
  ]
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