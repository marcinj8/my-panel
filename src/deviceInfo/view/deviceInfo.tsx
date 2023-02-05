import React from 'react';
import { Weather } from '../../weather/view/weather';

import { BatteryStatus } from '../components/batteryStatus';

export const DeviceInfo = () => {
  return (
    <>
      <BatteryStatus />
      <Weather />
    </>
  );
};
