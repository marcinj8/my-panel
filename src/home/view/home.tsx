import React from 'react';

import { DeviceInfo } from '../../deviceInfo';

import { StyledHomeContainer } from '../style/homeView.style';

export const Home: React.FC<{ isMenuShow: boolean }> = ({ isMenuShow }) => {

  return (
    <StyledHomeContainer isMenuShow={isMenuShow}>
      <DeviceInfo />
    </StyledHomeContainer>
  );
};
