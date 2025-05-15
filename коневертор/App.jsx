import { useEffect, useState } from 'react';

const CURRENCIES = ['USD', 'EUR', 'RUB'];

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('RUB');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const convert = async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
        );
        const data = await res.json();

        if (data.result !== undefined) {
          setResult(data.result.toFixed(2));
        } else {
          setResult('—');
        }
      } catch (err) {
        console.error('Ошибка при конвертации:', err);
        setResult('Ошибка');
      }
    };

    convert();
  }, [from, to, amount]);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#1e1e1e',
      color: 'white',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: '#2c2c2c',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Конвертер валют</h1>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginRight: '0.5rem', padding: '0.3rem' }}
          />
          <select value={from} onChange={(e) => setFrom(e.target.value)} style={{ padding: '0.3rem' }}>
            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <span style={{ margin: '0 10px' }}>→</span>
          <select value={to} onChange={(e) => setTo(e.target.value)} style={{ padding: '0.3rem' }}>
            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <h2>
          {amount} {from} = <span style={{ fontWeight: 'bold' }}>{result}</span> {to}
        </h2>
      </div>
    </div>
  );
}

export default App;
