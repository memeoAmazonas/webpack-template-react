import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    saveLogin: JSON.parse(localStorage.getItem('saveLogin')) || false,
    isLoggedError: false,
  },
  reducers: {
    setSaveLogin: (state, action) => {
      localStorage.setItem('saveLogin', action.payload);
      state.saveLogin = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    logout: () => {},
    setIsLoggedError: (state, action) => {
      state.isLoggedError = action.payload;
    },
  },

});
export const { setSaveLogin, logout, setInfo, setIsLoggedError } = userSlice.actions;
export default userSlice.reducer;
