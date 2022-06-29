import React, { useEffect } from 'react';
import { UseInput } from './inputData';

interface InputProps {
  value: string | number;
  name: string;
  onInput: Function;
  label?: string;
  isValid?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  onInput,
  label = null,
  isValid,
}) => {
  const { inputState, onInputChange, onInputTouch } = UseInput(value, isValid);

  useEffect(() => {
    onInput(name, inputState.value, inputState.isValid);
  }, [name, inputState.value, inputState.isValid, onInput]);
  return (
    <>
      {label && <label>{label}</label>}
      <input
        value={inputState.value}
        onChange={onInputChange}
        onBlur={onInputTouch}
      />
    </>
  );
};
