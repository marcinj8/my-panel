import React from 'react';
import { Button, Input } from '../../shared/components';
import { UseFrom } from '../../shared/hooks/form-hook';

export const Auth = () => {
  const fn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
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
        <Input value='' name='login' onInput={onInput} />
        <Input value='' name='password' onInput={onInput} />
        <Button name='login' clicked={fn} />
      </form>
    </div>
  );
};
