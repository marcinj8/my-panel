import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { getLocation } from '../../deviceInfo/data/locationData';
import { getFullCityWeather } from '../../store/weatherSlice/actions';

export const Weather: React.FC = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);

  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state) => state.weatherSlice);

  useEffect(() => {
    if (!location) {
      getLocation(setLocation);
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      // getFullCityWeather(location.latitude, location.longitude);
      dispatch(getFullCityWeather(location.latitude, location.longitude));
    }
  }, [location]);

  console.log(location, weatherData);

  return <div>Weather</div>;
};
