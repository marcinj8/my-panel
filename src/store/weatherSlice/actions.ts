import axios from 'axios';
import { error, loading, succes } from './reducer';

const getData = (link: string) => {
  return async (dispatch: any) => {
    dispatch(loading());
    axios
      .get(link)
      .then((res) => {
        console.log(res);
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

export const getFullCityWeather = (lat: number | null, lon: number | null) => {
  const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};

export const getCoordinates = (city: string) => {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};
