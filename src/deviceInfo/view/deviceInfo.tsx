import React from 'react';

import { BatteryStatus } from '../components/batteryStatus';
import { Location } from '../components/location';

export const DeviceInfo = () => {
  return (
    <>
      <BatteryStatus />
      <Location />
    </>
  );
};
