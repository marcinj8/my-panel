import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserSettingsState {
  weatherCities: string[];
  currency: string[];
  isMenuShow: boolean;
}

const initialState: UserSettingsState = {
  weatherCities: [],
  currency: [],
  isMenuShow: true,
};

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenuShow = action.payload;
    },
  },
});

export const { toggleMenu } = userSettingsSlice.actions;

export const user = (state: RootState) => state.userSettings;

export default userSettingsSlice.reducer;
