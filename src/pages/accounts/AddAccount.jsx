import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './newacccount.module.css'
import { addNewAccount } from "../../redux/account/accountSlice";
import CustomButton from "../../components/CustomButton";
import { nanoid } from "@reduxjs/toolkit/dist";

const AddNewAccount = () => {
  const { accounts, newAccounts} = useSelector(state => state.account);
  const [newAccount, setNewAccount] = useState();
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleNewAccountChange = (e) => {
    const accountKey = e.target.value;
    setNewAccount(accountKey);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accounts[newAccount]) {
      setMessage('Account was added successfully');
      const data = {
        accountKey: {
          ...newAccounts[newAccount]
        }
      }
      dispatch(addNewAccount(data));
    } else {
      setMessage('Account already exists.');
    }
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className={styles['newAccountForm']}
    >
      <h3>Select a new account</h3>
      <div>
        <p>{message}</p>
        {
          Object.keys(newAccounts).map((accountKey) => (
            <div key={nanoid()} className={styles['options']}>
              <div>
                <span
                  className={`fi fi-${newAccounts[accountKey].countryCode} ${styles['flag-icon']}`}>
                </span>
                <div>
                  <label
                    htmlFor={accountKey}
                  >
                    {newAccounts[accountKey].country}
                  </label>
                  <p className={styles['currencyCode']}>
                    {newAccounts[accountKey].currencyCode}
                  </p>
                </div>
              </div>
            <input 
              type="radio" 
              name={accountKey} 
              id={accountKey}
              value={accountKey}
              onChange={handleNewAccountChange}
              checked = {newAccount === accountKey}
            />
            </div>
          )

          )
        }
      </div>
      <div className={styles['form-btn']}>
        <CustomButton content='Add Account' type='submit'/>
      </div>
    </form>
  )
}

export default AddNewAccount;