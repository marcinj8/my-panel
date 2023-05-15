import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { Button, Input } from '../../shared/components';

import { UseFrom } from '../../shared/hooks/form-hook';
import { loginUser, registerUser } from '../../store/loginSlice/actions';

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

  const onAuthHandler = () => {
    const userData: any = {};
    Object.keys(formState.inputs).forEach((item) => {
      if (formState.inputs[item]) {
        console.log(item);
        userData[item] = formState.inputs[item].value;
      }
    });

    if (isLoginMode) {
      return dispatch(loginUser(userData));
    } else {
      return dispatch(registerUser(userData));
    }
  };

  useEffect(() => {
    switchAuthMode(isLoginMode, setFormData, formState);
  }, [isLoginMode, setFormData]); //formState => powoduje infinity loop

  return (
    <StyledAuthForm>
      {!isLoginMode && (
        <Input
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(4)]}
          label='imię'
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
        label='hasło'
        value=''
        type='password'
        name='password'
        onInput={onInput}
      />
      {!isLoginMode && (
        <Input
          validators={[]}
          label='id domu'
          value=''
          isValid={true}
          type='text'
          name='homeId'
          onInput={onInput}
        />
      )}
      <Button
        disabled={!formState.isFormValid}
        bTnCenter
        type='confirm'
        name='dalej'
        clicked={onAuthHandler}
      />
      <h5>{!isLoginMode ? 'masz konto?' : 'nie masz konta?'}</h5>
      <Button
        variant='inline'
        bTnCenter
        name={`${isLoginMode ? 'zarejestruj' : 'zaloguj'} się`}
        clicked={() => setIsLoginMode((prev: boolean) => !prev)}
      />
    </StyledAuthForm>
  );
};
