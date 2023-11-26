import { Link } from 'react-router-dom';
import styles from './transactions.module.css'
import Naira from '../currencies/Naira';

const Transactions = () => {

  function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date).replace(',', '').split(' ').join('-');
  }

  return (
    <div>
      <ul className={styles.transactions}>
        <div className={styles.transaction_heading}>
          <h2>Recent transactions</h2>
          <button className='reset_btn'>
            <Link>
              See all
              <img src="arrow-right.svg" alt="" />
            </Link>
          </button>
        </div>
        <li>
          <div className={styles.transaction_details}>
            <img src="transactions/transfer.svg" alt="" />
            <div>
              <p>Adeola sent you<strong>
                <Naira amount={1000}/>
              </strong></p>
              <small>Bank Transfer</small>
              <span>.</span>
              <small>{formatDate(new Date('2023-10-23'))}</small>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  )
}

export default Transactions;