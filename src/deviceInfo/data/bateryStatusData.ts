export const timeFormatter = (time: number | string): string => {
  if (time === 'Infinity' || typeof time === 'string') {
    return ' some time :)';
  }
  let formattedTime: string | number = 0;
  if (time > 60) {
    formattedTime = Math.round(time / 60);
  }
  if (formattedTime > 60) {
    formattedTime =
      Math.round(formattedTime / 60) + ' h ' + (formattedTime % 60);
  }
  return ' ' + formattedTime + ' min ';
};
