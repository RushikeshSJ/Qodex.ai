import axios from 'axios';

const API_KEY = 'cb5fa3fc6e52a98ae2fe6e6a56aab34e';

export const fetchWeatherData = async (city, unit) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Unable to fetch weather data';
  }
};

export const fetchForecastData = async (city, unit) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Unable to fetch forecast data';
  }
};