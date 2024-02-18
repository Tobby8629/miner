import React from 'react'

const Plans = () => {
  const plan = [ 
    {duration: "720 days", miner:"Antminer S19 XP Hydro. (255TH)", amount: "$15000-$1,000,000"},
    {duration: "360 days", miner: "Bitmain Antminer S19 XP (140Th)", amount:"$7999-$700,00"},
    {duration:" 180 days", miner: ":WhatsMiner M30S++ (112 TH)", amount:"$4999-$70,000"},
    {duration: "10 days", miner: "MicroBT WhatsMiner M56S. (50TH)", amount:"$99-$2,999"}
  ]
  return (
    <section>
        <h2>Mining Plans</h2>
        <div>
          {plan?.map((plan)=>(
            <div key={plan?.miner}>
              <h2>{plan?.miner}</h2>
              <p>{plan?.amount}</p>
              <p>{plan?.duration}</p>
              <p></p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Plans