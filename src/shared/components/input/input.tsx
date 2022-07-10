import React, { useEffect } from 'react';

import { UseInput } from './inputData';

import { StyledInput, StyledInputBox, StyledInputLabel } from './input.style';

type FlexDirection = 'row' | 'column'

interface InputProps {
  value: string | number;
  name: string;
  onInput: Function;
  placeholder?: string;
  label?: string;
  isValid?: boolean;
  flexDirection?: FlexDirection;
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  onInput,
  label = null,
  placeholder,
  isValid,
  flexDirection = 'column',
}) => {
  const { inputState, onInputChange, onInputTouch } = UseInput(value, isValid);

  useEffect(() => {
    onInput(name, inputState.value, inputState.isValid);
  }, [name, inputState.value, inputState.isValid, onInput]);
  return (
    <StyledInputBox flexDirection={flexDirection}>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput
        value={inputState.value}
        placeholder={placeholder}
        onChange={onInputChange}
        onBlur={onInputTouch}
      />
    </StyledInputBox>
  );
};
