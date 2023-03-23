import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <p>Classify Logo</p>
        <p>Login</p>
      </nav>
      <main></main>
      <footer>&copy; Elior D, Lavi D, Ronnen P</footer>
    </div>
  );
}

export default App;
