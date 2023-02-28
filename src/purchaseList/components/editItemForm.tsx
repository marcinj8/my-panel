import React from 'react';

import { PurchaseListItemModel } from '../data/purchaseListData';

import { UseFrom } from '../../shared/hooks/form-hook';
import { Button, Input } from '../../shared/components';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MIN,
} from '../../shared/components/input/validators';

interface EditItemFormData {
  item: PurchaseListItemModel | null;
}

const inputRequiredData: string[] = ['name', 'quantity', 'unit', 'description'];

export const EditItemForm: React.FC<EditItemFormData> = ({ item }) => {
  const createInputs = () => {
    const createdInputs: {
      [key: string]: { value: string; isValid: boolean };
    } = {};
    console.log(!!item);
    inputRequiredData.forEach((itemName) => {
      createdInputs[itemName] = {
        value: item ? item[itemName] : '',
        isValid: itemName === 'description' ? true : !!item,
      };
    });
    return createdInputs;
  };

  const { formState, onInput } = UseFrom(createInputs());

  return (
    <form>
      <h3>{formState.inputs.name.value}</h3>
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        label='nazwa'
        value={formState.inputs.name.value}
        isValid={formState.inputs.name.isValid}
        type='text'
        name='name'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
        label='ilość'
        value={formState.inputs.quantity.value}
        isValid={formState.inputs.name.isValid}
        type='number'
        name='quantity'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
        label='jednostka'
        value={formState.inputs.unit.value}
        isValid={formState.inputs.name.isValid}
        type='text'
        name='unit'
        onInput={onInput}
      />
      <Input
        validators={[]}
        label='uwagi'
        value={formState.inputs.description.value}
        isValid={true}
        type='text'
        name='description'
        onInput={onInput}
      />
      <Button
        disabled={!formState.isFormValid}
        type='confirm'
        bTnCenter
        name={item ? 'popraw' : 'dodaj'}
        clicked={() => console.log(formState)}
      />
    </form>
  );
};
