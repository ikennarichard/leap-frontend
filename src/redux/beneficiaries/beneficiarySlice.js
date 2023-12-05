import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beneficiaries: [
    {
      id: 1,
      name: 'Tom Foster',
      country: 'Nigeria',
      bankName: 'United Bank of Africa',
      accountNumber: '125116202',
    },
    {
      id: 2,
      name: 'Amina Ahmed',
      country: 'United States of America',
      bankName: 'Bank of America',
      accountNumber: '125116309',
    },
    {
      id: 3,
      name: 'Frank Zyen',
      country: 'China',
      bankName: 'Bank of China',
      accountNumber: '125116429',
    },
  ]
}

export const beneficiariesSlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    }
  }
});

export const { addBeneficiary } = beneficiariesSlice.actions

export default beneficiariesSlice.reducer