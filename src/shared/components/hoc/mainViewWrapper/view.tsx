import React, { ReactComponentElement } from 'react';
import { useAppSelector } from '../../../../store/hooks';

import { StyledHocSection } from './style';

interface HocSectionData {
  children: ReactComponentElement<any>;
}

export const HocSection: React.FC<HocSectionData> = ({ children }) => {
  const { isMenuShow } = useAppSelector((state) => state.userSettings);

  return (
    <StyledHocSection isMenuShow={isMenuShow}>{children}</StyledHocSection>
  );
};
