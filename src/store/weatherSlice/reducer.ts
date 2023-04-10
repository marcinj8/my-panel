import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorModel } from '../../shared/models';
import { RootState, StatusType } from '../store';
import { CityDataModel } from '../userData/reducer';

export interface CurrentWeatherDataModel {
  sunrise: number;
  sunset: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
  uvi: number;
}

export interface HourlyWeatherModel {
  dt: number;
  clouds: number;
  feels_like: string;
  humidity: number;
  pressure: number;
  temp: number;
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface WeatherDataModel {
  current: CurrentWeatherDataModel;
  minutely: { precipitation: number; dt: number }[];
  hourly: HourlyWeatherModel[];
  daily: any[];
  timezone: string;
  timezone_offset: number;
}

export interface WeatherState {
  currentDisplayed: CityDataModel | null;
  currentLocationWeatherData: WeatherDataModel | null;
  weatherData: WeatherDataModel | null;
  status: StatusType;
  message: string | null;
  dateFetchedData: number | null;
}

const initialState: WeatherState = {
  currentDisplayed: null,
  currentLocationWeatherData: null,
  weatherData: null,
  status: 'init',
  message: null,
  dateFetchedData: null,
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    succes: (state, action: PayloadAction<WeatherDataModel>) => {
      state.status = 'success';
      state.weatherData = action.payload;
      state.dateFetchedData = new Date().getTime();
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
      state.dateFetchedData = null;
      state.weatherData = null;
    },
    setCurrentDisplayed: (state, action: PayloadAction<CityDataModel>) => {
      state.currentDisplayed = action.payload;
      state.weatherData = null;
    },
  },
});

export const { succes, loading, error, setCurrentDisplayed } =
  weatherSlice.actions;

export const user = (state: RootState) => state.weatherSlice;

export default weatherSlice.reducer;
