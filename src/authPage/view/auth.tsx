import React from 'react';
import { Button, Input } from '../../shared/components';
import { UseFrom } from '../../shared/hooks/form-hook';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser } from '../../store/loginSlice/actions';

export const Auth = () => {
  const state = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch()
  console.log(state);
  const fn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(formState);
    const userData = {
      mail: formState.inputs.mail.value,
      password: formState.inputs.password.value,
    };
    dispatch(loginUser(e, userData));
  };

  const { formState, onInput } = UseFrom({
    login: {
      value: '',
      isValid: false,
    },
  });

  return (
    <div>
      <h3>auth</h3>
      <form>
        <Input value='' name='mail' onInput={onInput} />
        <Input value='' name='password' onInput={onInput} />
        <Button name='login' clicked={fn} />
      </form>
    </div>
  );
};
