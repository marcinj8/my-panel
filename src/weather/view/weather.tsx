import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { AsyncView } from '../../shared/components/asyncView';
import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { CurrentWeather } from '../components/currentWeather';
import { DailyForecastWeather } from '../components/dailyWeatherForecast';
import { CurrentWeatherDetails } from '../components/currentWeatherDetails';
import { HourlyForecastWeather } from '../components/hourlyWeatherForecast';

import { getLocation } from '../../deviceInfo/data/locationData';
import { getFullCityWeather } from '../../store/weatherSlice/actions';

export const Weather: React.FC = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);

  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weatherSlice);

  useEffect(() => {
    if (!location) {
      getLocation(setLocation);
    }
  }, [location]);

  useEffect(() => {
    if (location && !weather.weatherData) {
      dispatch(getFullCityWeather(location.latitude, location.longitude));
    }
  }, [location, dispatch, weather.weatherData]);

  console.log(location, weather);

  return (
    <HocSection>
      <>
        <AsyncView status={weather.status} message={weather.message} />
        {weather.weatherData && (
          <>
            <CurrentWeather currentWeather={weather.weatherData.current} />
            <HourlyForecastWeather
              hourlyForecast={weather.weatherData.hourly}
            />
            <DailyForecastWeather dailyForecast={weather.weatherData.daily} />
            <CurrentWeatherDetails
              currentDetails={weather.weatherData.current}
              precipitation={weather.weatherData.minutely[0].precipitation}
            />
          </>
        )}
      </>
    </HocSection>
  );
};
