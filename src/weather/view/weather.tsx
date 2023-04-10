import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';

import { getFullCityWeather } from '../../store/weatherSlice/actions';
import { FullWeatherView } from '../components/fullWeatherView';
import { CitiesListMenager } from '../components/citiesListMenager';

export const Weather: React.FC = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weatherSlice);

  useEffect(() => {
    if (weather.currentDisplayed !== null && weather.weatherData === null) {
      dispatch(getFullCityWeather(weather.currentDisplayed));
    }
  }, [weather.currentDisplayed, weather.weatherData, dispatch]);

  return (
    <HocSection>
      <>
        <CitiesListMenager />
        <header>
          {weather.currentDisplayed ? (
            <h3>Pogoda - {weather.currentDisplayed.name}</h3>
          ) : (
            <h3>wybierz miejsce</h3>
          )}
        </header>
        {weather.weatherData && (
          <FullWeatherView weatherData={weather.weatherData} />
        )}
      </>
    </HocSection>
  );
};
