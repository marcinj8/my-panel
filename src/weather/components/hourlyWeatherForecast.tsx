import React from 'react';

import {
  StyledHourlyForecast,
  StyledHourForecast,
  StyledHourlyForecastDate,
  StyledHourlyForecastTemp,
} from '../style/hourlyWeatherForecast.style';

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
          <StyledHourlyForecastTemp>
            {Math.round(forecast.temp)}°
          </StyledHourlyForecastTemp>
        </StyledHourForecast>
      );
    })
    .slice(0, 22);

  return <StyledHourlyForecast>{hourlyWeather}</StyledHourlyForecast>;
};
