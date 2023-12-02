import { useState } from 'react';
import { useSelector } from 'react-redux';
import PageHeading from '../../components/PageHeading.jsx/PageHeading';
import * as l from '../../components/utils/utils'
import styles from './accounts.module.css'
import { nanoid } from '@reduxjs/toolkit/dist';
import AddAccount from './addAccount';

const Accounts = () => {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const accounts = useSelector(state => state.account.accounts);

  const closeModal = () => setShowAddAccount(false);
  return (
    <section className={styles.accounts_container}>
      <div className={styles.accounts_heading}>
        <PageHeading link='/' heading='Accounts'/>
      </div>

      <button 
        type="button" 
        onClick={() => setShowAddAccount(prev => !prev)}
        className={`reset_btn ${styles.add_account}`}
      > 
        <img 
          src={!showAddAccount ? "add-square.svg" 
          : "return.svg"} 
          className={styles['add-cancel-icon']} />
        <span>
          {!showAddAccount ? 'New account' : 
          'Return to accounts'}
        </span>
      </button>

     { !showAddAccount ? <ul className={styles.account_list_container}>
        {
          Object.keys(accounts).map((acc) => (
            <li key={nanoid()}>
            <div className={styles.account_list_item}>
              <div className={styles.flag_currency}>
                <span 
                  className={`fi fi-${accounts[acc].countryCode} 
                  ${styles.country_flag}`}>
                </span>
                <div className={styles.account_currency}>
                  <p>
                  {`${accounts[acc].country} 
                  ${accounts[acc].currency.at(0).toUpperCase() 
                    + accounts[acc].currency.substring(1)}`}
                  </p>
                  <small>{`${accounts[acc].currencyCode}`}</small>
                </div>
              </div>
              <strong className={styles.account_amount}>
                {
                  l.getAmountByCurrencyType(accounts[acc].currency, 
                  accounts[acc].balance)
                }
              </strong>
            </div>
            <hr className={styles.hr_line}/>
          </li>   
          ))
        }
      </ul> : <AddAccount handleCloseModal={closeModal}/>
      }
    </section>
  )
}

export default Accounts;