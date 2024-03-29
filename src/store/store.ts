import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { UserLoginDataModel } from '../shared/models';

import loginrReducer from './loginSlice/reducer';
import themeReducer from './themeSlice/reducer';
import userSettingsReducer from './userSettings/reducer';
import userDataReducer from './userData/reducer';
import  weatherSlice  from './weatherSlice/reducer';

export const store = configureStore({
  reducer: {
    loginData: loginrReducer,
    themeData: themeReducer,
    userSettings: userSettingsReducer,
    userData: userDataReducer,
    weatherSlice: weatherSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string | UserLoginDataModel>
>;
export type StatusType = 'init' | 'loading' | 'success' | 'error';
