const apiKey = 'YOUR_API_KEY';
const city = 'YOUR_CITY_NAME';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the necessary weather data from the response
    const temperature = data.main.temp - 273.15; // Convert temperature from Kelvin to Celsius
    const windSpeed = data.wind.speed;
    
    // Call a function to calculate the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the weather information
    displayWeather(temperature, windChill);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

function calculateWindChill(temperature, windSpeed) {
  // Wind chill formula (in Celsius): 13.12 + 0.6215 * temperature - 11.37 * windSpeed^0.16 + 0.3965 * temperature * windSpeed^0.16
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return windChill;
}

function displayWeather(temperature, windChill) {
  const weatherInfo = `Temperature: ${temperature.toFixed(2}°C, Wind Chill: ${windChill.toFixed(2}°C`;
  document.getElementById('weather-info').textContent = weatherInfo;
}