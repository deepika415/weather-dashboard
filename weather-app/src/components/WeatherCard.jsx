function WeatherCard({ data, unit, onToggleUnit }) {
  const displayTemp = (temp) =>
    unit === 'C' ? `${temp}°C` : `${Math.round(temp * 9 / 5 + 32)}°F`

  return (
    <div style={{ background: 'linear-gradient(135deg, #1e3a5f, #1e293b)', borderRadius: '16px', padding: '28px', marginBottom: '20px', border: '1px solid #334155' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '600', color: '#f1f5f9' }}>{data.city}, {data.country}</h2>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>{data.condition}</p>
        </div>
        <button style={{ background: '#334155', color: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '8px 14px', fontSize: '13px' }} onClick={onToggleUnit}>
          Switch to °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '6px' }}>
        <span style={{ fontSize: '56px' }}>{data.icon}</span>
        <span style={{ fontSize: '64px', fontWeight: '300', color: '#f1f5f9' }}>{displayTemp(data.temp)}</span>
      </div>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>Feels like {displayTemp(data.feels_like)}</p>
      <div style={{ display: 'flex', gap: '12px' }}>
        {[
          { icon: '💧', value: `${data.humidity}%`, label: 'Humidity' },
          { icon: '💨', value: `${data.wind} km/h`, label: 'Wind' },
          { icon: '👁️', value: `${data.visibility} km`, label: 'Visibility' },
        ].map((stat) => (
          <div key={stat.label} style={{ flex: 1, background: '#0f172a', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '20px' }}>{stat.icon}</span>
            <span style={{ fontSize: '16px', fontWeight: '500', color: '#f1f5f9' }}>{stat.value}</span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherCard
