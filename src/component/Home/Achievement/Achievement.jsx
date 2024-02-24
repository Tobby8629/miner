import React from 'react'
import styles from './achievemeny.module.css'
import { achievement } from '../../Helpers/Helpers'

const Achievement = () => {
  return (
    <section className={styles.container}>
      {achievement.map((achievement)=>(
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            {achievement?.icon}
          </div>
          <p className={styles.achieve}>{achievement?.achievement}+</p>
          <p className={styles.text}>{achievement?.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Achievement