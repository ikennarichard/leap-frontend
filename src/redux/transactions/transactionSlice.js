import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    {
      "id": 21,
      "transactionType": 'credit',
      "senderName": 'Ikenna Richard',
      "transactionCurrency": 'naira', 
      "amount": 20000,
      "transactionDate": "2022-10-10",
      "referenceNumber": 'ertyTIUT5889UuyytuYTYU'
    },

    {
      "id": 110,
      "transactionType": 'debit',
      "amount": 3000,
      "transactioFee": 50,
      "recipeintName": 'Frank',
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
    increment: (state) => {
      state.value += 1
    },
  }
});

export const { increment } = transactionsSlice.actions

export default transactionsSlice.reducer