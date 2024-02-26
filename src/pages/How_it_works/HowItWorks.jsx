import React from 'react'
import Header from '../../component/work/Header/Header'
import style from './HowItWorks.module.css'
import Detail from '../../component/work/Detail/Detail'
import Plans from '../../component/Home/MiningPlans/Plans'
import Procedures from '../../component/work/Procedures/Procedures'

const HowItWorks = () => {
  return (
    <section className={style.works}>
      <Header />
      <Detail />
      <div id='plans'>
        <Plans />
      </div>
      <Procedures />
    </section>
  )
}

export default HowItWorks