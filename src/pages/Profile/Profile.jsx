import React from 'react'
import style from './Profile.module.css'
import Sidebar from '../../component/Account/sidebar/Sidebar'

const Profile = () => {
  return (
    <section className={style.profile}>
       <div className={style.wrapper}>
         <Sidebar />
       </div>
    </section>
  )
}

export default Profile