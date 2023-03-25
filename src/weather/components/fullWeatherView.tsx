import React from 'react';

import { CurrentWeather } from './currentWeather';
import { CurrentWeatherDetails } from './currentWeatherDetails';
import { DailyForecastWeather } from './dailyWeatherForecast';
import { HourlyForecastWeather } from './hourlyWeatherForecast';

import { WeatherDataModel } from '../../store/weatherSlice/reducer';

export const FullWeatherView: React.FC<{ weatherData: WeatherDataModel }> = ({
  weatherData,
}) => {

  return (
    <>
      <CurrentWeather currentWeather={weatherData.current} />
      <HourlyForecastWeather hourlyForecast={weatherData.hourly} />
      <DailyForecastWeather dailyForecast={weatherData.daily} />
      <CurrentWeatherDetails
        currentDetails={weatherData.current}
        precipitation={weatherData.minutely[0].precipitation}
      />
    </>
  );
};
