import React from "react";
import { weatherCodes } from "../constant";

const WeatherItem = ({ hourlyWeather }) => {
  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hourlyWeather.condition.code)
  );
  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={`icons/${weatherIcon}.svg`} alt="" className="weather-icon" />
      <p className="temperature">
        {temperature} <span>°</span>
      </p>
    </li>
  );
};

export default WeatherItem;
