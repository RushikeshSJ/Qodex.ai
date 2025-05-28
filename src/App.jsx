import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './views/SearchBar';
import WeatherDisplay from './views/WeatherDisplay';
import ForecastDisplay from './views/ForecastDisplay';
import ErrorDisplay from './views/ErrorDisplay';
import { getWeather, getForecast } from './controllers/weatherController';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('lastCity') || 'Pune');
  const [unit, setUnit] = useState('metric');

  const fetchWeatherData = () => {
    getWeather(city, unit, setWeather, setError);
    getForecast(city, unit, setForecast, setError);
  };

  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 30000);
    return () => clearInterval(interval);
  }, [city, unit]);

  const toggleUnit = () => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app-container">
      <h1>Weather Dashboard by Rushikesh ❤️</h1>
      <SearchBar onSearch={setCity} />
      <ErrorDisplay message={error} />
      <WeatherDisplay weather={weather} unit={unit} toggleUnit={toggleUnit} />
      <ForecastDisplay forecast={forecast} unit={unit} />
    </div>
  );
};

export default App;