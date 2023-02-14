import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Location {
  latitude: number;
  longitude: number;
}

export interface UserDataState {
//   themes: { [key: string]: {} };
  location: null | Location;
}

const initialState: UserDataState = {
  location: null,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { setUserLocation } = userDataSlice.actions;

export const user = (state: RootState) => state.themeData;

export default userDataSlice.reducer;
