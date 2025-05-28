import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weather, unit, toggleUnit }) => {
  if (!weather) return null;

  const { name, main, weather: w, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${w[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={w[0].description} />
      <p>{w[0].description}</p>
      <p>Temperature: {main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <button onClick={toggleUnit} className="toggle-button">
        Switch to °{unit === 'metric' ? 'F' : 'C'}
      </button>
    </div>
  );
};

export default WeatherDisplay;