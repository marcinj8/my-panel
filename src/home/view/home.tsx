import React from 'react';

import { DeviceInfo } from '../../deviceInfo';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { useAppSelector } from '../../store/hooks';

export const Home: React.FC = () => {
  const user = useAppSelector((state) => state.loginData.userData);
  return (
    <HocSection>
      <>
        {user?.name ? <h2>Cześć {user.name}!</h2> : null}
        {user?.homeId ? (
          <div>
            ID domu: <span style={{fontWeight: 'bold'}}>{user.homeId}</span>
          </div>
        ) : null}
        <DeviceInfo />
      </>
    </HocSection>
  );
};
