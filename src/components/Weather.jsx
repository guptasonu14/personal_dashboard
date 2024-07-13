// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import '../styles/Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=6aaac2eccc060d3ab3294c7f4d5e7f6e&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          setError('Failed to fetch location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    fetchWeather(51.5074, -0.1278); // Default to London
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather } = weatherData;
  const temperature = main.temp;
  const weatherCondition = weather[0].main;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="weather-widget">
      <h2>Current Weather</h2>
      <img src={icon} alt={weatherCondition} />
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {weatherCondition}</p>
      <button onClick={handleLocationClick} className="location-button">
        <FontAwesomeIcon icon={faLocationArrow} /> Locate Me
      </button>
    </div>
  );
};

export default Weather;
