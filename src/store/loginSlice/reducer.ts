import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorModel, UserLoginDataModel } from '../../shared/models';
import { RootState, StatusType } from '../store';

type UserlLoginSliceData = Omit<UserLoginDataModel, 'recipes' | 'weatherCities'>

export interface UserState {
  userData: UserlLoginSliceData | null;
  status: StatusType;
  message: string | null;
}

const initialState: UserState = {
  userData: null,
  status: 'init',
  message: null,
};


export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    succes: (state, action: PayloadAction<UserlLoginSliceData>) => {
      state.status = 'success';
      state.userData = action.payload;
    },
    error: (state, action: PayloadAction<ErrorModel>) => {
      state.status = 'error';
      state.message = action.payload.message
        ? action.payload.message
        : 'An error occured, please try agian later.';
    },
    setInit: (state) => {
      state.status = 'init';
      state.message = null;
    },
    logout: (state) => {
      state.status = 'init';
      state.userData = null;
    },
  },
});

export const { succes, loading, error, logout } = userDataSlice.actions;

export const user = (state: RootState) => state.userData;

export default userDataSlice.reducer;
