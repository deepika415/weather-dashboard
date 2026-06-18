import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input.trim()) onSearch(input.trim())
  }

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
      <input
        style={{ flex: 1, padding: '12px 16px', borderRadius: '10px', border: '1px solid #334155', background: '#1e293b', color: '#f1f5f9', fontSize: '15px', outline: 'none' }}
        type="text"
        placeholder="Search city... (try Hyderabad, Mumbai, London)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button
        style={{ padding: '12px 20px', borderRadius: '10px', border: 'none', background: '#3b82f6', color: '#fff', fontSize: '15px', fontWeight: '500' }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? '...' : '🔍 Search'}
      </button>
    </div>
  )
}

export default SearchBar
