import axios, { AxiosError, AxiosRequestConfig } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginDataModel } from '../../shared/models';

import { loading, succes, error, logout } from './reducer';

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const tokenExpirationValidity = 86400000;

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
      return dispatch(succes(userData));
    }
    console.log(userData);
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
      .then((res: AxiosRequestConfig) => {
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
        localStorage.setItem('userData', JSON.stringify(user));
        console.log(res);
        return dispatch(succes(user));
      })
      .catch((err: AxiosError) => {
        return dispatch(error({ code: 404 }));
      });
  };
};

export const registerUser = (userData: UserLoginDataModel) => {
  return sendRequest(userData, 'register');
};

export const loginUser = (userData: UserLoginDataModel) => {
  return sendRequest(userData, 'login');
};
