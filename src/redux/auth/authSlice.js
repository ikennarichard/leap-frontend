import { createSlice } from '@reduxjs/toolkit'
import { signin, signup } from './apiSlice';

const initialState = {
  countries: [
    { label: 'Nigeria', code: '+234', currency: 'naira',
      value: 'ng', currencyCode: 'NGN'
    },

    { label: 'United States', code: '+1', currency: 'dollar', 
      value: 'us', currencyCode: 'USD'
    },

    { label: 'China', code: '+44', currency: 'yen', 
      value: 'cn', currencyCode: 'CNY' 
    },

    { label: 'Canada', code: '+1', currency: 'canadian dollar', 
      value: 'ca', currencyCode: 'CAD'
    },

    { label: 'United Kingdom', code: '+44', currency: 'pounds', 
      value: 'gb', currencyCode: 'GBP' 
    },
  ],

  banks: {
    us: [
      { label: 'Chase Bank', value: 'chase' },
      { label: 'Bank of America', value: 'boa' },
    ],
    ng: [
      { label: 'Access Bank', value: 'ab' },
      { label: 'Fidelity Bank', value: 'fb' },
    ],
    cn: [
      { label: 'Hongkong and Shanghai Bank', value: 'hsbc' },
      { label: 'Bank of China', value: 'boc' },
    ],
  },

  exchangeRates: {
    "naira": {
      "dollar": 0.009,
      "pounds": 0.008,
      "yen": 0.018,
      "canadian dollar": 0.007,
    },
    
    "dollar": {
      "naira": 1150,
      "pounds": 1.21,
      "yen": 2.24,
      "canadian dollar": 3.25,
    } 
  },

  user: false,
  loading: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signin.fulfilled, (state, action) => {
        // const { token } = action.payload;
        localStorage.setItem('token', action.payload);
        state.loading = false;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signup.fulfilled, (state, action) => {
        const { resource_owner, refresh_token, token } = action.payload;
        localStorage.setItem('resource_owner', JSON.stringify(resource_owner));
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('access_token', token);
        localStorage.setItem('expires_in', Date.now() + 3600000); // added this, converts miliseconds to hours, one hour in this case.
        state.resource_owner = resource_owner;
        state.loading = false;
        state.error = null;
        state.message = 'Sign up successfull, please log into your account';
      })
  },
});

// Action creators are generated for each case reducer function
// export const {  } = authSlice.actions

export default authSlice.reducer