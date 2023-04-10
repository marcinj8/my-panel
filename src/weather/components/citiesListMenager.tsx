import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';

import { AsyncView } from '../../shared/components/asyncView';
import { AddNewCityForm } from '../components/addNewCityForm';
import { Button, Modal } from '../../shared/components';
import { CitiesList } from '../components/citiesList';

export const CitiesListMenager: React.FC<{ listOn?: boolean }> = ({
  listOn = false,
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [showAddCity, setShowAddCity] = useState<boolean>(false);

  const weather = useAppSelector((state) => state.weatherSlice);
  const { weatherCities } = useAppSelector((state) => state.userData);

  return (
    <>
      <AsyncView status={weather.status} message={weather.message} />
      {listOn ? (
        <CitiesList title='wybierz lokalizacje' list={weatherCities} />
      ) : (
        <Modal
          show={showList && !showAddCity}
          onCancel={() => setShowList(false)}
        >
          <CitiesList title='wybierz lokalizacje' list={weatherCities} />
          <Button name='dodaj miejsce' clicked={() => setShowAddCity(true)} />
        </Modal>
      )}

      <Modal show={showAddCity} onCancel={() => setShowAddCity(false)}>
        <AddNewCityForm onCloseForm={() => setShowAddCity(false)} />
      </Modal>
      {!listOn && <Button name='lista' clicked={() => setShowList(true)} />}
      <Button name='dodaj miejsce' clicked={() => setShowAddCity(true)} />
    </>
  );
};
