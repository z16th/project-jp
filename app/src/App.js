import React from 'react'
import './App.css'

import SyllabaryPage from './components/SyllabaryPage'
import KanjiPage from './components/KanjiPage';
import LolzSocial from './components/LolzSocial';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="App">
      <KanjiPage />
      <Disclaimer />
      <LolzSocial />
    </div>
  );
}

export default App;
