import React from 'react';
import { CurrentWeatherDataModel } from '../../store/weatherSlice/reducer';

import {
  StyledCurrentWeatherDetails,
  StyledCWDTitle,
} from '../style/cirrentWeatherDetails.style';

export const CurrentWeatherDetails: React.FC<{
  currentDetails: CurrentWeatherDataModel;
  precipitation: number;
}> = ({ currentDetails, precipitation }) => {
  const sunrise = new Date(currentDetails.sunrise * 1000);
  const sunset = new Date(currentDetails.sunset * 1000);

  return (
    <StyledCurrentWeatherDetails>
      <div>
        <StyledCWDTitle>Wschód</StyledCWDTitle>
        <div>
          {sunrise.getHours()}:
          {sunrise.getMinutes() < 10
            ? '0' + sunrise.getMinutes()
            : sunrise.getMinutes()}
        </div>
      </div>
      <div>
        <StyledCWDTitle>Zachód</StyledCWDTitle>
        <div>
          {sunset.getHours()}:
          {sunset.getMinutes() < 10
            ? '0' + sunset.getMinutes()
            : sunset.getMinutes()}
        </div>
      </div>
      <div>
        <StyledCWDTitle>Deszcz</StyledCWDTitle>
        <div>{precipitation}%</div>
      </div>
      <div>
        <StyledCWDTitle>Wilgotność</StyledCWDTitle>
        <div>{currentDetails.humidity}%</div>
      </div>
      <div>
        <StyledCWDTitle>Wiatr</StyledCWDTitle>
        <div>{Math.round(currentDetails.wind_speed * 3.6)} km/h</div>
      </div>
      <div>
        <StyledCWDTitle>Ciśnienie</StyledCWDTitle>
        <div>{currentDetails.pressure} hPa</div>
      </div>
    </StyledCurrentWeatherDetails>
  );
};
