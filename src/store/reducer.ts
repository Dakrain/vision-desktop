import { combineReducers } from '@reduxjs/toolkit';
import { authSlice, NS_AUTH } from '@/renderer/features/Auth/store/slice';
import { loadingSlice, NS_LOADING } from './loading/slice';

const rootReducer = combineReducers({
  [NS_AUTH]: authSlice.reducer,
  [NS_LOADING]: loadingSlice.reducer,
});

export default rootReducer;
