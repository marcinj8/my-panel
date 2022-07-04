import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { UserData } from '../shared/models';
import userReducer from './loginSlice/reducer';

export const store = configureStore({
  reducer: {
    userData: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string | UserData>
>;
