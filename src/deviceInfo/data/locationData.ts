import axios from 'axios';
import { WeatherCityModel } from '../../shared/models/userModel';

export const getLocation = (setLocation: Function) => {
  let saveLocationData = (locationData: any) => {
    let position: WeatherCityModel | null = null;
    position = {
      id: 'yourlocation',
      name: 'Twoja lokalizacja',
      location: {
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      },
    };
    setLocation(position);
  };
  // const link = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
  // const address = axios
  //   .post(link)
  //   .then((res) => console.log(res.data.location))
  //   .catch((err) => console.log(err));

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(saveLocationData);
  } else {
    console.log('error');
  }
};

export const getPlaceLocation: (place: string) => any = async (
  place: string
) => {
  const encodedPlace = encodeURIComponent(place);
  const link = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedPlace}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
  let response: any;
  try {
    response = await axios.post(link);
    console.log(response);
  } catch (err) {
    return 'miejsce nie istnieje';
  }

  return response.data.results;
};
