import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);
    }, 30000);
    return () => clearInterval(timer);
  }, [date]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return {
    dayName,
    monthName,
    dayNumber,
    year,
    time,
  };
};

export default useDate;
