import axios, { AxiosError, AxiosRequestConfig } from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserData } from '../../shared/models';
import { AppThunk, store } from '../store';
import { loading, succes, error } from './reducer';
const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const loginUser = (
  e: React.MouseEvent<HTMLButtonElement>,
  userData: UserData
) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const backendLink = `http://localhost:5000/api/user/login`;
    axios
      .post(backendLink, { userData: JSON.stringify(userData) }, config)
      .then((res: AxiosRequestConfig) => {
        console.log(res);
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

// store.dispatch(loginUser);
