import axios, { AxiosError, AxiosResponse } from 'axios';
import { PurchaseListItemModel } from '../../purchaseList/data/purchaseListData';

import {
  loading,
  setPurchaseList,
  error,
  PurchaseListType,
  CityDataModel,
  addCity,
  updateCityList,
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

export const addNewCityWeather = (
  location: Omit<CityDataModel, 'id'>,
  token: string
) => {
  return async (dispatch: any) => {
    dispatch(loading());
    const link = `${process.env.REACT_APP_BACKEND_URL}/user/weather-cities/add`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(link, { location: JSON.stringify(location) }, config)
      .then((res) => {
        const addedLocation = JSON.parse(res.data.location);
        console.log(addedLocation);
        return dispatch(addCity(addedLocation));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCityWeather = (id: string, token: string) => {
  return async (dispatch: any) => {
    dispatch(loading());
    let updatedCitiesList: CityDataModel[];
    const link = `${process.env.REACT_APP_BACKEND_URL}/user/weather-cities/delete/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(link, config)
      .then((res) => {
        console.log(res);
        updatedCitiesList = JSON.parse(res.data.citiesList);
        console.log(updatedCitiesList);
        return dispatch(updateCityList(updatedCitiesList));
      })
      .catch((err) => console.log(err));
  };
};
