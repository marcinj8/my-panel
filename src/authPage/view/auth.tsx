import React, { useState } from 'react';
import { Button } from '../../shared/components';

import { AuthForm } from '../components/authForm';

import { StyledAuthTitle, StyledAuthView } from '../style/auth.style';

export const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  return (
    <StyledAuthView>
      <header>
        <StyledAuthTitle>{isLoginMode ? 'login' : 'register'}</StyledAuthTitle>
      </header>
      <AuthForm isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </StyledAuthView>
  );
};
