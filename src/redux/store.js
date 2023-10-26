import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './account/accountSlice'

const reducer = {
    account : accountReducer,
}

export const store = configureStore({
  reducer: reducer, 
  devTools : true
});