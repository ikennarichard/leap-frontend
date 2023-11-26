import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [
    { name: 'Nigeria', code: '+234', countryCode: 'ng'},
    { name: 'United States', code: '+1', countryCode: 'us'},
    { name: 'United Kingdom', code: '+44', countryCode: 'gb' },
  ],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment,incrementByAmount } = authSlice.actions

export default authSlice.reducer