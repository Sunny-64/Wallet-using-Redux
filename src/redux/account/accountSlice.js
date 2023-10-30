import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import { getBalance } from '../../utils/accountUtils';
// import { useDispatch } from 'react-redux';


const initialState = {
    publicKey : JSON.parse(localStorage.getItem("account"))?.publicKey ?? "", 
    privateKey : JSON.parse(localStorage.getItem("account"))?.privateKey ?? "", 
    balance : JSON.parse(localStorage.getItem("account"))?.balance ?? 0, 
}

export const TYPE_GET_BALANCE = 'account/getBalance'; 
export const TYPE_UPDATE_ACCOUNT = 'account/updateAccount';

export const fetchBalance = createAsyncThunk(TYPE_GET_BALANCE, async (address) => await getBalance(address)); 

export const accountSlice = createSlice({
    name : "account", 
    initialState, 
    reducers : {
        updateAccount : (state, action) => {
            // console.log("Before update : ",state);
            state = {
                ...state,
                ...action.payload, 
            }
            console.log("After update : ",state);
        }
    }, 
    // extraReducers : builder => {
    //    builder.addCase(fetchBalance.fulfilled, (state) => {
    //         state = {
    //             ...state, 
    //             balance : state.balance
    //         }
    //    }); 
    // },
}); 

export const {updateAccount} = accountSlice.actions; 
export default accountSlice.reducer; 



