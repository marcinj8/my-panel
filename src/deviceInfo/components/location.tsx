import React, { useEffect, useRef, useState } from 'react';

import { getLocation } from '../data/locationData';

export const Location = () => {
  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);

  useEffect(() => {
    if (!location) {
      getLocation(setLocation);
    }
  }, [location]);

  // console.log(weather.current);

  return (
    <div>
      {location ? (
        <div>
          <div>
            Lat: {Math.round(location.latitude * 100) / 100}{' '}
            {location.latitude > 0 ? 'N' : 'S'}
          </div>
          <div>
            Lon: {Math.round(location.longitude * 100) / 100}{' '}
            {location.latitude > 0 ? 'W' : 'E'}
          </div>
        </div>
      ) : (
        <div> No location data</div>
      )}
    </div>
  );
};
