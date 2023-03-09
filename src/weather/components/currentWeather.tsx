import React from 'react';


import {
  StyledCurrentWeather,
  StyledCurrentWeatherTitle,
  StyledCurrentWeatherBigData,
  StyledCurrentWeatherData,
  StyledCurrentWeatherImg,
} from '../style/currentWeather.style';

const CurrentWeather: React.FC<{ city: String, currentWeather: any }> = ({
  city,
  currentWeather,
}) => {
  return (
    <StyledCurrentWeather>
      <div>
        <StyledCurrentWeatherTitle>{city}</StyledCurrentWeatherTitle>
        <StyledCurrentWeatherBigData>
          {Math.round(currentWeather.temp)}°
        </StyledCurrentWeatherBigData>
        <StyledCurrentWeatherTitle>
          {currentWeather.weather[0].description}
        </StyledCurrentWeatherTitle>
        <StyledCurrentWeatherData>
          Feels like {Math.round(currentWeather.feels_like)}°
        </StyledCurrentWeatherData>
      </div>
      <div style={{ overflow: 'hidden', width: '50%', height: '100%' }}>
        <StyledCurrentWeatherImg
          src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
          alt={currentWeather.weather[0].description}
        />
      </div>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
