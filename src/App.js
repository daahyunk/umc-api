import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Weather from './Components/Weather';

const API_KEY = 'ddf21813f5d1a4dd9826685759ba87fb';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-bottom: 40px;
`;

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(`${url}${location}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="도시를 입력하세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Weather weatherData={weatherData} />
    </Container>
  );
}

export default App;
