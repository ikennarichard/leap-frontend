/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// handle get rates
export const getRates = createAsyncThunk('rates/getRates', async (baseCurrency) => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/bb77863289c1abaa0eaf3a88/latest/${baseCurrency}`);
      if (response.status !== 200) {
        console.log(response)
        throw new Error('Network response was not ok');
      }
      const data = await response.data;
      
      return data;

    } catch (error) {
      console.error(error);
      throw new Error('There was a problem with the fetch operation:');
    }
});
