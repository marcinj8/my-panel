import React, { useMemo } from 'react';

import { WEATHER_DESC_TRANSLATE } from '../../shared/data/constVariables';

import {
  StyledCurrentWeather,
  StyledCurrentWeatherTitle,
  StyledCurrentWeatherBigData,
  StyledCurrentWeatherData,
  StyledCurrentWeatherImg,
} from '../style/currentWeather.style';

export const CurrentWeather: React.FC<{
  currentWeather: any;
  city?: String;
}> = ({ city, currentWeather }) => {
  const weathereDesc = useMemo(() => {
    let description = WEATHER_DESC_TRANSLATE.find((desc) => {
      return desc.eng === currentWeather.weather[0].description;
    });
    return description;
  }, [currentWeather.weather]);
  
  return (
    <StyledCurrentWeather>
      <div>
        {/* <StyledCurrentWeatherTitle>{city}</StyledCurrentWeatherTitle> */}
        <StyledCurrentWeatherBigData>
          {Math.round(currentWeather.temp)}°C
        </StyledCurrentWeatherBigData>
        <StyledCurrentWeatherTitle>
          {weathereDesc ? weathereDesc.pl : 'brak danych'}
        </StyledCurrentWeatherTitle>
        <StyledCurrentWeatherData>
          Temperatura odczuwalna to {Math.round(currentWeather.feels_like)}° C.
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
