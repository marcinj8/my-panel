import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { DeviceInfo } from '../../deviceInfo';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { getLocation } from '../../deviceInfo/data/locationData';
import { getFullCityWeather } from '../../store/weatherSlice/actions';
import { WeatherShortInfo } from '../../weather/components/weatherShortInfo';

export const Home: React.FC = () => {
  const user = useAppSelector((state) => state.loginData.userData);
  const weather = useAppSelector((state) => state.weatherSlice);

  const [location, setLocation] = useState<null | {
    longitude: number;
    latitude: number;
  }>(null);
  // const [showList, setShowList] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!location) {
      getLocation(setLocation);
    }
  }, [location]);

  useEffect(() => {
    if (location && !weather.weatherData) {
      dispatch(getFullCityWeather(location.latitude, location.longitude));
    }
  }, [location, dispatch, weather.weatherData]);

  return (
    <HocSection>
      <>
        {user?.name ? <h2>Cześć {user.name}!</h2> : null}
        {user?.homeId ? (
          <div>
            ID domu: <span style={{ fontWeight: 'bold' }}>{user.homeId}</span>
          </div>
        ) : null}
        <DeviceInfo />
        {weather.weatherData && (
          <WeatherShortInfo weather={weather.weatherData} />
        )}
      </>
    </HocSection>
  );
};
