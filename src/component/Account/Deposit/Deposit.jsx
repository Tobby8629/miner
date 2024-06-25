import React, { useState } from 'react'
import style from './deposit.module.css'
import Popup from 'reactjs-popup';
import cryptoD from '../../../util/cryptoD.jpg'
import cryptoDD from '../../../util/cryptoDD.jpg'

const Deposit = () => {
  const [open,setopen] = useState(false)
  const openModal = () => setopen(!open);
  const closeModal = () => setopen(false);
  return (
    <section className="dashboard_tab">
       <h1 className='dashboard_header'>Deposit</h1>
       <main className={style.wrapper}>
          <h2 className={style.methodheader}>Deposit Methods</h2>
          <div className={style.methods}>
            <div className={style.method}>
              <div className={style.methodlogo} onClick={openModal}>
                <img src={cryptoD} alt='crypto deposit' />
                <p>Crypto Deposit(BTC)</p>
              </div>
              <div>
                <Popup open={open} className="method_pop" closeOnDocumentClick onClose={closeModal}>
                 <button onClick={closeModal}>X</button>
                  <h1>Just testing</h1>
                </Popup>
              </div>
            </div>
          </div>
       </main>
    </section>
  )
}

export default Deposit