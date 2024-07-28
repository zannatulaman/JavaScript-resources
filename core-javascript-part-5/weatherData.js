const fetchWeatherData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an API call
      setTimeout(() => {
        const weatherData = { temperature: 75 + "F", condition: 'sunny' };
        resolve(weatherData);
      }, 1000);
    });
  }
  
  // Usage:
  fetchWeatherData()
    .then(data => {
      console.log('Weather Data:', data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
  