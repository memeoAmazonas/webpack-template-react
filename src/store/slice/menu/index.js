import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    value: '',
  },
  reducers: {
    setActual: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setActual } = headerSlice.actions;
export default headerSlice.reducer;
