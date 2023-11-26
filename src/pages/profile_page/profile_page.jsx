import AccountBalance from '../components/Balance';
import Transactions from '../components/Transactions';
import styles from './profile.module.css'

const ProfilePage = () => {
  return (
    <section>
      <div className={styles.heading}>
        <div className={styles.user}>
          <img src="avatar.svg" alt="user image" />
          <h2>Hi Valerie,</h2>
        </div>
        <div className={styles.check_rates}>
          <img src="see_rates_icon.svg" />
          <small>See rates</small>
        </div>
      </div>
      <AccountBalance/>
      <div>
        <h3>More Actions</h3>
        <div className={styles.actions}>
          <div>
            <img src="more_actions/accounts.svg" alt="" />
            <p>Accounts</p>
          </div>
          <div>
            <img src="more_actions/pay_bills.svg" alt="" />
            <p>Pay Bills</p>
          </div>
          <div>
            <img src="more_actions/card.svg" alt="" />
            <p>Cards</p>
          </div>
          <div>
            <img src="more_actions/beneficiaries.svg" alt="" />
            <p>Beneficiaries</p>
          </div>
        </div>
      </div>
      <Transactions/>
    </section>
  )
}

export default ProfilePage