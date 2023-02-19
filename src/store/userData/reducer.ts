import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorModel } from '../../shared/models';
import { RootState } from '../store';

interface Location {
  latitude: number;
  longitude: number;
}

interface PurchaseList {
  id: string;
  name: string;
  userId: string;
  type: 'private' | 'home';
  items: [];
}

export interface UserDataState {
  //   themes: { [key: string]: {} };
  status: 'loading' | 'success' | 'init' | 'error';
  message: string | null;
  location: null | Location;
  privatePurchaseLists: null | PurchaseList[];
  homePurchaseLists: null | PurchaseList[];
}

const initialState: UserDataState = {
  location: null,
  privatePurchaseLists: null,
  homePurchaseLists: null,
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
    error: (state, action: PayloadAction<ErrorModel>) => {
      state.status = 'error';
      state.message = action.payload.message
        ? action.payload.message
        : 'An error occured, please try agian later.';
    },
    setInit: (state) => {
      state.status = 'init';
      state.message = null;
      state.privatePurchaseLists = null;
      state.homePurchaseLists = null;
    },
    setUserLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { setUserLocation } = userDataSlice.actions;

export const user = (state: RootState) => state.themeData;

export default userDataSlice.reducer;
