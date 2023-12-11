import styles from './exchange.module.css';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageHeading from '../../components/PageHeading.jsx/PageHeading';
import Select from 'react-select';
import * as l from '../../components/utils/utils'
import axios from 'axios';

const ExchangeRates = () => {
  const [baseCurrency, setBaseCurrency] = useState('NGN');
  const [currency, setCurrency] = useState('naira');
  const [exchangeRates, setExchangeRates] = useState({});
  const rates = useSelector((state) => state.rate.currencies);

  const dateRef = useRef();
  

  // map accounts of value and label
  const rateOptions = Object.keys(rates).map((a) => ({
    label:`${rates[a].country} - ${rates[a].currencyCode}`,
    value: rates[a]
    }))

  const handleChange = (selected) => {
    setBaseCurrency(selected.value.currencyCode);
    setCurrency(selected.value.currency);
  }

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/bb77863289c1abaa0eaf3a88/latest/${baseCurrency}`);
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = await response.data;
        setExchangeRates(data.conversion_rates);
        dateRef.current = data.time_last_update_utc
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  return (
    <section className={styles.container}>
      <div className={styles.exchange_heading}>
        <PageHeading link='/' heading='Exchange Rates'/>
      </div>

      <p className={styles.last_update}>
        Last updated at {dateRef.current ? dateRef.current : 'Loading...'}
      </p>

      <form>
        <div className="field">
          <Select 
            options={rateOptions}
            placeholder='Exchange currency'
            onChange={handleChange}
            isSearchable
          />
        </div>
      </form>

      <ul className={styles.exchange_list}>
        {
          Object.keys(rates).filter(r => r !== baseCurrency).map((curr) => (
            <li className={styles.exchange_list_item} key={curr.currencyCode}>
              <div className={styles.exchange_conversion}>
                <p>{baseCurrency} to {curr}</p>
                <small>
                  {l.getAmountByCurrencyType(currency, 1)}
                </small>
                <small>= {l.getCurrencySymbol(rates[curr].currencyCode)}{exchangeRates[curr]}</small>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ExchangeRates;