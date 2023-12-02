import { useState, useRef } from "react";
import styles from './transfer.module.css';
import CustomButton from "../../components/CustomButton";
import { useSelector } from "react-redux";
import * as l from '../../components/utils/utils';

const Transfer = () => {
  const [transferDetails, setTransferDetails] = useState({
    transactionType: 'debit',
    amount: 0,
    transactionFee: 0,
    recipientName: '',
    transactionCurrency: '', 
    transactionDate: '',
    referenceNumber: ''
  });

  const accountRef = useRef();
  const [senderCurrency, setSenderCurrency] = useState('');
  const [recipientCurrency, setRecipientCurrency] = useState('');

  const accounts = useSelector(state => state.account.accounts);
  const countries = useSelector(state => state.auth.countries);
  const beneficiaries= useSelector(state => state.auth.beneficiaries);
  const rates = useSelector(state => state.auth.exchangeRates);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'selectedAccount') {
      accountRef.current = value;
      setSenderCurrency(e.target.options[e.target.selectedIndex].getAttribute('data-index'));
    } else if (name === 'selectedCurrency') {
      setRecipientCurrency(value);
    }

    setTransferDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(senderCurrency, recipientCurrency)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transferDetails);
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>

        <div className="field">
          <div className={styles.custom_select}>
            <label>Select an account</label>
            <select
              name="selectedAccount"
              onChange={handleChange}
            >
              <option value="">Please select account</option>
              {
                Object.keys(accounts).map((a) => (
                  <option 
                    key={accounts[a].countryCode} 
                    value={accounts[a].balance}
                    data-index={accounts[a].currency}
                  >
                    {
                      `${accounts[a].country} ${accounts[a].currency} -
                      ${l.getAmountByCurrencyType(accounts[a].currency, accounts[a].balance)}`
                    }
                  </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <div className={styles.custom_select}>
            <label>Recipient Currency</label>
            <select
              name="selectedCurrency"
              onChange={handleChange}
              value={recipientCurrency}
            >
              <option value=""></option>
              {countries.map((c) => (
                <option 
                  key={c.value} 
                  value={c.currency.toLowerCase()}
                >
                  {`${c.label} - ${c.currency}`}
                </option>
              ))}
            </select>
          </div>
          <p className="exchangeView">
            { 
              recipientCurrency !== '' ? 
              <span>Exchange: {l.getAmountByCurrencyType(senderCurrency, 1)} = </span> 
              : ''
            }
            <span>
              {
              recipientCurrency &&
                rates[senderCurrency] &&
                rates[senderCurrency][recipientCurrency]
                  ? l.getAmountByCurrencyType(recipientCurrency, rates[senderCurrency][recipientCurrency])
                  : "Exchange rate unavailable"}
            </span>
          </p>
        </div>

        {/*amount to send */}

        <div className="field">
          <label htmlFor="amount">Amount to send</label>
          <input 
            type="num"
            id="amount"
            name="amount"
            onChange={handleChange}
            value={transferDetails.amount}
            placeholder="Enter Amount"
          />
        </div>

        <div className="field">
          <div className={styles.custom_select}>
            <label>Recipient Bank</label>
            <select
              name="recipient bank"
              onChange={handleChange}
            >
              <option value="">Please select recipient</option>
              {
                beneficiaries.map((a) => (
                  <option 
                    key={accounts[a].countryCode} 
                    value={accounts[a].balance}
                    data-index={accounts[a].currency}
                  >
                    {
                      `${accounts[a].country} ${accounts[a].currency} -
                      ${l.getAmountByCurrencyType(accounts[a].currency, accounts[a].balance)}`
                    }
                  </option>
              ))}
            </select>
          </div>
        </div>

        <CustomButton
          content='Submit'
          type='submit'
        />
      </form>
    </div>
  )
}

export default Transfer;
