import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginDataModel } from '../../shared/models';

import { loading, succes, error, logout } from './reducer';
import { setRecipes, setWeatherCities } from '../userData/reducer';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const tokenExpirationValidity = 86400000;

export const quickLoginUser = (token: string) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/user/quick-login`;
    const configQuiclLogin = {
      headers: { ...config.headers, Authorization: `Bearer ${token}` },
    };
    axios
      .get(link, configQuiclLogin)
      .then((res: AxiosResponse) => {
        const user = {
          id: res.data.id,
          email: res.data.email,
          name: res.data.name,
          homeId: res.data.homeId,
          token: res.data.token,
          tokenExpiration:
            res.data.tokenExpiration ||
            new Date().getTime() + tokenExpirationValidity,
        };
        const weatherCities = res.data.weatherCities;
        const recipes = res.data.recipes;

        localStorage.setItem('userData', JSON.stringify(user));

        dispatch(setWeatherCities(weatherCities));
        dispatch(setRecipes(recipes));
        return dispatch(succes(user));
      })
      .catch((err: AxiosError) => {
        console.log(err);
        return dispatch(error({ code: 404 }));
      });
  };
};

export const checkIsLoggedin = (dispatch: Function) => {
  const curretTime = new Date().getTime();
  const storedUserData = localStorage.getItem('userData');

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (
      userData.tokenExpiration &&
      userData.token &&
      curretTime - userData.tokenExpiration < tokenExpirationValidity
    ) {
      return dispatch(quickLoginUser(userData.token));
    }
  } else {
    return dispatch(logout());
  }
};

export const logoutUser = () => {
  localStorage.removeItem('userData');
  return logout();
};

type RegisterMode = 'register' | 'login';

const sendRequest = (userData: UserLoginDataModel, mode: RegisterMode) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/user/${mode}`;

    axios
      .post(link, { userData: JSON.stringify(userData) }, config)
      .then((res: AxiosResponse) => {
        const user = {
          id: res.data.id,
          email: res.data.email,
          name: res.data.name,
          homeId: res.data.homeId,
          token: res.data.token,
          tokenExpiration:
            res.data.tokenExpiration ||
            new Date().getTime() + tokenExpirationValidity,
        };
        const weatherCities = res.data.weatherCities;
        localStorage.setItem('userData', JSON.stringify(user));
        console.log(res);
        dispatch(setWeatherCities(weatherCities));
        return dispatch(succes(user));
      })
      .catch((err: AxiosError) => {
        return dispatch(error({ message: err.message, code: 404 }));
      });
  };
};

export const registerUser = (userData: UserLoginDataModel) => {
  return sendRequest(userData, 'register');
};

export const loginUser = (userData: UserLoginDataModel) => {
  return sendRequest(userData, 'login');
};
