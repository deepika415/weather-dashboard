export const getMockWeather = (city) => {
  const data = {
    hyderabad: { city: 'Hyderabad', country: 'IN', temp: 34, feels_like: 38, condition: 'Sunny', icon: '☀️', humidity: 45, wind: 12, visibility: 10 },
    mumbai: { city: 'Mumbai', country: 'IN', temp: 29, feels_like: 33, condition: 'Partly Cloudy', icon: '⛅', humidity: 80, wind: 18, visibility: 7 },
    delhi: { city: 'Delhi', country: 'IN', temp: 38, feels_like: 42, condition: 'Haze', icon: '🌫️', humidity: 30, wind: 8, visibility: 4 },
    london: { city: 'London', country: 'GB', temp: 16, feels_like: 14, condition: 'Rainy', icon: '🌧️', humidity: 85, wind: 22, visibility: 6 },
    newyork: { city: 'New York', country: 'US', temp: 22, feels_like: 21, condition: 'Clear', icon: '🌤️', humidity: 55, wind: 14, visibility: 10 },
  }
  const key = city.toLowerCase().replace(/\s/g, '')
  return data[key] || null
}

export const getMockForecast = (city) => {
  const forecasts = {
    hyderabad: [
      { day: 'Mon', icon: '☀️', high: 35, low: 26 },
      { day: 'Tue', icon: '⛅', high: 33, low: 25 },
      { day: 'Wed', icon: '🌦️', high: 30, low: 23 },
      { day: 'Thu', icon: '🌧️', high: 28, low: 22 },
      { day: 'Fri', icon: '⛅', high: 31, low: 24 },
    ],
    mumbai: [
      { day: 'Mon', icon: '⛅', high: 30, low: 26 },
      { day: 'Tue', icon: '🌧️', high: 28, low: 25 },
      { day: 'Wed', icon: '🌧️', high: 27, low: 24 },
      { day: 'Thu', icon: '⛅', high: 29, low: 25 },
      { day: 'Fri', icon: '☀️', high: 31, low: 26 },
    ],
    default: [
      { day: 'Mon', icon: '☀️', high: 25, low: 18 },
      { day: 'Tue', icon: '⛅', high: 23, low: 16 },
      { day: 'Wed', icon: '🌧️', high: 20, low: 14 },
      { day: 'Thu', icon: '⛅', high: 22, low: 15 },
      { day: 'Fri', icon: '☀️', high: 26, low: 17 },
    ],
  }
  const key = city.toLowerCase().replace(/\s/g, '')
  return forecasts[key] || forecasts['default']
}
