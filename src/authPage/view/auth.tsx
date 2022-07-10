import React, { useState } from 'react';

import { AuthForm } from '../components/authForm';

import { StyledAuthTitle, StyledAuthView } from '../style/auth.style';

export const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  return (
    <StyledAuthView>
      <header>
        <StyledAuthTitle>{isLoginMode ? 'login' : 'register'}</StyledAuthTitle>
      </header>
      <AuthForm isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </StyledAuthView>
  );
};
