import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button, Input } from '../../shared/components';
import { UseFrom } from '../../shared/hooks/form-hook';
import { loginUser } from '../../store/loginSlice/actions';

import {
  StyledAuthForm,
  StyledAuthTitle,
  StyledAuthView,
} from '../style/auth.style';

export const Auth = () => {
  const state = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  
  console.log(state);
  const fn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData = {
      mail: formState.inputs.mail.value,
      password: formState.inputs.password.value,
    };
    dispatch(loginUser(userData));
  };

  const { formState, onInput } = UseFrom({
    login: {
      value: '',
      isValid: false,
    },
  });

  return (
    <StyledAuthView>
      <header>
        <StyledAuthTitle>auth</StyledAuthTitle>
      </header>
      <StyledAuthForm>
        <Input value='' name='mail' onInput={onInput} />
        <Input value='' name='password' onInput={onInput} />
        <Button name='login' clicked={fn} />
      </StyledAuthForm>
    </StyledAuthView>
  );
};
