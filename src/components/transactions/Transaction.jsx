/* eslint-disable react/prop-types */
import styles from './transaction.module.css';
import { Link } from 'react-router-dom';
import * as l from '../utils/utils.js';

const Transaction = ({t, path}) => {

  const showTransactionIcon = (item) => {
    if (item.transactionType === 'credit') {
      return 'transactions/transfer.svg';
    } else if (item.transactionType === 'debit') {
      return 'transactions/payment.svg';
    } else {
      return;
    }
  }

  return (
    <li 
  >
    <Link
      className={styles.transaction_link}
      state={t}
      to={`${path ? path : null}${t.id}`}
    >
    <div className={styles.transaction_details}>
      <img 
        src={showTransactionIcon(t)} 
        className={styles.transaction_type}
      />

      <div className={styles.details}>
        <p>
           {t.transactionType == 'credit' ? 
           `${t.senderName} sent you` : 'You sent'}
          <strong className={styles.amount}>
            {
            l.getAmountByCurrencyType(t.transactionCurrency, 
              t.amount)
            }
          </strong>
          {t.transactionType === `debit` && ` 
          to ${t.recipientName}`}
        </p>

        <small>{`Bank Transfer`}</small>
        <span className={styles['dot']}>.</span>
        <small className={styles.transaction_date}>
          {l.formatDate(new Date(t.transactionDate))}
        </small>
      </div>
    </div>
    </Link>
    <hr className={styles.hr_line}/>
  </li>
  )
}

export default Transaction