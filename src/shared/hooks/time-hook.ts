import { useEffect, useState } from 'react';

export const UseTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const hour = currentDate.getHours();
  const min =
    currentDate.getMinutes() < 10
      ? '0' + currentDate.getMinutes()
      : currentDate.getMinutes();
  const sec =
    currentDate.getSeconds() < 10
      ? '0' + currentDate.getSeconds()
      : currentDate.getSeconds();
  const day =
    currentDate.getDate() < 10
      ? '0' + currentDate.getDate()
      : currentDate.getDate();
  const month =
    currentDate.getMonth() < 9
      ? '0' + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

//   useEffect(() => {
//     setInterval(() => {
//       const newDate = new Date();
//       if (newDate.getSeconds() === currentDate.getSeconds() + 1) {
//         setCurrentDate(newDate);
//       }
//     }, 900);
//   }, [currentDate]);

  return { hour, min, sec, day, month, year };
};
