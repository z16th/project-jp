import React from 'react';
import './App.css';
import PractiKana from './components/PractiKana'
import Syllabaries from './components/Syllabaries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Syllabaries />
      </header>
    </div>
  );
}

export default App;
