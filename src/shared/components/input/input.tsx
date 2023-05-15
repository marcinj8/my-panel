import React, { useEffect } from 'react';

import { UseInput } from './inputData';

import { StyledInput, StyledInputBox, StyledInputLabel } from './input.style';
import { Validator } from './validators';

type FlexDirection = 'row' | 'column';

interface InputProps {
  value: string | number;
  name: string;
  onInput: Function;
  type?: string;
  validators?: Validator[];
  placeholder?: string;
  style?: { width?: string };
  label?: string;
  isValid?: boolean;
  flexDirection?: FlexDirection;
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  onInput,
  type = 'text',
  label = null,
  placeholder,
  isValid,
  validators = [],
  flexDirection = 'column',
  style,
}) => {
  const { inputState, onInputChange, onInputTouch } = UseInput(value, isValid);

  useEffect(() => {
    onInput(name, inputState.value, inputState.isValid);
  }, [name, inputState.value, inputState.isValid, onInput]);

  return (
    <StyledInputBox flexDirection={flexDirection}>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput
        style={style}
        value={inputState.value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onInputChange(e, validators)}
        onBlur={onInputTouch}
      />
    </StyledInputBox>
  );
};
