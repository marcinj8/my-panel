export const getLocation = (setLocation: Function) => {
  let saveLocationData = (locationData: any) => {
    let location: any | null = null;
    location = {
      latitude: locationData.coords.latitude,
      longitude: locationData.coords.longitude,
    };
    setLocation(location);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(saveLocationData);
  } else {
    console.log('error');
  }
};
