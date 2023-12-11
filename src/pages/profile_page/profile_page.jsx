import AccountBalance from '../../components/account_balance/Balance';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Transaction from '../../components/transactions/Transaction';
import { nanoid } from '@reduxjs/toolkit';

const ProfilePage = () => {

  const transactions = useSelector(state => state.transactions.transactions);

    const sortedTransactions = Array.from(transactions).sort((a, b) => 
    new Date(b.transactionDate) - new Date(a.transactionDate)).slice(0, 5);
  
  return (
    <section className={styles['profile_container']}>
      <div className={styles.heading}>
        <div className={styles.user}>
          <img 
            src="avatar.svg" 
            alt="user image"
            className={styles['avatar']} 
          />
          <h2>Hi Valerie,</h2>
        </div>
        <div className={styles.check_rates}>
          <img src="see_rates_icon.svg" />
          <Link className='reset-link' to='rates'><small>See rates</small></Link>
        </div>
      </div>
      <AccountBalance/>
      <div className={styles['more-action']}>
        <h3>More Actions</h3>
        <div className={styles.actions}>
          <Link to='/accounts' className='reset-link'>
            <img src="more_actions/accounts.svg" alt="" />
            <span>Accounts</span>
          </Link>
          <div>
            <img src="more_actions/pay_bills.svg" alt="" />
            <p>Pay Bills</p>
          </div>
          <div>
            <img src="more_actions/card.svg" alt="" />
            <p>Cards</p>
          </div>
          <Link className={`reset-link`} to='/beneficiaries'>
            <img src="more_actions/beneficiaries.svg" alt="" />
            <span>Beneficiaries</span>
          </Link>
        </div>
      </div>

      <ul className={styles['recent-transactions']}>
        <div className={styles['recent-transactions-heading']}>
          <h2>Recent transactions</h2>
          <Link 
            to='/transactions' 
            className={`reset-link ${styles['see-all']}`}
          >
            <span>See all</span> <img src="arrow-right.svg" alt="" />
          </Link>
        </div>
        {
          sortedTransactions.map((t) => (
            <Transaction t={t} key={nanoid()} path='transactions/'/>
          ))
        }
      </ul>
    </section>
  )
}

export default ProfilePage