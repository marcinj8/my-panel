import React, { useState, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AsyncView } from '../../shared/components/asyncView';
import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { StatusType } from '../../store/store';
import { IngredientFormField } from './ingredientdFormField';

import { VALIDATOR_REQUIRE } from '../../shared/components/input/validators';
import { RecipeIngredientModel } from '../../store/userData/reducer';
import {
  ingredientValidation,
  onAddPositoin,
  onDeletePosition,
  onRemovePositoin,
} from '../data/addRecipeForm';

export const AddNewRecipeForm = () => {
  const [localStatus, setLocalStatus] = useState<StatusType>('init');
  const [ingredientsData, setIngredientsData] = useState<
    RecipeIngredientModel[]
  >([]);
  const [isIngredientsValid, setIsIngredientValid] = useState<boolean>(false);
  // const ingredientsDataRef = useRef<RecipeIngredientModel[] | null>(null);

  const { formState, onInput } = UseFrom(
    {
      name: {
        value: '',
        isValid: false,
      },
      instructions: {
        value: '',
        isValid: false,
      },
      links: {
        value: '',
        isValid: true,
      },
    },
    false
  );

  const onIngredientUpdate = (
    ingredient: RecipeIngredientModel,
    id: string,
    isValid: boolean
  ) => {
    const updatedIngredientsData =
      ingredientsData !== null ? [...ingredientsData] : [];
    if (isValid) {
      const index = updatedIngredientsData.findIndex((item) => item.id === id);
      if (index < 0) {
        console.log('coś sie zjebało');
        return;
      }
      updatedIngredientsData[index] = ingredient;
      setIngredientsData(updatedIngredientsData);
    }
  };

  const ingredientsInputsList = useMemo(() => {
    return ingredientsData.map((item) => (
      <IngredientFormField
        onUpdate={onIngredientUpdate}
        onDelete={() =>
          onDeletePosition(ingredientsData, setIngredientsData, item.id)
        }
        key={item.id}
        id={item.id}
      />
    ));
  }, [ingredientsData]);

  useEffect(() => {
    if (!ingredientsData.length) {
      onAddPositoin(ingredientsData, setIngredientsData);
    }
  }, [ingredientsData, onAddPositoin]);

  useEffect(() => {
    ingredientValidation(ingredientsData, setIsIngredientValid);
  }, [ingredientsData]);

  return (
    <form style={{ padding: '25px' }}>
      <AsyncView
        status={localStatus}
        message={null}
        onCancel={() => setLocalStatus('init')}
      />
      <Input
        validators={[VALIDATOR_REQUIRE()]}
        placeholder='nazwa'
        value=''
        type='text'
        name='name'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE()]}
        placeholder='instrukcje'
        value=''
        type='text'
        name='instructions'
        onInput={onInput}
      />
      <Input
        validators={[]}
        placeholder='linki'
        value=''
        type='text'
        name='links'
        onInput={onInput}
      />
      <h3>ilość składników: {ingredientsData.length}</h3>
      <h4>
        {isIngredientsValid
          ? 'składniki dodane prawidłowo'
          : 'uzupełnij składniki'}
      </h4>
      <Button
        disabled={ingredientsData.length <= 1 || isIngredientsValid}
        name='-'
        clicked={() => onRemovePositoin(ingredientsData, setIngredientsData)}
      />
      <Button
        name='+'
        clicked={() => onAddPositoin(ingredientsData, setIngredientsData)}
      />
      <ol>{ingredientsInputsList}</ol>
      <Button
        disabled={!formState.isFormValid || !isIngredientsValid}
        bTnCenter
        type='confirm'
        name='dodaj'
        clicked={() => console.log(ingredientsData)}
      />
    </form>
  );
};
