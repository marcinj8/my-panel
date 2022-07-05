import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorModel, UserData } from '../../shared/models';
import { RootState } from '../store';

export interface UserState {
  userData: UserData | null;
  status: 'loading' | 'loggedin' | 'init' | 'error';
}

const initialState: UserState = {
  userData: null,
  status: 'init',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    succes: (state, action: PayloadAction<UserData>) => {
      state.status = 'loggedin';
      state.userData = action.payload;
    },
    error: (state, action: PayloadAction<ErrorModel>) => {
      state.status = 'error';
    },
    logout: (state) => {
      state.status = 'init';
      state.userData = null;
    }
  },
});

export const { succes, loading, error, logout } = userDataSlice.actions;

export const user = (state: RootState) => state.userData;

export default userDataSlice.reducer;
