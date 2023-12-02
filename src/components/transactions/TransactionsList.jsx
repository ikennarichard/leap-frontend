import { useSelector } from 'react-redux';
import styles from './transactions.module.css'
import { nanoid } from '@reduxjs/toolkit';
import Transaction from './Transaction';

const TransactionsList = () => {
  
  const transactions = useSelector( state => 
  state.transactions.transactions);
  
  return (
    
    <ul className={styles.transactions_list}>
    {
      transactions.map((t) => (
        <Transaction key={nanoid()} t={t} />
      ))
    }
  </ul>
  )
}

export default TransactionsList;