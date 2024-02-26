import React from 'react'
import styles from './Benefit.module.css'
import { benefit } from '../../Helpers/Helpers'

const Benefit = () => {
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