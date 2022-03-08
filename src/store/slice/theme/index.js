import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') || 'white',
  },
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem('theme', action.payload);
      state.value = action.payload;
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
