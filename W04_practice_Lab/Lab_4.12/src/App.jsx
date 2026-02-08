import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Lab 4.12: Creating your first separate React component
function Header() {
  return (
    <header className="bg-slate-800 p-10 rounded-t-lg mb-4">
      <h1 className="text-3xl font-bold text-yellow-500 text-center uppercase tracking-widest">
        Welcome to this course!
      </h1>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Lab 4.12: Using the new Header component */}
      <Header />

      <main className="bg-slate-900 p-8 rounded-b-lg text-slate-300 text-sm leading-relaxed text-center">
        <p className="mb-4">
          React (also known as React.js or ReactJS) is a free and open-source front-end 
          JavaScript library for building user interfaces based on components. It is maintained by 
          Meta (formerly Facebook) and a community of individual developers and companies. 
          React can be used to develop single-page, mobile, or server-rendered applications 
          with frameworks like Next.js.
        </p>
        
        <p className="mb-6 italic">
          You can find the React doc at{' '}
          <a 
            href="https://react.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            https://react.dev/
          </a>
        </p>

        <div className="card border-t border-slate-700 pt-6">
          <button 
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
            onClick={() => setCount(count + 1)}
          >
            count is {count}
          </button>
        </div>
      </main>

      <div className="mt-8 flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-12" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-12 animate-spin-slow" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
