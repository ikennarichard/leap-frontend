/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

// handle sign in
export const signin = createAsyncThunk('auth/signin', async (userData) => {
  try {
    const response = await axios.post(`${API_URL}`, userData);
    const data = await response.data;
    if (response.status === 200) {
      //  data is a jwt token
      // that will be saved in local storage
      return data;
    }
  } catch (e) {
    if (e.response) {
      console.error(e);
      throw new Error('Sign in failed, email or password invalid');
    }
    console.error(e);
    throw new Error('An error occured while signing in');
  }
});

// handle sign up
export const signup = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, userData);
    const data = await response.data;
    if (response.status === 200) {
      return data;
    }
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.error_description[0]);
    }
    console.error(e);
    throw new Error('An error occured while signing up');
  }
});