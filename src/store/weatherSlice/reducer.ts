import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorModel } from '../../shared/models';
import { RootState, StatusType } from '../store';

export interface WeatherState {
  weatherData: any | null;
  status: StatusType;
  message: string | null;
}

// interface WeatherData {
//     current: {

//     }
// }

const initialState: WeatherState = {
  weatherData: null,
  status: 'init',
  message: null,
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    succes: (state, action: PayloadAction<any>) => {
      state.status = 'success';
      state.weatherData = action.payload;
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
  },
});

export const { succes, loading, error } = weatherSlice.actions;

export const user = (state: RootState) => state.weatherSlice;

export default weatherSlice.reducer;
