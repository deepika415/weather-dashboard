function Forecast({ forecast, unit }) {
  const displayTemp = (temp) =>
    unit === 'C' ? `${temp}°` : `${Math.round(temp * 9 / 5 + 32)}°`

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#94a3b8', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5-Day Forecast</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {forecast.map((item, index) => (
          <div key={index} style={{ background: '#1e293b', borderRadius: '12px', padding: '16px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', border: '1px solid #334155' }}>
            <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>{item.day}</span>
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#f1f5f9' }}>{displayTemp(item.high)}</span>
            <span style={{ fontSize: '13px', color: '#64748b' }}>{displayTemp(item.low)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
