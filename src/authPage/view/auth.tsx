import React from 'react';
import { Button, Input } from '../../shared/components';

export const Auth = () => {
    const fn = () => console.log('action')
    
  return (
    <div>
      <h3>auth</h3>
      <Input value='' onChange={fn} />
      <Button name='login' clicked={fn} />
    </div>
  );
};
