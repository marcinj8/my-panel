import React from 'react';
import { Weather } from '../../weather/view/weather';

import { BatteryStatus } from '../components/batteryStatus';
import { Location } from '../components/location';

export const DeviceInfo = () => {
  return (
    <>
      <BatteryStatus />
      <Location />
      <Weather />
    </>
  );
};
