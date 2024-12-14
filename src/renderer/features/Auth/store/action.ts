import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService, LoginRequest } from '../service';

const authService = new AuthService({
  baseURL: 'https://api.vision20.us/v1',
});

const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await authService.login(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default login;
