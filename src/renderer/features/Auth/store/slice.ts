import { createSlice } from '@reduxjs/toolkit';
import login from './action';
import INITIAL_STATE from './constants';

export const NS_AUTH = 'auth';

export const authSlice = createSlice({
  name: NS_AUTH,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = undefined;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;
