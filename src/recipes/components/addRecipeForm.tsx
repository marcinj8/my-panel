import React, { useState, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AsyncView } from '../../shared/components/asyncView';
import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { StatusType } from '../../store/store';
import { IngredientFormField } from './ingredientdFormField';

import { VALIDATOR_REQUIRE } from '../../shared/components/input/validators';
import {
  RecipeDataModel,
  RecipeIngredientModel,
} from '../../store/userData/reducer';
import {
  ingredientValidation,
  onAddPositoin,
  onDeletePosition,
  onIngredientUpdate,
  onRemovePositoin,
} from '../data/addRecipeFormData';
import { AddArrDataFormField } from './addArrDataFormField';
import { RecipeView } from './recipeView';
import { addNewRecipe } from '../../store/userData/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const AddNewRecipeForm = () => {
  const [localStatus, setLocalStatus] = useState<StatusType>('init');
  const [ingredientsData, setIngredientsData] = useState<
    RecipeIngredientModel[]
  >([]);
  const [isIngredientsValid, setIsIngredientValid] = useState<boolean>(false);
  const [newRecipe, setNewRecipe] = useState<RecipeDataModel | null>(null);

  const userData = useAppSelector((state) => state.loginData.userData);
  const dispatch = useAppDispatch();

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
      tags: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const ingredientsInputsList = useMemo(() => {
    return ingredientsData.map((item) => (
      <IngredientFormField
        onUpdate={(
          ingredient: RecipeIngredientModel,
          id: string,
          isValid: boolean
        ) =>
          onIngredientUpdate(
            ingredient,
            id,
            isValid,
            ingredientsData,
            setIngredientsData
          )
        }
        onDelete={() =>
          onDeletePosition(ingredientsData, setIngredientsData, item.id)
        }
        key={item.id}
        id={item.id}
      />
    ));
  }, [ingredientsData]);

  const onAddRecipe = () => {
    let newRecipe = {} as RecipeDataModel;
    newRecipe.id = uuidv4();
    for (let key in formState.inputs) {
      console.log(key);
      newRecipe[key] = formState.inputs[key].value;
    }
    newRecipe.ingredients = ingredientsData;
    setNewRecipe(newRecipe);
  };

  useEffect(() => {
    if (!ingredientsData.length) {
      onAddPositoin(ingredientsData, setIngredientsData);
    }
  }, [ingredientsData]);

  useEffect(() => {
    ingredientValidation(ingredientsData, setIsIngredientValid);
  }, [ingredientsData]);

  // animacje na zmianę widoku zamiast visibility
  return (
    <>
      {newRecipe !== null && (
        <RecipeView
          onCancel={() => setNewRecipe(null)}
          recipe={newRecipe}
          onConfirm={() => dispatch(addNewRecipe(newRecipe, userData?.token))}
        />
      )}
      <form
        style={{
          padding: '25px',
          visibility: newRecipe === null ? 'visible' : 'hidden',
        }}
      >
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
        <AddArrDataFormField
          onDataUpdate={onInput}
          dataName='tag'
          dataPluralName='tags'
          placeholder='etykiety'
        />
        <AddArrDataFormField
          onDataUpdate={onInput}
          dataName='instruction'
          dataPluralName='instructions'
          placeholder='instrukcje'
          inputType='textarea'
        />
        <AddArrDataFormField
          onDataUpdate={onInput}
          dataName='link'
          dataPluralName='links'
          placeholder='link'
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
          clicked={onAddRecipe}
        />
      </form>
    </>
  );
};
