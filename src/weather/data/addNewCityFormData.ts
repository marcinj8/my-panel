import { WeatherCityModel } from '../../shared/models/userModel';

export const createCityObject = (address: any) => {
  return {
    name: address.formatted_address,
    id: address.place_id,
    location: {
      latitude: address.geometry.location.lat,
      longitude: address.geometry.location.lng,
    },
  };
};

export const checkIsCityAdded = (
  id: string,
  weatherCities: WeatherCityModel[] | null
) => {
  if (weatherCities === null) {
    return false;
  }
  const index = weatherCities?.findIndex((city) => city.id === id);
  return (index as number) >= 0;
};
