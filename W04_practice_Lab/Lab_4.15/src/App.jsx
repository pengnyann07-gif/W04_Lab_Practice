import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dollars] = useState(15);

  const convertToDong = (usd) => {
    return usd * 24560; 
  };

  const convertToEuro = (usd) => {
    return usd * 0.92;
  };

  return (
    <>
      {/* Logos from the Vite/React boilerplate */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Lab 4.15</h1>

      {/* The Device Conversions Card */}
      <div className="card conversion-card">
        <h2 style={{ color: '#E1BEE7', marginBottom: '20px' }}>DEVICE CONVERSIONS</h2>
        
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>
            CURRENT VALUE IN DOLLARS
          </label>
          <input className="lab-input" type="number" value={dollars} disabled />
        </div>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>
            VALUE IN DONG
          </label>
          <input className="lab-input" type="text" value={convertToDong(dollars)} disabled />
        </div>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>
            VALUE IN EURO
          </label>
          <input className="lab-input" type="text" value={convertToEuro(dollars)} disabled />
        </div>
      </div>
    </>
  )
}

export default App
