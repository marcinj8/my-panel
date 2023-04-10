import React from 'react';
import { useAppSelector } from '../../store/hooks';

import { DeviceInfo } from '../../deviceInfo';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { WeatherShortInfo } from '../../weather/components/weatherShortInfo';

export const Home: React.FC = () => {
  const user = useAppSelector((state) => state.loginData.userData);
  const weather = useAppSelector((state) => state.weatherSlice);

  // const [showList, setShowList] = useState<boolean>(false);

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
