import styles from './transactionTracker.module.css';
import { useLocation } from 'react-router-dom';
import * as l from '../utils/utils'
import { useEffect, useState } from 'react';


const TransactionTracker = () => {
  const [status, setStatus] = useState('Pending...');
  const { state } = useLocation();

  // details of the transaction
  const t = {
    ...state,
  }

  const statusList = ['Success', 'Failed'];
  const randomIndex = Math.floor(Math.random() * 
  statusList.length);

  useEffect(() => {
    if(status == 'failed' || status == 'success') return;

    setTimeout(() => {
      setStatus(statusList[randomIndex]);
    }, 5000)
    return () => {
      clearTimeout();
    }
  }, [])


  return (
    <div className={styles.transaction_container}>
      <div className={styles.heading_container}>
        <div className={styles.transaction_heading}>
          <small>Bank Transfer</small>
          <strong>
            {l.getAmountByCurrencyType(t.transactionCurrency, 
            t.amount)}
          </strong>
        </div>
          <img src="/transactions/transfer.svg" alt="" />
      </div>
      <hr className={styles.hr_line}/>

      <ul className={styles.transaction_list}>
        <li>
          <small>Date & Time</small> 
          <span>
            {l.formatDate(new Date(t.transactionDate))}
          </span>
        </li>
        <li>
          <small>Transaction type</small>
          <span>Transfer</span>
        </li>
        <li>
          <small>Transaction fees</small>
          <span>
            {
              l.calculateTransactionFee(t.transactionType, 
              t.transactionCurrency, t.amount)
            }
            </span>
        </li>
        <li>
          <small>Reference</small> 
          <span>{t.referenceNumber}</span>
        </li>
        <li>
          <small>Status</small>
          <span>Success</span>
        </li>
      </ul>

      <button className={`${styles.share_receipt} reset_btn`}>
        <img src="/export.svg" alt="" />
        Share Receipt
      </button>
    </div>

 
  )
}

export default TransactionTracker;