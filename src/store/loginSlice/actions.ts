import axios, { AxiosError, AxiosRequestConfig } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserData } from '../../shared/models';
import { AppThunk, store } from '../store';
import { loading, succes, error, logout } from './reducer';
const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const checkIsLoggedin = (dispatch: Function) => {
  const userData = localStorage.getItem('userData');
  console.log(userData);
  if (userData) {
    return dispatch(loginUser(JSON.parse(userData)));
  }
};

export const logoutUser = () => {
  localStorage.removeItem('userData');
  return logout()
};

export const loginUser = (userData: UserData) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const backendLink = `http://localhost:5000/api/user/login`;
    axios
      .post(backendLink, { userData: JSON.stringify(userData) }, config)
      .then((res: AxiosRequestConfig) => {
        console.log(res);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
        return dispatch(
          succes({ mail: res.data.userData.mail, name: res.data.userData.name })
        );
      })
      .catch((err: AxiosError) => {
        console.log(err);
        return dispatch(error({ code: 404 }));
      });
  };
};

store.dispatch(logoutUser);
