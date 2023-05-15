export interface WeatherCityModel {
  name: string;
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface UserLoginDataModel {
  [key: string]: any;
  name: string;
  id: string;
  homeId: string;
  email: string;
  token: string;
  tokenExpiration: number;
  weatherCities: WeatherCityModel[];
  recipes: any[];
  password?: string;
  currency?: string[];
}
