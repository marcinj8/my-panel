import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { AsyncView } from '../../shared/components/asyncView';
import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { Button, Modal } from '../../shared/components';

import { getLocation } from '../../deviceInfo/data/locationData';
import { getFullCityWeather } from '../../store/weatherSlice/actions';
import { FullWeatherView } from '../components/fullWeatherView';
import { AddNewCityForm } from '../components/addNewCityForm';

export const Weather: React.FC = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [showAddCity, setShowAddCity] = useState<boolean>(false);

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

  return (
    <HocSection>
      <>
        <AsyncView status={weather.status} message={weather.message} />
        <Modal
          show={showList && !showAddCity}
          onCancel={() => setShowList(false)}
        >
          <h3>wybierz lokalizacje</h3>
          <Button name='dodaj miasto' clicked={() => setShowAddCity(true)} />
        </Modal>
        <Modal show={showAddCity} onCancel={() => setShowAddCity(false)}>
          <AddNewCityForm />
        </Modal>
        <header>
          <h3>Pogoda dla Twojej lokalizacji</h3>
          <Button name='lista' clicked={() => setShowList(true)} />
          <Button name='dodaj miasto' clicked={() => setShowAddCity(true)} />
        </header>
        {weather.weatherData && (
          <FullWeatherView weatherData={weather.weatherData} />
        )}
      </>
    </HocSection>
  );
};
