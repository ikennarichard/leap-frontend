import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './balance.module.css'
import * as l from '../utils/utils';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { nanoid } from '@reduxjs/toolkit';

const AccountBalance = () => {
  const [visible, setVisible] = useState(false);
  const accounts = useSelector(state => state.account.accounts);

  return (
    <div className='swiper-container'>
    <Swiper
      pagination={{
        dynamicBullets: false,
        el: '.custom-pagination-position'
      }}
      modules={[Pagination]}
    >
    {
      Object.keys(accounts).map((acc) => (

        <SwiperSlide
          key={nanoid()}
        >
        <div 
        className={styles.container}
        
          >
        <div className={styles.flag}>
          <span className={`fi fi-${accounts[acc].countryCode}`}></span>
          {accounts[acc].currencyCode}
        </div>
        <div className={styles.balance}>
          <div>
            <small>Available balance</small>
            <h2>
              {visible ? l.getAmountByCurrencyType(accounts[acc].currency, 
              accounts[acc].balance) 
            : 'XXXXXXXXX'}
            </h2>
          </div>
          <button 
            onClick={() => setVisible(prev => !prev)}
            className={`reset_btn ${styles['show-hide-btn']}`}
            > 
            <img 
              src={visible ? 'eye-slash.svg' : 'eye.svg'} 
              alt=""
              />{visible ? 'Hide' : 'Show'}
            </button>
        </div>
        <div  className={styles.icons}>

            <Link 
              className={`reset-link ${styles['transfer-link']}`}
              to='transfer'
            >
              <img src="send.svg" alt="" />
              <p>Transfer</p>
            </Link>
            
          
          <div>
            <div><img src="exchange.svg" alt="" /></div>
            <p>Exchange</p>
          </div>
        </div>
      </div>
      </SwiperSlide>
      ))
    }
    </Swiper>
    <div className='custom-pagination-position'></div>
    </div>
  )
}

export default AccountBalance;