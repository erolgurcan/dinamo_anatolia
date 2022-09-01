import React, { useEffect } from "react";
import { useState } from "react";

const CalenderWeather = ({ data }) => {
  const [weather, setWeather] = useState();

  console.log(weather);

  const weatherInfo = async () => {
    const result = await fetch(
      "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
    );
    const jsonData = await result.json();
    setWeather(jsonData);
  };

  useEffect(() => {
    weatherInfo();
  }, []);

  return (
    <div>
      <div class="card-body p-4">
        <h4 class="mb-1 sfw-normal"> {data?.event_location} </h4>
        <p class="mb-2">
          Current temperature: <strong> {weather?.main.temp} °C</strong>
        </p>
        <p>
          Feels like: <strong>{weather?.main.feels_like} °C</strong>
        </p>
        <p>
          Max: <strong>{weather?.main.temp_max}°C</strong>, Min:{" "}
          <strong>{weather?.main.temp_min} °C</strong>
        </p>

        <div class="d-flex flex-row align-items-center text-center">
          <p class="me-4 text-center m-auto">
            {" "}
            {weather?.weather[0].main +
              " " +
              weather?.weather[0].description}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalenderWeather;
