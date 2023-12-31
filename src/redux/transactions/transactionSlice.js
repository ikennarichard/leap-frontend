import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    {
      "id": 21,
      "transactionType": 'credit',
      "senderName": 'Ikenna Richard',
      "senderBankName": 'Zenith Bank',
      "transactionCurrency": 'naira', 
      "amount": 20000,
      "transactionDate": "2022-10-10",
      "referenceNumber": 'ertyTIUT5889UuyytuYTYU'
    },

    {
      "id": 110,
      "transactionType": 'debit',
      "amount": 3000,
      "transactionFee": 50,
      "recipientName": 'Frank',
      "recipientBank": 'United Bank of Africa',
      "recipientCountry": 'Nigeria',
      "transactionCurrency": 'dollar', 
      "transactionDate": "2022-10-10",
      "referenceNumber": 'YUYTJHFGHJHtyusuydfg896'
    },
  ]
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
    },
  }
});

export const { addTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer