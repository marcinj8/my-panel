import axios, { AxiosError, AxiosRequestConfig } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginDataModel } from '../../shared/models';
// import { AppThunk, store } from '../store';
import { loading, succes, error, logout } from './reducer';
const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const checkIsLoggedin = (dispatch: Function) => {
  const userData = localStorage.getItem('userData');
  if (userData) {
    return dispatch(succes(JSON.parse(userData)));
  } else {
    return logout();
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
        localStorage.setItem('userData', JSON.stringify({ ...res.data }));
        return dispatch(
          succes({
            id: res.data.id,
            email: res.data.email,
            name: res.data.name,
            homeId: res.data.homeId,
            token: res.data.token,
          })
        );
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

// store.dispatch(checkIsLoggedin);
