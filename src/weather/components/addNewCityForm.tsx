import React, { useState } from 'react';

import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/components/input/validators';
import { getPlaceLocation } from '../../deviceInfo/data/locationData';

export const AddNewCityForm = () => {
  const [multipleResponse, setMultipleResponse] = useState<any | null>(null);
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
    console.log(formState);
    const response = await getPlaceLocation(
      formState.inputs.city.value as string
    );
    console.log(response);
    if (response.length > 1) {
      setMultipleResponse(response);
    }
  };
  console.log(multipleResponse);
  return multipleResponse === null ? (
    <form style={{ padding: '25px' }}>
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
    <div>
      <h3>wybierz</h3>
      <ul>
        {multipleResponse.map((address: any) => (
          <li
            style={{ color: 'white', margin: '10px auto' }}
            key={address.place_id}
          >
            {address.formatted_address},{' '}
            {address.address_components[1].long_name},{' '}
            {address.address_components[2].long_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
