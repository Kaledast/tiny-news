import React from 'react';
import StyledWeatherTitle from '../components/styledWeather/StyledWeatherTitle.js';
import StyledWeatherContainer from '../components/styledWeather/StyledWeatherContainer.js';

function WeatherPage({ weather, handleLocation }) {
  const handleSubmit = event => {
    event.preventDefault();
    const [input] = event.target.children;
    handleLocation(input.value);
    input.value = '';
  };

  const location = 'Hamburg';
  const temperature = [weather.min_temp, weather.max_temp];
  const weatherState = weather.weather_state_name;
  const humidity = weather.humidity;

  return (
    <StyledWeatherContainer>
      <StyledWeatherTitle>Weatherforecast today</StyledWeatherTitle>
      <section>{location}</section>
      <section>
        {temperature[0]}°C - {temperature[1]}°C
      </section>
      <section>
        <span> {weatherState}</span>
      </section>
      <section>
        humidity <span> {humidity}%</span>
      </section>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='location...' />
        <button type='submit'>change city</button>
      </form>
    </StyledWeatherContainer>
  );
}

export default WeatherPage;
