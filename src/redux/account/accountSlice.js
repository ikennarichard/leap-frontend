import { createSlice } from '@reduxjs/toolkit';

const accountNumber = 1211567645;
const initialState = {

    accounts: {
    ng: {
        country: 'Nigeria',
        currency: 'naira',
        balance: 200000,
        currencyCode: 'NGN',
        countryCode: 'ng',
        accountNumber
      },

      us: {
        country: 'United States',
        currency: 'dollar',
        balance: 20000,
        currencyCode: 'USD',
        countryCode: 'us',
        accountNumber
      },
      
      cn: {
        country: 'China',
        currency: 'yen',
        balance: 2000,
        currencyCode: 'CNY',
        countryCode: 'cn',
        accountNumber
      }
    },

    // accounts you can add for now.
    newAccounts: {
      gb: {
        country: 'United Kingdom',
        currency: 'pounds',
        balance: 2000.00,
        currencyCode: 'GBP',
        countryCode: 'gb',
        accountNumber
      },

      ca: {
        country: 'Canada',
        currency: 'canadian dollar',
        balance: 2000.00,
        currencyCode: 'CAD',
        countryCode: 'ca',
        accountNumber
      },
    }
  }

export const accountSlice = createSlice({
  name: 'acccount',
  initialState,
  reducers: {
    addNewAccount: (state, action) => {
      const { accountKey } = action.payload;
      state.accounts[accountKey.countryCode] = action.payload.accountKey 
    },

    adjustAmount: (state, action) => {
      const { countryCode, amount } = action.payload;
      state.accounts[countryCode].balance = state.accounts[countryCode].balance - amount;
    },
  }
});

export const { addNewAccount, adjustAmount } = accountSlice.actions

export default accountSlice.reducer