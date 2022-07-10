import { useCallback, useReducer } from 'react';
import { InputState } from '../components/input/inputData';

interface InputsData {
  [key: string]: Omit<InputState, 'isTouched'>;
}

export interface FormState {
  inputs: InputsData;
  isFormValid: boolean;
}

type Action =
  | { type: 'SET_DATA'; inputs: InputsData; isFormValid: boolean }
  | {
      type: 'ON_INPUT_CHANGE';
      value: string | number;
      name: string;
      isValid: boolean;
    };

const onInputChange = (
  state: FormState,
  name: string,
  value: any, //to solve, expected string | number
  isValid: boolean
) => {
  return {
    ...state,
    inputs: {
      ...state.inputs,
      [name]: {
        value,
        isValid,
      },
    },
  };
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return onInputChange(state, action.name, action.value, action.isValid);
    case 'SET_DATA':
      return {
        ...state,
        inputs: action.inputs,
        isFormValid: action.isFormValid,
      };
    default:
      throw new Error('action type not found');
  }
};

export const UseFrom = (inputs: InputsData, isFormValid?: boolean) => {
  const formInitialState = {
    inputs: inputs || null,
    isFormValid: isFormValid || false,
  } as FormState;

  const [formState, dispatch] = useReducer(formReducer, formInitialState);
  const onInput = useCallback(
    (name: string, value: string | number, isValid: boolean) => {
      dispatch({
        type: 'ON_INPUT_CHANGE',
        name,
        value,
        isValid,
      });
    },
    []
  );

  const setFormData = useCallback(
    (inputsData: InputsData, isFormValid: boolean) => {
      dispatch({
        type: 'SET_DATA',
        inputs: inputsData,
        isFormValid,
      });
    },
    []
  );

  return { formState, setFormData, onInput };
};
