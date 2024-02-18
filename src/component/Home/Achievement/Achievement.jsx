import { faCoins, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './achievemeny.module.css'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

const Achievement = () => {
  const achievement = [
    { achievement: 50, text: 'participating countries', icon: <FontAwesomeIcon  icon={faGlobe}/>},
    { achievement: 872, text: 'Active miners', icon: <FontAwesomeIcon icon={faUsers}/>},
    { achievement: 10, text: ' minable coins', icon: <FontAwesomeIcon  icon={faCoins}/>},
    { achievement: 150, text: 'Transaction volume', icon: <FontAwesomeIcon  icon={faCheckCircle}/>}
  ]
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