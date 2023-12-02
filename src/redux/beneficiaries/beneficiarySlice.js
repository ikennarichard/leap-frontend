import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beneficiaries: [
    {
      fullName: 'Tom Foster',
      country: 'Nigeria',
      bankName: 'united bank of africa',
      accountNumber: '125116202',
    },
    {
      fullName: 'Amina Ahmed',
      country: 'United States of America',
      bankName: 'bank of america',
      accountNumber: '125116309',
    },
    {
      fullName: 'Frank Zyen',
      country: 'China',
      bankName: 'bank of china',
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