# 🌦️ React Weather Dashboard (MVC Architecture)

A beautiful and responsive Weather Dashboard built using **React.js** following the **MVC (Model-View-Controller)** architecture. It fetches **real-time weather** and **5-day forecasts** from the OpenWeatherMap API and offers useful features like temperature unit toggling, error handling, and automatic data refreshing.

---

## 🚀 Features

- 🔍 Search for any city worldwide
- 🌡️ Display current temperature, humidity, wind speed, and condition
- 📅 5-Day forecast (updated daily at 12:00 PM)
- 🔁 Weather data auto-refreshes every 30 seconds (polling)
- 💾 Last searched city is saved in local storage
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- ⚠️ Friendly error handling for invalid city or network issues

---

## 🧠 Folder Overview (MVC Structure)

| Folder/File                    | Description                                      |
|-------------------------------|--------------------------------------------------|
| `src/`                        | Main source folder                              |
| ├── `controllers/`            | Controls logic and flow                         |
| │   └── `weatherController.js`| Manages API logic and error handling            |
| ├── `models/`                 | Data and API logic                              |
| │   └── `weatherModel.js`     | Fetches weather and forecast data using Axios   |
| ├── `views/`                  | UI components (View layer)                      |
| │   ├── `SearchBar.jsx`       | Input field for city search                     |
| │   ├── `WeatherDisplay.jsx`  | Displays current weather info                   |
| │   ├── `ForecastDisplay.jsx` | Displays 5-day forecast                         |
| │   └── `ErrorDisplay.jsx`    | Displays user-friendly error messages           |
| ├── `App.jsx`                 | Main app layout and component integration       |
| └── `main.jsx`                | React entry point                               |

---

## 🛠️ Tech Stack

- React.js (with Vite)
- Axios for API requests
- OpenWeatherMap API
- HTML5, JavaScript (ES6+)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

### 2. Install Dependencies

