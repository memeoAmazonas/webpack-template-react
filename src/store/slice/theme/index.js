import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') || 'white',
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
