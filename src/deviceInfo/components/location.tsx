import React, { useEffect, useState } from 'react';

import { getLocation } from '../data/locationData';
import { CityDataModel } from '../../store/userData/reducer';

export const Location = () => {
  const [position, setPosition] = useState<null | CityDataModel>(null);

  useEffect(() => {
    if (!position) {
      getLocation(setPosition);
    }
  }, [position]);

  // console.log(weather.current);

  return (
    <div>
      {position ? (
        <div>
          <div>
            Lat: {Math.round(position.location.latitude * 100) / 100}{' '}
            {position.location.latitude > 0 ? 'N' : 'S'}
          </div>
          <div>
            Lon: {Math.round(position.location.longitude * 100) / 100}{' '}
            {position.location.latitude > 0 ? 'W' : 'E'}
          </div>
        </div>
      ) : (
        <div> No location data</div>
      )}
    </div>
  );
};
