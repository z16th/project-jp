import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import SyllabaryPage from './components/SyllabaryPage'
import KanjiPage from './components/KanjiPage';
import LolzSocial from './components/LolzSocial';
import Disclaimer from './components/Disclaimer';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div id="App">
        <NavBar />
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/kanji'>
          <KanjiPage />
        </Route>
        <Route path='/silabarios'>
          <SyllabaryPage />
        </Route>
      </div>
      <Disclaimer />
      <LolzSocial />
    </Router>
  );
}

export default App;
