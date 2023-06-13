import React, { useEffect, useMemo } from 'react';

import { UseInput } from './inputData';

import {
  StyledInput,
  StyledInputBox,
  StyledInputLabel,
  StyledInputTextArea,
} from './input.style';

import { Validator } from './validators';

type FlexDirection = 'row' | 'column';

interface InputProps {
  value: string | number;
  name: string;
  onInput: Function;
  variant?: 'input' | 'textarea';
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
  variant = 'input',
  type = 'text',
  label = null,
  placeholder,
  isValid,
  validators = [],
  flexDirection = 'column',
  style,
}) => {
  const { inputState, onInputChange, onInputTouch } = UseInput(value, isValid);

  const Component:React.ElementType = useMemo(() => {
    switch (variant) {
      case 'input':
        return StyledInput;
      case 'textarea':
        return StyledInputTextArea;
      default:
        return StyledInput;
    }
  }, [variant]);

  useEffect(() => {
    onInput(name, inputState.value, inputState.isValid);
  }, [name, inputState.value, inputState.isValid, onInput]);

  return (
    <StyledInputBox flexDirection={flexDirection}>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <Component
        style={style}
        // update value - test
        // value={value}
        // koniec
        value={inputState.value}
        placeholder={placeholder}
        type={type}
        onChange={(e: any) => onInputChange(e, validators)}
        onBlur={onInputTouch}
      />
    </StyledInputBox>
  );
};
