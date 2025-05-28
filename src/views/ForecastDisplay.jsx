import React from 'react';

const ForecastDisplay = ({ forecast, unit }) => {
  if (!forecast) return null;

  const dailyData = forecast.list.filter((item) => item.dt_txt.includes('12:00:00'));

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {dailyData.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem' }}>
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