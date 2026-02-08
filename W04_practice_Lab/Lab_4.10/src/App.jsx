import { useState } from "react";
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Cherry"];

  const filteredItems = items.filter(item => item.includes(search));

  return (
    <div>
      <h1>Search Fruits</h1>

      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
