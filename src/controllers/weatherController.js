import { fetchWeatherData, fetchForecastData } from '../models/weatherModel';

export const getWeather = async (city, unit, setWeather, setError) => {
  try {
    const data = await fetchWeatherData(city, unit);
    setWeather(data);
    setError(null);
    localStorage.setItem('lastCity', city);
  } catch (errMsg) {
    setError(errMsg);
    setWeather(null);
  }
};

export const getForecast = async (city, unit, setForecast, setError) => {
  try {
    const data = await fetchForecastData(city, unit);
    setForecast(data);
    setError(null);
  } catch (errMsg) {
    setError(errMsg);
    setForecast(null);
  }
};