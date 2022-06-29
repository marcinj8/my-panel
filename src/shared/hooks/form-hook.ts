import { useCallback, useReducer } from 'react';
import { InputState } from '../components/input/inputData';

interface FormState {
  inputs: any;
  isFormValid: boolean;
}

interface FormActions {
  type: string;
  name: string;
  value: string | number;
  isValid: boolean;
}

interface InputsData {
  [key: string]: Omit<InputState, 'isTouched'>;
}

const formReducer = (state: FormState, action: FormActions) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
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

  return { formState, onInput };
};
