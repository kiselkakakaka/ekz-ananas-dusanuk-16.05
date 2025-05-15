import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const res = await fetch('http://localhost:8000/backend/counter.php', {
      credentials: 'include'
    });
    const data = await res.json();
    setCount(data.count);
  };

  const updateCount = async (action) => {
    const res = await fetch('http://localhost:8000/backend/counter.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ action }),
    });
    const data = await res.json();
    setCount(data.count);
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>Счётчик: {count}</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => updateCount('plus')}>+1</button>
        <button onClick={() => updateCount('minus')}>-1</button>
      </div>
    </div>
  );
}

export default App;
