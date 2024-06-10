import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const logger = createAsyncThunk(
    "login/logger",
    async (payload, { rejectWithValue }) => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://app-cryptogland.onrender.com/api/login`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: payload,
      };
  
      try {
        const response = await axios.request(config);
        return response.data;
      } catch (error) {
        const customError = {
          originalError: error,
          error: error.response.data,
        };
        return rejectWithValue(customError);
      }
    }
  );

const LoginSlice = createSlice({
    name: "login",
    initialState: { data: "", pending:"", error: ""},
    extraReducers: (builder) => {
        builder.addCase(logger.pending, (state) => {
          state.pending = true;
        });
        builder.addCase(logger.fulfilled, (state, action) => {
          state.data = action.payload;
          state.pending = false;
          state.error = null;
        });
        builder.addCase(logger.rejected, (state, action) => {
          state.error = action.payload;
          state.pending = false;
        });
      }, 
    
})

export { LoginSlice }

