import { useState } from 'react'
import './App.css'

function App() {
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form>
      <input placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)}/>
      <p>{Title}: {desc}</p>

    </form>
      
  )
}

export default App
