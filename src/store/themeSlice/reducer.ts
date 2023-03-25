import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { themes } from '../../shared/themes/themes';
export type CurrentThemeType = 'dark' | 'default';

export interface ThemeState {
  themes: { [key: string]: {} };
  currentTheme: CurrentThemeType;
}

const initialState: ThemeState = {
  themes: themes,
  currentTheme: 'default',
};

export const themeSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'default'>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const user = (state: RootState) => state.themeData;

export default themeSlice.reducer;
