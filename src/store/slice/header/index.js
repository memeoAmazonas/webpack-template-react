import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: sessionStorage.getItem('actual') || 'login',
    open: false,
  },
  reducers: {
    setActual: (state, action) => {
      sessionStorage.setItem('actual', action.payload);
      state.value = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { setActual, setOpen } = headerSlice.actions;
export default headerSlice.reducer;
