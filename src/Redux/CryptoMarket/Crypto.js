// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const cryptoFetch = createAsyncThunk('crypto/cryptoFetch', async ({rejectWithValue}) => {
//   try {
//     const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",{
//         "headers": {
//             "X-CMC_PRO_API_KEY": "68e2f680-45d1-4764-92ee-d0fd1445cf79"
//         }
//     });
//     return response.data;
//   } catch (error) {
//     const customError = {
//         message: "An error occurred while fetching crypto coins.",
//         originalError: error,
//         // errors: error.response.data,
//     };
//     return rejectWithValue(customError);
//   }
// });

// const CryptoFetchSlice = createSlice({
//     name: 'crypto',
//     initialState: {cryptofetch:{data:null, pending: null, rejected: null}},
//     extraReducers: (builder) => {
//       builder.addCase(cryptoFetch.pending,(state, action)=>{
//          state.cryptofetch.pending = true;
//       })
//       builder.addCase(cryptoFetch.fulfilled, (state, action)=>{
//         state.cryptofetch.data = action.payload;
//         state.cryptofetch.pending = false;
//         state.cryptofetch.rejected =false
//       })
//       builder.addCase(cryptoFetch.rejected, (state, action)=>{
//         state.cryptofetch.rejected = action.payload;
//         state.cryptofetch.data = false;
//         state.cryptofetch.pending = false;
//       })
// }}) 

// export { CryptoFetchSlice }


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cryptoFetch = createAsyncThunk('crypto/cryptoFetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": "68e2f680-45d1-4764-92ee-d0fd1445cf79"
      }
    });
    return response.data;
  } catch (error) {
    const customError = {
      message: "An error occurred while fetching crypto coins.",
      originalError: error,
      errors: error.response.data,
    };
    return rejectWithValue(customError);
  }
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptofetch: {
      data: null,
      pending: false,
      rejected: null,
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(cryptoFetch.pending, (state) => {
        state.cryptofetch.pending = true;
      })
      .addCase(cryptoFetch.fulfilled, (state, action) => {
        state.cryptofetch.data = action.payload;
        state.cryptofetch.pending = false;
        state.cryptofetch.rejected = null; // Reset rejected state
      })
      .addCase(cryptoFetch.rejected, (state, action) => {
        state.cryptofetch.rejected = action.payload;
        state.cryptofetch.pending = false;
      });
  }
});

export { cryptoSlice };
