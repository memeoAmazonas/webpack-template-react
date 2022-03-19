import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DmarcServices from 'Service/dmarc.services';
import { HTTP_STATUS } from 'Service/url';
import MaperClass from 'Src/store/mapper/mapper.class';

const NAMESPACE = 'query';

const initialState = {
  fields: [],
  table: null,
  tables: null,
  loading: null,
  fieldsByTable: [],
  data: null,
};
export const fetcMetadata = createAsyncThunk(
  `${NAMESPACE}/fetcMetadata`,
  async () => {
    const { data } = await DmarcServices.GetMetadaQuery();
    return data;
  },
);

export const querySlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    setTable: (state, action) => {
      state.table = action.payload;
      state.fields = [];
      state.fieldsByTable = MaperClass.GetNameFields(state.data[action.payload]);
    },
    clear: (state) => {
      state.table = null;
    },
  },
  extraReducers: {
    [fetcMetadata](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetcMetadata.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = payload;
      state.tables = MaperClass.RadioButtonItems(Object.keys(payload));
    },
    [fetcMetadata.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },

  },
});

export const { setFields, setTable, clear } = querySlice.actions;

export default querySlice.reducer;
