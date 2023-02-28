import axios, { AxiosError, AxiosResponse } from 'axios';

import {
  loading,
  setPurchaseList,
  error,
  setInit,
  PurchaseListType,
} from './reducer';

export const fetchPurchaseList = (listType: PurchaseListType) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/purchase-list/${listType}-lists`;
    axios
      .get(link)
      .then((res: AxiosResponse) =>
        dispatch(
          setPurchaseList({ purchaseList: res.data.purchaseList, listType })
        )
      )
      .catch((err: AxiosError) => {
        console.log(err);
        return dispatch(error({ code: 404 }));
      });
  };
};
