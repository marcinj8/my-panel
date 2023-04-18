import axios from 'axios';
import { error, loading, succes } from './reducer';
import { CityDataModel } from '../userData/reducer';

const getData = (link: string) => {
  return async (dispatch: any) => {
    dispatch(loading());
    axios
      .get(link)
      .then((res) => {
        dispatch(succes(res.data));
      })
      .catch((err) => {
        console.log(err, err.message, 'weather getting error');
        dispatch(error(err));
      });
  };
};

export const getCityWeather = (city: string) => {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};

export const getFullCityWeather = (position: CityDataModel) => {
  const { latitude, longitude } = { ...position.location };
  const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};

export const getCoordinates = (city: string) => {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};
