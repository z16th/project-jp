import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/App.css"

import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import LolzSocial from "./LolzSocial"
import Disclaimer from "./Disclaimer"
import HomePage from "./HomePage"
import NavBar from "./NavBar"

function App() {
  return (
    <Router>
      <div id="App">
        <NavBar />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/silabarios">
          <SyllabaryPage />
        </Route>
        <Route path="/kanji">
          <KanjiPage />
        </Route>
      </div>
      <Disclaimer />
      <LolzSocial />
    </Router>
  )
}

export default App
