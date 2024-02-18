import { combineReducers } from "@reduxjs/toolkit";
import { cryptoSlice } from "./CryptoMarket/Crypto";

 const rootReducer = combineReducers({
    CryptoFetch: cryptoSlice.reducer
})

export default rootReducer;