import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../../shared/models';
import { RootState, AppThunk } from '../../store/store';

export interface CounterState {
  userData: userData | null;
  status: 'loading' | 'loggedin' | 'unknow' | 'error';
}

const initialState: CounterState = {
  userData: null,
  status: 'unknow',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    succes: (state, action: PayloadAction<userData>) => {
      state.status = 'loggedin';
      state.userData = action.payload;
    },
    error: (state) => {
      state.status = 'error';
    },
  },
});

export const { succes, error } = userDataSlice.actions;

export const user = (state: RootState) => state.userData;

export default userDataSlice.reducer;
