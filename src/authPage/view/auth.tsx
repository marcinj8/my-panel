import React, { useState } from 'react';
import { AsyncView } from '../../shared/components/asyncView';
import { useAppSelector } from '../../store/hooks';

import { AuthForm } from '../components/authForm';

import { StyledAuthTitle, StyledAuthView } from '../style/auth.style';

export const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const loginSlice = useAppSelector((state) => state.userData);

  return (
    <StyledAuthView>
      <AsyncView status={loginSlice.status} message={loginSlice.message} />
      <header>
        <StyledAuthTitle>{isLoginMode ? 'login' : 'register'}</StyledAuthTitle>
      </header>
      <AuthForm isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </StyledAuthView>
  );
};
