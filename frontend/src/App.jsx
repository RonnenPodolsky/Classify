import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <main>
        <h1>Classify</h1>
      </main>
      <footer>Elior D, Lavi D, Ronnen P</footer>
    </div>
  );
}

export default App;
