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
    return dispatch(loginUser(JSON.parse(userData)));
  } else {
    return logout();
  }
};

export const logoutUser = () => {
  localStorage.removeItem('userData');
  return logout();
};

export const loginUser = (userData: UserLoginDataModel) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const backendLink = `${process.env.REACT_APP_BACKEND_URL}/user/login`;
    axios
      .post(backendLink, { userData: JSON.stringify(userData) }, config)
      .then((res: AxiosRequestConfig) => {
        // console.log(res);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
        return dispatch(
          succes({
            id: res.data.userData.id,
            email: res.data.userData.email,
            name: res.data.userData.name,
          })
        );
      })
      .catch((err: AxiosError) => {
        // console.log(err);
        return dispatch(error({ code: 404 }));
      });
  };
};

// store.dispatch(checkIsLoggedin);
