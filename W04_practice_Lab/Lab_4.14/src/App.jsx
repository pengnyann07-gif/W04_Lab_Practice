import { useState, useEffect } from "react";
import './App.css';

// Header component
function Header({ title }) {
  return (
    <header className="bg-slate-800 p-6 rounded-t-lg mb-4">
      <h1 className="text-3xl font-bold text-yellow-500 text-center uppercase tracking-widest">
        {title}
      </h1>
    </header>
  );
}

// Time component (time only)
function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-cyan-400 text-2xl font-mono text-center mb-4">
      {time}
    </div>
  );
}

// Info component (static text)
function Info() {
  return (
    <p className="bg-slate-900 p-4 rounded-b-lg text-slate-300 text-sm leading-relaxed text-center">
      Did you know? <br />
      The implementation of Greenwich Mean Time was the first step to determine the time zone 
      of other countries in regard to GMT+0, while the concept of Coordinated Universal Time (UTC) 
      was designed to provide a more accurate timekeeping system. Nevertheless, both of these 
      time standards are widely used in the world for a similar purpose of time coordination.
    </p>
  );
}

// App component
function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header title="The amazing atomic clock" />
      <Time />
      <Info />
    </div>
  );
}

export default App;
