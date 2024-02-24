import { faCoins, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export const achievement = [
    { achievement: 50, text: 'participating countries', icon: <FontAwesomeIcon  icon={faGlobe}/>},
    { achievement: 872, text: 'Active miners', icon: <FontAwesomeIcon icon={faUsers}/>},
    { achievement: 10, text: ' minable coins', icon: <FontAwesomeIcon  icon={faCoins}/>},
    { achievement: 150, text: 'Transaction volume', icon: <FontAwesomeIcon  icon={faCheckCircle}/>}
  ]

export const benefit = [
    {title: "High Mining Efficiency", details: "Our firm boost efficiency via optimized hardware, software, and processes, deploying ASIC miners, and fine-tuning operations, enhancing profitability for both the company and customers in mining pools."},
    {title: "Reliable Network Participation", details: "By maintaining a dependable presence in the blockchain network, we cultivate trust among customers, contributing to the stability and reliability of the cryptocurrency network as a whole."},
    {title: "Transparent Operations", details: "At Crypto Gland, transparency is paramount. We offer clear reporting on hash rates, mining rewards, costs, and energy usage, demonstrating our commitment to openness and accountability in all operations"},
    {title: "Sustainable and Eco-Friendly Practices", details: "CryptoGland embraces sustainability with renewable energy, energy-efficient hardware, and carbon footprint reduction, affirming our commitment to eco-friendly practices within the crypto industry."}
]

export const plan = [ 
    {duration: "720 days", miner:"Antminer S19 XP Hydro. (255TH)", amount: "$15000-$1,000,000"},
    {duration: "360 days", miner: "Bitmain Antminer S19 XP (140Th)", amount:"$7999-$700,00"},
    {duration:" 180 days", miner: "WhatsMiner M30S++ (112 TH)", amount:"$4999-$70,000"},
    {duration: "10 days", miner: "MicroBT WhatsMiner M56S. (50TH)", amount:"$99-$2,999"}
]

// export const procedures = [
//     {title: "Registration", desc: `To embark on the journey of unlocking 
//       your digital wealth, the initial step is to register at CryptoGland.
//       Here, you'll find diverse mining opportunities awaiting you. 
//       To commence, kindly visit our.${<Link to='/registration'>sign up </Link>}page`, vector: ''
//     },
// ]



// const procedures = [
  // {
  //   title: "Registration",
  //   desc: `To embark on the journey of unlocking your digital wealth, 
  //   the initial step is to register at CryptoGland. Here, you'll find 
  //   diverse mining opportunities awaiting you. To commence, kindly visit 
  //   our`,
  //   link: <Link to='/registration'>sign up page</Link>,
  //   vector: ''
  // },
//   {title: ''}
// ]