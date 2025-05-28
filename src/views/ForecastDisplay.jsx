import React from 'react';
import './ForecastDisplay.css';

const ForecastDisplay = ({ forecast, unit }) => {
  if (!forecast) return null;

  const dailyData = forecast.list.filter((item) => item.dt_txt.includes('12:00:00'));

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyData.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{item.weather[0].description}</p>
            <p>{item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;