import React, { useEffect } from 'react'
import { Weather } from 'component/Weather/Weather'
import useWeather from 'hooks/useWeather';

export const WeatherContainer = () => {
  const [weatherState, getWeather] = useWeather();

  useEffect(() => {
    getWeather();
  }, []);

  console.log(weatherState);

  return <Weather/>;
}