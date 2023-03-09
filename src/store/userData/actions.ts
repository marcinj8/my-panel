import axios, { AxiosError, AxiosResponse } from 'axios';
import { PurchaseListItemModel } from '../../purchaseList/data/purchaseListData';

import {
  loading,
  setPurchaseList,
  error,
  setInit,
  PurchaseListType,
} from './reducer';

export const fetchPurchaseList = (
  listType: PurchaseListType,
  id: string,
  token: string
) => {
  console.log(id);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/purchase-list/${listType}-lists?id:${id}`;
    axios
      .get(link, config)
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

export const updateListItem = (
  item: PurchaseListItemModel,
  listType: PurchaseListType
) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/purchase-list/${listType}-lists`;
    axios.put(link, {});
  };
};
