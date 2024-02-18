import React, { useEffect, useState } from 'react'
import coins from '../../../util/coins'
import styles from './Styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CoinMarket = () => {
  const getPercentage = (current, lasthour ) => {
    const divide = lasthour / current 
    const result = lasthour / 100 > divide ? `+${parseFloat(divide).toFixed(2)}` : `-${parseFloat(divide).toFixed(2)}`
    return result
  }

  const [perview, setperview] = useState('')

  useEffect(() => {
    const checkwidth = () => {
        if(window.innerWidth >= 768) {
          setperview(3)
        }
        else {
          setperview(1)
        }
    }
    window.addEventListener('resize', checkwidth)
    checkwidth()
  },[perview])

  return (
    <section className={styles.market}> 
        <div className={styles.wrapper}>
            <h1>Crypto Market Today</h1>
            <Swiper
              modules={[ Pagination ]}
              spaceBetween={50}
              slidesPerView={perview}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={perview === 1 && { clickable: true}}
              className= {`${styles.my_swiper} my_swipper`}
            >
                {coins?.map((coin)=>(
                  <SwiperSlide className={styles.coin} key={coin?.name}>
                    <h3 className={styles.lead_header}>{coin?.name}</h3>
                    {coin?.coin?.map((e)=>
                      <div key={e?.id} className={styles.each_coin}>
                        <div className={styles.coin_name}>
                          <div>
                            <img src='../../' alt='' />
                          </div>
                          <div  className={styles.text_name}>
                            <h3>{e?.init}</h3>
                            <h3>{e?.name}</h3>
                          </div>
                        </div>
                        <div className={styles.price}>
                          <p>${e?.curent_price}</p>
                          {
                            getPercentage(e?.curent_price, e?.last_hr)?.includes("-") ? 
                            <p style={{color: 'red'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p> :
                            <p style={{color:'#09ac09'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p>
                          }
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
                {coins?.map((coin)=>(
                  <SwiperSlide className={styles.coin} key={coin?.name}>
                    <h3 className={styles.lead_header}>{coin?.name}</h3>
                    {coin?.coin?.map((e)=>
                      <div key={e?.id} className={styles.each_coin}>
                        <div className={styles.coin_name}>
                          <div>
                            <img src='../../' alt='' />
                          </div>
                          <div className={styles.text_name}>
                            <h3>{e?.init}</h3>
                            <h3>{e?.name}</h3>
                          </div>
                        </div>
                        <div className={styles.price}>
                          <p>${e?.curent_price}</p>
                           {
                            getPercentage(e?.curent_price, e?.last_hr)?.includes("-") ? 
                            <p style={{color: 'red'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p> :
                            <p style={{color:'#09ac09'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p>
                          }
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
                {coins?.map((coin)=>(
                  <SwiperSlide className={styles.coin} key={coin?.name}>
                    <h3 className={styles.lead_header}>{coin?.name}</h3>
                    {coin?.coin?.map((e)=>
                      <div key={e?.id} className={styles.each_coin}>
                        <div className={styles.coin_name}>
                          <div>
                            <img src='../../' alt='' />
                          </div>
                          <div className={styles.text_name}>
                            <h3>{e?.init}</h3>
                            <h3>{e?.name}</h3>
                          </div>
                        </div>
                        <div className={styles.price}>
                          <p>${e?.curent_price}</p>
                           {
                            getPercentage(e?.curent_price, e?.last_hr)?.includes("-") ? 
                            <p style={{color: 'red'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p> :
                            <p style={{color:'#09ac09'}}>{getPercentage(e?.curent_price, e?.last_hr)}%</p>
                          }
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default CoinMarket