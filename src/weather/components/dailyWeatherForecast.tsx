import React from 'react';

import { WEEKDAY } from '../../shared/data/constVariables';

import {
  StyledDailyForecast,
  StyledDayForecast,
} from '../style/dailyWeatherForecast.style';

export const DailyForecastWeather: React.FC<{ dailyForecast: any[] }> = ({
  dailyForecast,
}) => {
  const dailyWeather = dailyForecast
    .map((forecast) => {
      const day = new Date(forecast.dt * 1000).getDay();
      return (
        <StyledDayForecast key={forecast.dt} style={{ display: 'flex' }}>
          <h4>{WEEKDAY[day]}</h4>
          <div>
            <img
              src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            <div style={{ fontWeight: 'lighter' }}>
              {forecast.pop ? Math.round(forecast.pop * 100) + '%' : ''}
            </div>
          </div>
          <div>
            <div>{Math.round(forecast.temp.day)}</div>
            <div style={{ fontWeight: 'lighter' }}>
              {Math.round(forecast.temp.night)}
            </div>
          </div>
        </StyledDayForecast>
      );
    })
    .slice(1, 7);

  return <StyledDailyForecast>{dailyWeather}</StyledDailyForecast>;
};
