export interface UserLoginDataModel {
  [key: string]: any;
  name: string;
  id: string;
  homeId: string;
  email: string;
  token: string;
  password?: string;
  weatherCities?: string[];
  currency?: string[];
  // add token to storage data?
}
