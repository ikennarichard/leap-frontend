import { createSlice } from "@reduxjs/toolkit";
import { getRates } from "./apiSlice";

const initialState = {
  conversionRates: null,
  conversionDate: null,
  isError: false,
  isLoading: false,

  currencies: {
      NGN: {
        country: 'Nigeria',
        currency: 'naira',
        currencyCode: 'NGN',
        countryCode: 'ng',
      },

      USD: {
        country: 'United States',
        currency: 'dollar',
        currencyCode: 'USD',
        countryCode: 'us',
      },
      
      CNY: {
        country: 'China',
        currency: 'yen',
        currencyCode: 'CNY',
        countryCode: 'cn',
      },

      GBP: {
        country: 'United Kingdom',
        currency: 'pounds',
        currencyCode: 'GBP',
        countryCode: 'gb',
      },

      CAD: {
        country: 'Canada',
        currency: 'canadian dollar',
        currencyCode: 'CAD',
        countryCode: 'ca',
      },
    }
}

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getRates.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRates.fulfilled, (state, action) => {
      state.conversionRates = action.payload.conversion_rates;
      state.conversionDate = action.payload.time_last_update_utc
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(getRates.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    })
  }
});

// export const { addBeneficiary, removeBeneficiary } = beneficiariesSlice.actions

export default ratesSlice.reducer