import styles from './exchange.module.css';
import BackArrow from '../../components/BackArrow/BackArrow';
import SelectCurrency from '../../components/select_currency/SelectCurrency';

const ExchangeRates = () => {

  const handleSwitch = () => {
    console.log('switch');
  }

  return (
    <section className={styles.container}>
      <div className={styles.exchange_heading}>
        <BackArrow link='/profile_page'/>
        <h2>Exchange Rates</h2>
      </div>

      <p className={styles.last_update}>
        Last updated at *dynamic date*
      </p>

      <div className={styles.exchange_currency}>
        <p>Exchange currency</p>
        <SelectCurrency/>
      </div>

      <ul className={styles.exchange_list_container}>
        <li className={styles.exchange_list_item}>
          <div className={styles.exchange_conversion}>
            <p>NGN to USD</p>
            <small>N1 =</small>
            <small>$0.9</small>
          </div>

          <button 
            type='button' 
            onClick={handleSwitch}
            className={`${styles.switch_btn} reset_btn`}
            >
              <img 
                src="switch.svg" 
                className={styles.switch_icon} 
              />
              Switch
          </button>
        </li>
      </ul>
    </section>
  )
}

export default ExchangeRates;