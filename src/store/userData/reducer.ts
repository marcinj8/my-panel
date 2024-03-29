import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PurchaseListItemModel } from '../../purchaseList/data/purchaseListData';
import { ErrorModel } from '../../shared/models';
import { RootState, StatusType } from '../store';

interface Location {
  latitude: number;
  longitude: number;
}

export interface CityDataModel {
  name: string;
  id: string;
  location: Location;
}

export interface RecipeIngredientModel {
  [key: string]: any;
  id: string;
  name: string;
  quantity: number;
  unit: string;
  onPurchaseList: boolean;
  available: boolean;
  description?: string;
}

export interface RecipeDataModel {
  [key: string]: any;
  id: string;
  name: string;
  ingredients: RecipeIngredientModel[];
  instructions: string[];
  links: string[];
  tags: string[];
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
  status: StatusType;
  message: string | null;
  location: null | CityDataModel;
  privatePurchaseLists: null | PurchaseList;
  homePurchaseLists: null | PurchaseList;
  currency: [] | null;
  weatherCities: CityDataModel[] | null;
  recipes: RecipeDataModel[] | null;
}

const initialState: UserDataState = {
  location: null,
  privatePurchaseLists: null,
  homePurchaseLists: null,
  status: 'init',
  message: null,
  currency: null,
  weatherCities: null,
  recipes: null,
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
  // updatedList.items = [...state[listType].items]; // deep copy

  const updatedItemIndex = updatedList.items.findIndex(
    (item: PurchaseListItemModel) => item.id === action.payload.itemUpdated.id
  );
  updatedList.items[updatedItemIndex] = action.payload.itemUpdated;

  return {
    ...(state.listType = updatedList),
  };
};

const setList = (
  state: UserDataState,
  action: PayloadAction<{
    purchaseList: PurchaseList;
    listType: PurchaseListType;
  }>
) => {
  const listType = (action.payload.listType + 'PurchaseLists') as string;
  const listUpdated = { ...action.payload.purchaseList };
  const stateUpdated = { ...state };

  stateUpdated.status = 'success';
  stateUpdated[listType] = { ...listUpdated };

  return {
    ...stateUpdated,
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
      action: PayloadAction<{
        purchaseList: PurchaseList;
        listType: PurchaseListType;
      }>
    ) => {
      return setList(state, action);
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
      action: PayloadAction<CityDataModel>
    ) => {
      state.location = action.payload;
    },
    setWeatherCities: (
      state: UserDataState,
      action: PayloadAction<CityDataModel[]>
    ) => {
      state.weatherCities = action.payload;
    },
    addCity: (state: UserDataState, action: PayloadAction<CityDataModel>) => {
      const weatherCitiesUpdated = state.weatherCities
        ? [...state.weatherCities]
        : [];
      weatherCitiesUpdated.push(action.payload);
      return {
        ...state,
        weatherCities: weatherCitiesUpdated,
      };
    },
    updateCityList: (
      state: UserDataState,
      action: PayloadAction<CityDataModel[]>
    ) => {
      return {
        ...state,
        weatherCities: action.payload,
      };
    },
    setRecipes: (
      state: UserDataState,
      action: PayloadAction<RecipeDataModel[]>
    ) => {
      state.recipes = action.payload;
    },
    addRecipe: (
      state: UserDataState,
      action: PayloadAction<RecipeDataModel>
    ) => {
      const updatedRecipes = state.recipes !== null ? [...state.recipes] : [];
      updatedRecipes?.push(action.payload);
      console.log(updatedRecipes);
      return {
        ...state,
        recipes: updatedRecipes,
      };
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
  setWeatherCities,
  addCity,
  updateCityList,
  setRecipes,
  addRecipe,
} = userDataSlice.actions;

export const user = (state: RootState) => state.themeData;

export default userDataSlice.reducer;
