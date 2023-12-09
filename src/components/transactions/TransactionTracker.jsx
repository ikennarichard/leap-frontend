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
          <img src={t.transactionType === 'credit' ? 
          '/transactions/transfer.svg' : '/transactions/payment.svg'} 
          alt="" 
          />
      </div>
      <hr className={styles.hr_line}/>

      <ul className={styles.transaction_list}>
        {
          t.transactionType === 'debit' ? 
          <>            
            <li>
              <small>Recipient Name</small>
              <span>{t.recipientName}</span>
            </li>

            <li>
              <small>Recipient Bank</small>
              <span>{t.recipientBank}</span>
            </li>

            <li>
              <small>Recipient Country</small>
              <span>{t.recipientCountry}</span>
            </li>
          </>
          : null
        }
        <li>
          <small>Date & Time</small> 
          <span>
            {l.formatDate(new Date(t.transactionDate))}
          </span>
        </li>
        <li>
          <small>Transaction type</small>
          <span>{t.transactionType}</span>
        </li>

        <li>
          <small>Transaction fees</small>
          <span>
            {
              l.getAmountByCurrencyType(t.transactionCurrency, t.transactionFee)
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