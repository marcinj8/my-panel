import React, { useEffect } from 'react';
import { useGeolocation } from 'react-use';
import { getFullCityWeather } from '../data/weatherData';

export const Weather = () => {
  const location = useGeolocation();
  console.log(location.latitude, location.loading);

  useEffect(() => {
    if (location.loading || location.latitude === null) {
      return;
    }
    const weather = getFullCityWeather(location.latitude, location.longitude);
    console.log(weather);
  }, [location.latitude, location.longitude, location.loading]);

  return (
    <div>
      Location status: {location.loading ? 'loading' : 'ready'}
      <div>Lat: {location.latitude}</div>
    </div>
  );
};
