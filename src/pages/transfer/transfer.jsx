import { useState, useRef } from "react";
import styles from './transfer.module.css';
import CustomButton from "../../components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactions/transactionSlice";
import { adjustAmount } from "../../redux/account/accountSlice";
import * as l from '../../components/utils/utils';
import Select from "react-select";
import { nanoid } from "@reduxjs/toolkit";

const Transfer = () => {
  const [senderCurrency, setSenderCurrency] = useState('naira');

  const [currencyCode, setCurrencyCode] = useState('NGN');

  const [recipientCurrency, setRecipientCurrency] = useState('');
  const [countryName, setCountryName] = useState('Nigeria');
  const [bankIndex, setBankIndex] = useState(null);
  const [error, setError] = useState(false);
  const [transactionAmount, setTransactonAmount] = useState(0)
  const amountRef = useRef(null);
  const countryCodeRef = useRef(null);
  const dispatch = useDispatch();

  //redux states
  const accounts = useSelector(state => state.account.accounts);
  const { countries, banks } = useSelector(state => state.auth);
  const beneficiaries= useSelector(state => 
    state.beneficiaries.beneficiaries);
  const rates = useSelector(state => state.auth.exchangeRates);

    // Map custom options to required options format for react-select
    const countryOptions = countries.map((c) => ({
      value: c,
      label: `${c.name} - ${c.currency.toUpperCase()}`
    }));

    const accountOptions = Object.keys(accounts).map((a) => ({
    label:`${accounts[a].country} ${accounts[a].currency} - ${l.getAmountByCurrencyType(accounts[a].currency, accounts[a].balance)}`,
    value: accounts[a]
    }))

    const bankOptions = banks[countryName].map((bank) => ({
      label:`${bank.name} - ${countryName}`,
      value: bank.name
    }))

    const beneficiaryOptions = beneficiaries.filter((b) => b.country === countryName).map((ben) => ({
      label:`${ben.name} - ${ben.accountNumber}`,
      value: ben
    }))


  // handle change for the react select library

  const handleSelectChange = (selected, {name}) => {
   if (name === 'sender_account') {
    setCurrencyCode(selected.value.currencyCode);
    setSenderCurrency(selected.value.currency)
    amountRef.current = selected.value.balance;
    countryCodeRef.current = selected.value.countryCode;
   } else if (name === 'recipient_currency') {
    setRecipientCurrency(selected.value.currency)
    setCountryName(selected.value.name)
   } else if (name === 'selected_beneficiary') {
    const index = banks[countryName].findIndex(option => option.name === selected.value.bankName);
    setBankIndex(index);
   }
  }

  const handleAomuntChange = (e) => {
    const { value } = e.target;
    if (value >= amountRef.current) {
      setError(true);
    } else {
      setError(false);
      setTransactonAmount(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "id": nanoid(),
      "transactionType": 'debit',
      "senderName": 'Ikenna Richard',
      "transactionCurrency": senderCurrency, 
      "amount": transactionAmount,
      "transactionDate": l.getCurrentDate(),
      "referenceNumber": l.generateRandomReferenceNumber()
    }
    
    dispatch(addTransaction(data));
    dispatch(adjustAmount({countryCode: countryCodeRef.current, amount: transactionAmount}))
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form 
        onSubmit={handleSubmit}
        className={styles['form__transfer']}
      >

        <div className="field">
          <div className={styles.custom_select}>
            <label>Select an account</label>
            <Select 
             options={accountOptions}
             name = "sender_account"
             placeholder= "Select an account"
             onChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="field">
          <div className={styles.custom_select}>
            <label>Recipient Currency</label>
            <Select
              options={countryOptions}
              placeholder="Please select recipeint"
              name="recipient_currency"
              onChange={handleSelectChange}
            />
          </div>
          <p className="exchangeView">
            { 
              recipientCurrency !== '' ? 
              <small>Exchange: {
                l.getAmountByCurrencyType(senderCurrency, 1)
                } = </small> 
              : ''
            }
            <small>
              {
              recipientCurrency &&
                rates[senderCurrency] &&
                rates[senderCurrency][recipientCurrency]
                  ? l.getAmountByCurrencyType(recipientCurrency, 
                    rates[senderCurrency][recipientCurrency])
                  : "Exchange rate unavailable"}
            </small>
          </p>
        </div>

        {/*amount to send */}

        <div className={`field ${styles['amount__transfer']}`}>
          <label htmlFor="amount">Amount to send</label>
          <span  className={styles['amount__transfer__symbol']}>
            {l.getCurrencySymbol(currencyCode)}
          </span>
          <input
            type="num"
            name="amount"
            placeholder="Enter Amount"
            onChange={handleAomuntChange}
          />
          <small>
            { error ? 'Invalid Amout' : `Transaction Fee: ${l.calculateTransactionFee(senderCurrency, transactionAmount)}`}
          </small>
        </div>

        <div className={`field`}>
          <label htmlFor="amount">Amount to recieve</label>
          <input
            type="num"
            name="amount"
            placeholder="Enter Amount"
            value={l.getAmountByCurrencyType(recipientCurrency, (transactionAmount * rates[senderCurrency][recipientCurrency]) || transactionAmount)}
            readOnly
          />
        </div>
        

        {/* selected beneficiary */}

        <div className="field">
          <label htmlFor="selectedBeneficiary">
            Select Beneficiary
          </label>
          <Select
            options={beneficiaryOptions}
            name="selected_beneficiary"
            onChange={handleSelectChange}
            placeholder='Please select beneficiary'
            isSearchable
          />
        </div>
        

        <div className="field">
          <div className={styles.custom_select}>
            <label>Recipient Bank</label>
            <Select 
              options={bankOptions}
              placeholder='Select bank'
              name='recipient_bank'
              value={bankOptions[bankIndex]}
              onChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="narration">
            Narration <small>(optional)</small>
          </label>
          <input 
            type="text"
            id="narration"
            name="narration"
            onChange={handleSelectChange}
          />
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
