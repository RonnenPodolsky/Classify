import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <nav className='flex justify-between items-center	 flex-row bg-[#333] px-4'>
        <p>Classify Logo</p>
        <p>Login</p>
      </nav>
      <main></main>
      <footer className='flex items-center justify-center'>
        &copy; Elior D, Lavi D, Ronnen P
      </footer>
    </div>
  );
}

export default App;
