import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;


export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;