import { combineReducers } from "@reduxjs/toolkit";
import { cryptoSlice } from "./CryptoMarket/Crypto";
import { LoginSlice } from "./LoginSlice";

 const rootReducer = combineReducers({
    CryptoFetch: cryptoSlice.reducer,
    Login: LoginSlice.reducer
})

export default rootReducer;