import React from 'react'
import style from './Header.module.css'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className={style.header}>
      <main className={style.main}>
        <h2 className={style.headerText}>How Crypto gland works <span className='dot1'></span></h2>
        <p>Are you seeking a reputable investment firm offering outstanding investment opportunities?</p>
        <p className={style.small}> Start investing with us at Crypto Gland</p>
        <div className={style.button}>
          <button>
            <Link to="/registration"> Get start </Link>
          </button>
        </div>
      </main>
    </section>
  )
}

export default Header