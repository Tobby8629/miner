import React from 'react'
import styles from './Benefit.module.css'

const Benefit = () => {
  const benefit = [
      {title: "High Mining Efficiency", details: "Our firm boost efficiency via optimized hardware, software, and processes, deploying ASIC miners, and fine-tuning operations, enhancing profitability for both the company and customers in mining pools."},
      {title: "Reliable Network Participation", details: "By maintaining a dependable presence in the blockchain network, we cultivate trust among customers, contributing to the stability and reliability of the cryptocurrency network as a whole."},
      {title: "Transparent Operations", details: "At Crypto Gland, transparency is paramount. We offer clear reporting on hash rates, mining rewards, costs, and energy usage, demonstrating our commitment to openness and accountability in all operations"},
      {title: "Sustainable and Eco-Friendly Practices", details: "CryptoGland embraces sustainability with renewable energy, energy-efficient hardware, and carbon footprint reduction, affirming our commitment to eco-friendly practices within the crypto industry."}
  ]
  return (
    <section className={styles.benefit}>
        <h2 className={styles.header_text}>Why Choose Crypto Gland?</h2>
        <div className={styles.flex}>
          <div className={styles.benefits}>
            {benefit?.map((benefit)=>(
              <div key={benefit?.title} className={styles.each_benefit}>
                <h3>{benefit?.title}</h3>
                <p>{benefit?.details}</p>
              </div>
            ))}
          </div>
          <div className={styles.img}>
            <p>Picture</p>
          </div>
        </div>
    </section>
  )
}

export default Benefit