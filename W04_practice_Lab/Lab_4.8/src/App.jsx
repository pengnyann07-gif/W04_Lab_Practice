import { useState } from 'react';
import './App.css';

const ColorPicker = ({ onColorChange }) => (
  <input 
    type="color" 
    onChange={(e) => onColorChange(e.target.value)} 
  />
);

function App() {
  const [bg, setBg] = useState("#ffffff"); // initial white background

  return (
    <div 
      style={{ backgroundColor: bg, height: '100vh', padding: '20px' }}
    >
      <h1>Pick a background color!</h1>
      <ColorPicker onColorChange={setBg} />
    </div>
  );
}

export default App;
