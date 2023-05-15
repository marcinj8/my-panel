import React, { MouseEventHandler, useState } from 'react';

import { Button, Input } from '../../shared/components';

import {
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/components/input/validators';
import { UseFrom } from '../../shared/hooks/form-hook';

import { RecipeIngredientModel } from '../../store/userData/reducer';

interface IngredientFormFieldInterface {
  onUpdate: Function;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  id: string;
}

export const IngredientFormField: React.FC<IngredientFormFieldInterface> = ({
  onUpdate,
  id,
  onDelete,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(true);
  const [ingredientData, setIngredientData] =
    useState<RecipeIngredientModel | null>(null);
  const { formState, onInput } = UseFrom(
    {
      name: {
        value: '',
        isValid: false,
      },
      quantity: {
        value: 1,
        isValid: true,
      },
      unit: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: true,
      },
    },
    false
  );

  const ingredientCreator = () => {
    let newIngredientData: any = {};
    Object.keys(formState.inputs).forEach((input: any) => {
      newIngredientData[input] = formState.inputs[input].value;
    });
    newIngredientData.onPurchaseList = false;
    newIngredientData.available = false;
    newIngredientData.id = id;

    setIngredientData(newIngredientData);
    onUpdate(newIngredientData, id, formState.isFormValid);
    setIsEditMode(false);
  };

  return isEditMode ? (
    <div
      style={{
        borderBottom: '1px solid black',
        width: '90%',
        maxWidth: '500px',
        margin: ' 0 auto',
      }}
    >
      <div style={{ display: 'flex' }}>
        <Input
          validators={[VALIDATOR_REQUIRE()]}
          placeholder='nazwa'
          value={formState.inputs.name.value}
          isValid={formState.inputs.name.isValid}
          type='text'
          name='name'
          onInput={onInput}
        />
        <Input
          validators={[VALIDATOR_MIN(1)]}
          placeholder='ilość'
          value={formState.inputs.quantity.value}
          type='number'
          name='quantity'
          isValid={true}
          style={{ width: '60px' }}
          onInput={onInput}
        />
        <Input
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          placeholder='jednostka'
          value={formState.inputs.unit.value}
          isValid={formState.inputs.unit.isValid}
          type='text'
          name='unit'
          style={{ width: '120px' }}
          onInput={onInput}
        />
      </div>
      <Input
        validators={[]}
        placeholder='opis'
        value={formState.inputs.description.value}
        type='text'
        name='description'
        isValid={true}
        onInput={onInput}
      />
      <Button
        disabled={!formState.isFormValid}
        name='potwierdź'
        variant='inline'
        clicked={ingredientCreator}
      />
      <Button name='usuń' variant='inline' type='danger' clicked={onDelete} />
    </div>
  ) : (
    ingredientData && (
      <li
        style={{
          width: '350px',
          margin: '0 auto',
          borderBottom: '1px solid black',
        }}
      >
        <h3 style={{ display: 'inline-block' }}>{ingredientData.name} </h3>
        <span>
          {ingredientData.quantity} {ingredientData.unit}
        </span>
        <Button
          name='edytuj'
          variant='inline'
          clicked={() => setIsEditMode(true)}
        />
        <Button name='usuń' variant='inline' type='danger' clicked={onDelete} />
        {ingredientData.description && <div>{ingredientData.description}</div>}
      </li>
    )
  );
};
