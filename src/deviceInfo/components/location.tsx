import React, { useEffect, useRef, useState } from 'react';
import { getFullCityWeather } from '../../weather/data/weatherData';
import { getLocation } from '../data/locationData';

export const Location = () => {
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
      {location ? (
        <div>
          <div>
            Lat: {Math.round(location.latitude * 100) / 100}{' '}
            {location.latitude > 0 ? 'N' : 'S'}
          </div>
          <div>
            Lon: {Math.round(location.longitude * 100) / 100}{' '}
            {location.latitude > 0 ? 'W' : 'E'}
          </div>
        </div>
      ) : (
        <div> No location data</div>
      )}
    </div>
  );
};
