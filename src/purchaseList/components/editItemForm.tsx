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
    inputRequiredData.forEach((itemName) => {
      createdInputs[itemName] = {
        value: item ? item[itemName] : '',
        isValid: !!item,
      };
    });
    return createdInputs;
    // return {
    //   name: {
    //     value: item ? item.name : '',
    //     isValid: !!item?.name,
    //   },
    //   quantity: {
    //     value: item ? item.quantity : '',
    //     isValid: !!item?.quantity,
    //   },
    //   unit: {
    //     value: item ? item.unit : '',
    //     isValid: !!item?.unit,
    //   },
    //   description: {
    //     value: item ? item.description : '',
    //     isValid: !!item?.description,
    //   },
    // };
  };
  const { formState, onInput } = UseFrom(createInputs());

  return (
    <form>
      <h3>{formState.inputs.name.value}</h3>
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        label='nazwa'
        value={formState.inputs.name.value}
        type='text'
        name='name'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
        label='ilość'
        value={formState.inputs.quantity.value}
        type='number'
        name='quantity'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        label='jednostka'
        value={formState.inputs.unit.value}
        type='text'
        name='unit'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        label='uwagi'
        value={formState.inputs.description.value}
        type='text'
        name='description'
        onInput={onInput}
      />
      <Button
        type='confirm'
        name={item ? 'popraw' : 'dodaj'}
        clicked={() => console.log(formState)}
      />
    </form>
  );
};
