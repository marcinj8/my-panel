import React, { useMemo } from 'react';

import { WeatherDataModel } from '../../store/weatherSlice/reducer';

import { WEATHER_DESC } from '../../shared/data/constVariables';

export const WeatherShortInfo: React.FC<{ weather: WeatherDataModel }> = ({
  weather,
}) => {
  const currentTime = new Date().getHours()
  const advice = useMemo(() => {
    let description = WEATHER_DESC.find((desc) => {
      return desc.eng === weather.hourly[0].weather[0].description;
    });
    return description;
  }, [weather]);

  console.log(currentTime, advice);

  return (
    <div>
      <div>Teraz jest {advice?.pl}</div>
      <div>{advice?.advice.now}</div>

    </div>
  );
};
