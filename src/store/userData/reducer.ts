import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PurchaseListItemModel } from '../../purchaseList/data/purchaseListData';
import { ErrorModel } from '../../shared/models';
import { RootState } from '../store';

interface Location {
  latitude: number;
  longitude: number;
}

export type PurchaseListType = 'private' | 'home';

interface PurchaseList {
  id: string;
  name: string;
  userId: string;
  type: PurchaseListType;
  items: PurchaseListItemModel[];
}

export interface UserDataState {
  [key: string]: any;
  status: 'loading' | 'success' | 'init' | 'error';
  message: string | null;
  location: null | Location;
  privatePurchaseLists: null | PurchaseList;
  homePurchaseLists: null | PurchaseList;
}

const initialState: UserDataState = {
  location: null,
  privatePurchaseLists: null,
  homePurchaseLists: null,
  status: 'init',
  message: null,
};

const updateItem = (
  state: UserDataState,
  action: PayloadAction<{
    itemUpdated: PurchaseListItemModel;
    listType: PurchaseListType;
  }>
) => {
  if (!state.homePurchaseLists && !state.privatePurchaseLists) {
    return {
      state: state,
    };
  }
  const listType = (action.payload.listType + 'PurchaseLists') as string;
  const updatedList = { ...state[listType] };
  // updatedList.items = [...state[listType].items];

  const updatedItemIndex = updatedList.items.findIndex(
    (item: PurchaseListItemModel) => item.id === action.payload.itemUpdated.id
  );
  updatedList.items[updatedItemIndex] = action.payload.itemUpdated;

  return {
    ...(state.listType = updatedList),
  };
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loading: (state: UserDataState) => {
      state.status = 'loading';
    },
    error: (state: UserDataState, action: PayloadAction<ErrorModel>) => {
      state.status = 'error';
      state.message = action.payload.message
        ? action.payload.message
        : 'An error occured, please try agian later.';
    },
    setInit: (state: UserDataState) => {
      state.status = 'init';
      state.message = null;
      state.privatePurchaseLists = null;
      state.homePurchaseLists = null;
    },
    setPurchaseList: (
      state: UserDataState,
      action: PayloadAction<PurchaseList>
    ) => {
      state.status = 'success';
      state.homePurchaseLists = action.payload;
    },
    updatePurchaseListItem: (
      state: UserDataState,
      action: PayloadAction<{
        itemUpdated: PurchaseListItemModel;
        listType: PurchaseListType;
      }>
    ) => {
      updateItem(state, action);
    },
    setUserLocation: (
      state: UserDataState,
      action: PayloadAction<Location>
    ) => {
      state.location = action.payload;
    },
  },
});

export const {
  loading,
  setUserLocation,
  updatePurchaseListItem,
  setPurchaseList,
  error,
  setInit,
} = userDataSlice.actions;

export const user = (state: RootState) => state.themeData;

export default userDataSlice.reducer;
