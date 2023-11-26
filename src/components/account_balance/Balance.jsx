import { useState, useRef } from 'react';
import styles from './balance.module.css'
import Naira from '../currencies/Naira';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const AccountBalance = () => {
  const [visible, setVisible] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;

      if (difference > 50) {
        console.log('Swiped left');
      } else if (difference < -50) {
        console.log('Swiped right');
      }
    }

    // Reset touch X values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  
  return (
    <>
    <div 
      className={styles.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.flag}>
        <span className="fi fi-ng"></span>NGN
      </div>
      <div className={styles.balance}>
        <div>
          <small>Available balance</small>
          <h2>{visible ? <Naira amount={5000}/> : 'XXXXXXXXX'}</h2>
        </div>
        <button 
          onClick={() => setVisible(prev => !prev)}
          className='reset_btn'
          > 
          <img 
            src={visible ? 'eye-slash.svg' : 'eye.svg'} 
            alt=""
             />{visible ? 'Hide' : 'Show'}
          </button>
      </div>
      <div  className={styles.icons}>
        <div>
          <a href=""><img src="send.svg" alt="" /></a>
          <p>Send</p>
        </div>
        <div>
          <a href=""><img src="recieve.svg" alt="" /></a>
          <p>Recieve</p>
        </div>
        <div>
          <a href=""><img src="exchange.svg" alt="" /></a>
          <p>Exchange</p>
        </div>
      </div>

      <div className={styles.pending_balance}>
        <p>
          Pending balance: 
          <Naira amount={5000}/>
        </p>
      </div>
    </div>
  </>
  )
}

export default AccountBalance;