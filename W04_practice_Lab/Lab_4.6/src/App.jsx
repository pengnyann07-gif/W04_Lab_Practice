import { useState } from 'react'
import './App.css'

const StatusBadge = ({ active, onToggle }) => (
 <button onClick={onToggle}>{active ? 'Done' : 'pending'}</button>
);

function App() {
  const [isDone, setIsDone] = useState(false);
  return (
  <div>
      <h1>Task Status</h1><StatusBadge active={isDone} onToggle={() => setIsDone(!isDone)} />
    </div>
  );
}

export default App
