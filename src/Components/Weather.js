// Weather.js
import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Temperature = styled.p`
  font-size: 50px;
  margin: 5px 0; /* Adjust the top and bottom margin */
`;

const City = styled.p`
  font-size: 25px;
  font-weight: 300;
  align-self: flex-start; /* Align to the left */
  margin: 5px 0; /* Adjust the top and bottom margin */
`;

const WeatherInfo = styled.p`
  font-size: 25px;
  font-weight: 300;
  align-self: flex-end; /* Align to the right */
  margin: 5px 0; /* Adjust the top and bottom margin */
`;

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  // 켈빈 온도를 섭씨로 변환하는 함수
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const temperatureCelsius = kelvinToCelsius(weatherData.main.temp);

  return (
    <WeatherContainer>
      <City>{weatherData.name}</City>
      <Temperature>{temperatureCelsius} °C</Temperature>
      <WeatherInfo>{weatherData.weather[0].main}</WeatherInfo>
    </WeatherContainer>
  );
};

export default Weather;
