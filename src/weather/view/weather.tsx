import React, { useEffect, useRef, useState } from 'react';

import { getLocation } from '../../deviceInfo/data/locationData';
import { getFullCityWeather } from '../data/weatherData';

export const Weather:React.FC = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);
  let weather = useRef<any>(null);

  useEffect(() => {
    if (!location) {
      getLocation(setLocation);
    }
    if (location) {
      weather.current = getFullCityWeather(
        location.latitude,
        location.longitude
      );
    }
  }, [location]);

  console.log(weather.current);

  return (
    <div>
      Weather
    </div>
  );
};
