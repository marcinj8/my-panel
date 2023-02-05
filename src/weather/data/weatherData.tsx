import axios from 'axios';

const getData = (link: string) => {
  axios
    .get(link)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err, err.message);
      return err;
    });
};

export const getCityWeather = (city: string) => {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};

export const getFullCityWeather = (lat: number | null, lon: number | null) => {
  console.log(lat, lon);
  const link = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`

  return getData(link);
};

export const getCoordinates = (city: string) => {
  const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

  return getData(link);
};
