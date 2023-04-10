import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button, Input } from '../../shared/components';
import { AsyncView } from '../../shared/components/asyncView';

import { UseFrom } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/components/input/validators';
import { getPlaceLocation } from '../../deviceInfo/data/locationData';

import {
  StyledCitiesResultSection,
  StyledCitiesResultList,
  StyledCitiesResultListItem,
} from '../style/addNewCityForm.style';

import { StatusType } from '../../store/store';
import { addNewCityWeather } from '../../store/userData/actions';

export const AddNewCityForm: React.FC<{ onCloseForm: Function }> = ({
  onCloseForm,
}) => {
  const [localStatus, setLocalStatus] = useState<StatusType>('init');
  const [multipleResponse, setMultipleResponse] = useState<any | null>(null);

  const token = useAppSelector((state) =>
    state.loginData.userData?.token ? state.loginData.userData?.token : ''
  );
  const dispatch = useAppDispatch();

  const { formState, onInput } = UseFrom(
    {
      city: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const onAddHandler = async () => {
    const response = await getPlaceLocation(
      formState.inputs.city.value as string
    );
    if (!Array.isArray(response) || response.length === 0) {
      setLocalStatus('error');
    }
    if (response.length > 1) {
      setMultipleResponse(response);
    } else {
      const newCity = {
        name: response[0].formatted_address,
        location: {
          latitude: response[0].geometry.location.lat,
          longitude: response[0].geometry.location.lng,
        },
      };
      dispatch(addNewCityWeather(newCity, token));
      onCloseForm();
    }
  };

  const onChooseCityHandler = (city: any) => {
    const newCity = {
      name: city.formatted_address,
      location: {
        latitude: city.geometry.location.lat,
        longitude: city.geometry.location.lng,
      },
    };
    dispatch(addNewCityWeather(newCity, token));
    onCloseForm();
  };

  return multipleResponse === null ? (
    <form style={{ padding: '25px' }}>
      <AsyncView
        status={localStatus}
        message={null}
        onCancel={() => setLocalStatus('init')}
      />
      <Input
        validators={[VALIDATOR_REQUIRE()]}
        label='dodaj miejsce'
        placeholder='miasto, reqion'
        value=''
        type='text'
        name='city'
        onInput={onInput}
      />
      <Button
        disabled={!formState.isFormValid}
        bTnCenter
        type='confirm'
        name='dalej'
        clicked={onAddHandler}
      />
    </form>
  ) : (
    <StyledCitiesResultSection>
      <h3>wybierz</h3>
      <StyledCitiesResultList>
        {multipleResponse.map((address: any) => (
          <StyledCitiesResultListItem
            onClick={() => onChooseCityHandler(address)}
            key={address.place_id}
          >
            {address.address_components[0].long_name},{' '}
            {address.address_components[1].long_name},{' '}
            {address.address_components[2].long_name}
          </StyledCitiesResultListItem>
        ))}
      </StyledCitiesResultList>
    </StyledCitiesResultSection>
  );
};
