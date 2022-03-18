import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fields: [],
  table: null,
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    setTable: (state, action) => {
      state.table = action.payload;
    },
    clear: () => initialState,
  },
});

export const { setFields, setTable, clear } = querySlice.actions;

export default querySlice.reducer;
