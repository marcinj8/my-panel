import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { loginUser } from '../../store/loginSlice/actions';

import { StyledAuthForm } from '../style/auth.style';
import { switchAuthMode } from '../data/authData';

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
      mail: formState.inputs.mail.value.toString(),
      password: formState.inputs.password.value.toString(),
    };
    dispatch(loginUser(userData));
  };
  const { formState, onInput, setFormData } = UseFrom(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  console.log(formState.inputs);

  useEffect(() => {
    switchAuthMode(isLoginMode, setFormData, formState);
  }, [isLoginMode]);

  return (
    <StyledAuthForm>
      {!isLoginMode && (
        <Input label='name' value='' name='name' onInput={onInput} />
      )}
      <Input label='mail' value='' name='mail' onInput={onInput} />
      <Input label='password' value='' name='password' onInput={onInput} />
      <Button type='confirm' name='login' clicked={onAuthHandler} />
      <h5>{!isLoginMode ? "you have account?" : "you don't have account?"}</h5>
      <Button
        variant='inline'
        name={`switch to ${isLoginMode ? 'register' : 'login'}`}
        clicked={() => setIsLoginMode((prev: boolean) => !prev)}
      />
    </StyledAuthForm>
  );
};
