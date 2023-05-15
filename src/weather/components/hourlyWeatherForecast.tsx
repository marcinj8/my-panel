import React from 'react';

import {
  StyledHourlyForecast,
  StyledHourForecast,
  StyledHourlyForecastDate,
  StyledHourlyForecastTemp,
} from '../style/hourlyWeatherForecast.style';
import { StyledCurrentWeatherImg } from '../style/currentWeather.style';

export const HourlyForecastWeather: React.FC<{ hourlyForecast: any[] }> = ({
  hourlyForecast,
}) => {
  const hourlyWeather = hourlyForecast
    .map((forecast) => {
      const hour = new Date(forecast.dt * 1000).getHours();
      const currentHour = new Date().getHours();
      return (
        <StyledHourForecast key={forecast.dt}>
          <StyledHourlyForecastDate>
            {currentHour === hour
              ? 'teraz'
              : hour === 0
              ? 'jutro'
              : hour + ':00'}
          </StyledHourlyForecastDate>
          <img
            src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
            alt={forecast.weather[0].description}
          />
          <StyledHourlyForecastTemp>
            {Math.round(forecast.temp)}°
          </StyledHourlyForecastTemp>
        </StyledHourForecast>
      );
    })
    .slice(0, 22);

  return <StyledHourlyForecast>{hourlyWeather}</StyledHourlyForecast>;
};
