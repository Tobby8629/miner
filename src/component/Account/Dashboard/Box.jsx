import React from 'react'
import style from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = ({image, alt, iconstyle, amount, children, className, style: inlineStyle}) => {
  return (

    <div className={`${style.box} ${className}`}>
      <div className={style.boximg} style={iconstyle}> 
        <FontAwesomeIcon icon={image} />
      </div>
      <div className={style.boxname}>
        <p className={style.price} style={inlineStyle}>{amount}</p>
        <p className={style.name} style={inlineStyle}>{alt}</p>
      </div>
      {children}
    </div>
  )
}

export default Box