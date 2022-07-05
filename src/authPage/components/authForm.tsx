import React from 'react';
import { useAppDispatch } from '../../store/hooks';

import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { loginUser } from '../../store/loginSlice/actions';

import { StyledAuthForm } from '../style/auth.style';

interface AuthFromData {
  isLoginMode: boolean;
  setIsLoginMode: Function;
}

export const AuthForm: React.FC<AuthFromData> = ({
  isLoginMode,
  setIsLoginMode,
}) => {
  const dispatch = useAppDispatch();

  const onAuthHandler = () => {
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
    <StyledAuthForm>
      <Input value='' name='mail' onInput={onInput} />
      <Input value='' name='password' onInput={onInput} />
      <Button name='login' clicked={onAuthHandler} />
      <Button
        name={`switch to ${isLoginMode ? 'register' : 'login'}`}
        clicked={() => setIsLoginMode((prev: boolean) => !prev)}
      />
    </StyledAuthForm>
  );
};
