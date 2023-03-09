import React, { useMemo } from 'react';
import { useBattery } from 'react-use';

import { AsyncView } from '../../shared/components/asyncView';

import { timeFormatter } from '../data/bateryStatusData';

export const BatteryStatus = () => {
  const battery = useBattery();

  const status = useMemo(() => {
    if (!battery.isSupported) {
      return 'error';
    }
    return battery.fetched ? 'ok' : 'loading';
  }, [battery]);

  if (!battery.isSupported) {
    return null;
  }

  return (
    <>
      <AsyncView status={status} message={null} />
      {battery.fetched && (
        <div>Poziom baterii {Math.round(battery.level * 100)}%</div>
      )}
      {battery.fetched &&
        battery.charging &&
        (battery.chargingTime === 0 ? (
          <div>Bateria naładowana.</div>
        ) : (
          <div>Ładowanie, pozostało {timeFormatter(battery.chargingTime)}</div>
        ))}
      {battery.fetched &&
        !battery.charging &&
        (+battery.dischargingTime > 0 ? (
          <div>
            Bateria rozładuję się za
            {timeFormatter(battery.dischargingTime)}
          </div>
        ) : (
          <div>Sprawdzanie czasu do roładowania baterii...</div>
        ))}
    </>
  );
};
