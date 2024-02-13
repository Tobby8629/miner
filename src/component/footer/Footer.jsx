import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.main}>
       <p className={styles.text}>Meta Hash Mining is a fast-growing cryptocurrency investment company. We're dedicated to helping people worldwide achieve financial goals and freedom through investing and managing finances effectively.</p>
        <p className={styles.reserve}>© All right reserved 2024. </p>
         <p className={styles.comp}>Meta Hash Mining - Investments.</p>
      </div>
    </section>
  )
}

export default Footer