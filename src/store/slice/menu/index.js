import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: 'login',
    open: false,
  },
  reducers: {
    setActual: (state, action) => {
      state.value = action.payload;
    },
    setOpen: (state, action) => {
      console.log(action.payload);
      state.open = action.payload;
    },
  },
});
export const { setActual, setOpen } = headerSlice.actions;
export default headerSlice.reducer;
