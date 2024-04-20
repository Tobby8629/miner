import React, { useState } from 'react'
import styles from './Faq.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Faq() {

 const faq = [
  {
    id: 5,
    open: false,
    question: "What do we do at crypto Gland?",
    answer: `
    Here, we generate wealth mining crypto
    Trusted by over 872 customers and counting
    `
  },
    {
     id: 1,
     open: false,
     question: "What is Crypto Gland?",
     answer:`Crypto gland is a cryptocurrency mining agency. At Crypto gland, we bear the burden of cryptocurrencies mining and generating acknowledging that it is quite tasking and a burden for crypto-enthusiast to mine owing to dynamic parameter that adjusts over time in response to changes in network hash rate, algorithm complexity, Block Reward Adjustment amongst other.
     Thus, our mission is to make acquiring cryptocurrencies easy and fast for everyone.`,
     },
     {
      id: 2,
      open: false,
      question: "Why choose Crypto Gland",
      answer:`At Crypto gland, we offer over 10 minable cryptocurrencies
      We have been serving customers from more than 50 countries and counting
      We offer optimal performance at affordable low-cost rate
      Our customer care service is actively responsive, No BOT, request and complaints attended to in less than 8 hours of real time.
      It is cost effective, no need to buy equipment as we have a power house that runs one of the most advanced bitcoin mining by reputed experts. No associated risk or headache, we bear the burden, you buy the token.
      Our teams are industry experts and transactions are in form of blockchain. In other words, our transactions are in detailed statistics where you get mining data
      We have a strong data security and user privacy protection system.
      We are transparent so you see the live bitcoin mining proceedings.
      Easy to register with your bitcoin wallet address and it is somewhat spontaneous.`,
    },
    {
      id: 3,
      open: false,
      question: "Why are cryptocurrencies worth owing?",
      answer:`Cryptocurrencies operate on decentralized network based on blockchain technology, void of any form of centralized system and manipulations, providing transparency, privacy and security.
      They facilitate easy financial system based on simply internet facilitate borderless and/or peer-to-peer transaction.
      It offers lower transaction fees which saves cost.
      The emergence of cryptocurrencies spurred significant innovation in financial technology and blockchain operations such as decentralized finance (DeFi) platforms, non-fungible tokens (NFTs), smart contracts, and other decentralized applications (dApps) engineering nouvel transaction via digital asset.`
    },
    {
      id: 4,
      open: false,
      question: "Why Invest Crypto Gland?",
      answer: `
      Investing in Crypto gland offers exposure to the cryptocurrency market 
      without directly acquiring digital assets. This indirect approach allows
       participation in potential industry growth while diversifying investment 
       portfolios. With advanced infrastructure and expertise, 
       Crypto gland's large-scale mining operation in Iceland capitalizes on
        cost advantages, renewable energy, and favorable regulations, e
        nsuring profitability and stability.`
    },
 ]

 const [tray, settray] = useState(faq)

 const opentray = (id) => {
   settray ((prev)=> (
    prev.map((e)=> {
      if (e.id === id) {
        return {...e, open: !e.open};
      }
    return e;
    })
   ))
 }

  return (
   <section className={styles.faq}>
    <h3>Frequently asked questions</h3>
    <div className={styles.wrapper}>  
    <div className={styles.faq_wrapper}>
      {tray.map((e,index)=>(
        <div className={styles.faq_wrap} key={e.id}  onClick={()=>opentray(e.id)}>
          <div className={styles.faq_top}>
            <h4>{e.question}</h4> 
            { e.open ? < FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/> }
          </div>
          {e.open ? <p>{e.answer}</p> : null}
        </div>
      ))}
    </div>
    </div>
   </section>
  )
}

export default Faq


//07035234995