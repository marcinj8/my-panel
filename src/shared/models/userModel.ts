export interface UserLoginDataModel {
  [key: string]: any;
  name: string;
  id: string;
  homeId: string;
  email: string;
  token: string;
  tokenExpiration: number;
  password?: string;
  weatherCities?: string[];
  currency?: string[];
}
