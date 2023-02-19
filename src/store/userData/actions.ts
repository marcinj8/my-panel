import axios, { AxiosError, AxiosResponse } from 'axios';

import { loading, setPurchaseList, error, setInit } from './reducer';

export const fetchPurchaseList = () => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/purchase-list/home-lists`;
    axios
      .get(link)
      .then((res: AxiosResponse) =>
        dispatch(setPurchaseList(res.data.purchaseList))
      )
      .catch((err: AxiosError) => {
        console.log(err);
        return dispatch(error({ code: 404 }));
      });
  };
};
