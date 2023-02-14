import React from 'react';

import { DeviceInfo } from '../../deviceInfo';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';

export const Home: React.FC = () => {
  return (
    <HocSection>
      <DeviceInfo />
    </HocSection>
  );
};
