import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import { getMockWeather, getMockForecast } from './mockData'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [unit, setUnit] = useState('C')

  const handleSearch = (city) => {
    setLoading(true)
    setError('')
    setTimeout(() => {
      const weatherData = getMockWeather(city)
      const forecastData = getMockForecast(city)
      if (!weatherData) {
        setError(`City "${city}" not found. Try: Hyderabad, Mumbai, Delhi, London, New York`)
        setWeather(null)
        setForecast(null)
      } else {
        setWeather(weatherData)
        setForecast(forecastData)
      }
      setLoading(false)
    }, 800)
  }

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#f1f5f9', marginBottom: '6px' }}>🌤️ Weather Dashboard</h1>
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>Search any city to get current weather & forecast</p>
        <SearchBar onSearch={handleSearch} loading={loading} />
        {loading && <p style={{ textAlign: 'center', color: '#94a3b8', padding: '20px' }}>Fetching weather...</p>}
        {error && (
          <div style={{ background: '#450a0a', border: '1px solid #7f1d1d', color: '#fca5a5', borderRadius: '10px', padding: '14px 18px', fontSize: '14px', marginBottom: '20px' }}>
            {error}
          </div>
        )}
        {weather && !loading && (
          <>
            <WeatherCard data={weather} unit={unit} onToggleUnit={() => setUnit(unit === 'C' ? 'F' : 'C')} />
            <Forecast forecast={forecast} unit={unit} />
          </>
        )}
        {!weather && !loading && !error && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '64px' }}>🌍</div>
            <p style={{ color: '#475569', fontSize: '16px', marginTop: '16px' }}>Search a city to see its weather</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
