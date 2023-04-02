export interface WeatherCityModel {
  name: string;
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
  password?: string;
  weatherCities?: WeatherCityModel[];
  currency?: string[];
}
