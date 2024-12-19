import React from "react";

const CurrentSection = ({ currentWeather }) => {
  return (
    <div className="current-section">
      <img src={`icons/${currentWeather.weatherIcon}.svg`} alt="" className="weather-icon" />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description} - {currentWeather.country}</p>
    </div>
  );
};

export default CurrentSection;
