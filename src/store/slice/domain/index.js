import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HTTP_STATUS } from 'Asset/constants';
import DmarcServices from 'Service/dmarc.services';
import MaperClass from 'Src/store/mapper/mapper.class';

export const fetchDomains = createAsyncThunk(
  'domain/fetchDomains',
  async () => {
    const { data } = await DmarcServices.GetDomain();
    return data;
  },
);

export const domainSlice = createSlice({
  name: 'domain',
  initialState: {
    loading: null,
    data: null,
    domain: '',
  },
  reducers: {
    setDomain: (state, action) => {
      state.domain = action.payload;
    },
  },
  extraReducers: {
    [fetchDomains.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchDomains.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = MaperClass.RadioButtonItems(payload);
    },
    [fetchDomains.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});
export const { setDomain } = domainSlice.actions;
export default domainSlice.reducer;
