import React, { useCallback, useReducer } from 'react';

enum InputActionsTypes {
  ON_INPUT_CHANGE = 'ON_INPUT_CHANGE',
  ON_INPUT_TOUCHED = 'ON_INPUT_TOUCHED',
}

export interface InputState {
  value: string | number;
  isValid: boolean;
  isTouched: boolean;
}

type Actions =
  | {
      type: InputActionsTypes.ON_INPUT_CHANGE;
      value: string | number;
    }
  | { type: InputActionsTypes.ON_INPUT_TOUCHED };

const inputReducer = (state: InputState, action: Actions) => {
  switch (action.type) {
    case InputActionsTypes.ON_INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        // isValid: action.isValid,
        isTouched: true,
      };
    case InputActionsTypes.ON_INPUT_TOUCHED:
      return { ...state, isTouched: true };
    default:
      throw new Error('action type not found');
  }
};

export const UseInput = (value: string | number, isValid?: boolean) => {
  const initialInputState = {
    value: value || '',
    isValid: isValid || false,
    isTouched: false,
  };
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const onInputChange = useCallback((
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    dispatch({
      type: InputActionsTypes.ON_INPUT_CHANGE,
      value: event.currentTarget.value,
    });
  },[]);

  const onInputTouch = useCallback(() => {
    dispatch({
      type: InputActionsTypes.ON_INPUT_TOUCHED,
    });
  },[]);

  return { inputState, onInputChange, onInputTouch };
};
