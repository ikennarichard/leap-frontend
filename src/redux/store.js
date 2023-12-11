import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import transactionsReducer from './transactions/transactionSlice'
import accountReducer  from './account/accountSlice'
import beneficiariesReducer  from './beneficiaries/beneficiarySlice'
import ratesReducer from './exchange_rates/exchangeRatesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
    account: accountReducer,
    beneficiaries: beneficiariesReducer,
    rate: ratesReducer
  },
})