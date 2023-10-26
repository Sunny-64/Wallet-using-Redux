import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import { getBalance } from '../../utils/accountUtils';

const initialState = {
    publicKey : "", 
    privateKey : "", 
    balance : 0
}

export const TYPE_GET_BALANCE = 'account/getBalance'; 
export const TYPE_UPDATE_ACCOUNT = 'account/updateAccount';

const fetchBalance = createAsyncThunk(TYPE_GET_BALANCE, async () => await getBalance(address)); 

export const accountSlice = createSlice({
    name : "account", 
    initialState, 
    reducers : {
        updateAccount : (state, action) => {
            state = {
                ...state,
                ...action.payload
            }
        }
    }, 
    extraReducers : builder => {
       builder.addCase(fetchBalance.fulfilled, (state, action) => {

       }); 
    },
}); 

const {reducer} = accountSlice; 
export default reducer; 



