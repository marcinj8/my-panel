import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { loginUser } from '../../store/loginSlice/actions';

import { StyledAuthForm } from '../style/auth.style';
import { switchAuthMode } from '../data/authData';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../shared/components/input/validators';

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
      email: formState.inputs.email.value.toString(),
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

  useEffect(() => {
    switchAuthMode(isLoginMode, setFormData, formState);
  }, [isLoginMode]);

  return (
    <StyledAuthForm>
      {!isLoginMode && (
        <Input
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          label='name'
          value=''
          type='text'
          name='name'
          onInput={onInput}
        />
      )}
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        label='email'
        value=''
        type='text'
        name='email'
        onInput={onInput}
      />
      <Input
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
        label='password'
        value=''
        type='password'
        name='password'
        onInput={onInput}
      />
      <Button
        disabled={!formState.isFormValid}
        type='confirm'
        name='login'
        clicked={onAuthHandler}
      />
      <h5>{!isLoginMode ? 'you have account?' : "you don't have account?"}</h5>
      <Button
        variant='inline'
        name={`switch to ${isLoginMode ? 'register' : 'login'}`}
        clicked={() => setIsLoginMode((prev: boolean) => !prev)}
      />
    </StyledAuthForm>
  );
};
