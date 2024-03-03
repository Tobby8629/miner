import React from 'react'
import style from './Dashboard.module.css'

const Box = ({image, alt, amount, children, className, style: inlineStyle}) => {
  return (

    <div className={`${style.box} ${className}`}>
      <div className={style.boximg}> 
        <img src={image} alt={alt} />
      </div>
      <div className={style.boxname}>
        <p className={style.price} style={inlineStyle}>{amount}</p>
        <p>{alt}</p>
      </div>
      {children}
    </div>
  )
}

export default Box