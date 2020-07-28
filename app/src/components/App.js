import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import LolzSocial from "./LolzSocial"
import Disclaimer from "./Disclaimer"
import HomePage from "./HomePage"
import NavBar from "./NavBar"

const links = [
  {
    name: "home",
    to: "/",
    children: (
      <span style={{ margin: "8px" }}>
        <span role="img" aria-label="home">
          🏠
        </span>
        Inicio
      </span>
    ),
  },
  {
    name: "syllabaries",
    to: "/silabarios",
    children: (
      <span style={{ margin: "8px" }}>
        <span role="img" aria-label="syllabaries">
          🎎
        </span>
        Silabarios
      </span>
    ),
  },
  {
    name: "kanji",
    to: "/kanji",
    children: (
      <span style={{ margin: "8px" }}>
        <span role="img" aria-label="kanji">
          🈷️
        </span>
        Kanji
      </span>
    ),
  },
]

function App() {
  return (
    <Router>
      <div id="App">
        <NavBar id="main-navbar" links={links} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/silabarios">
            <SyllabaryPage />
          </Route>
          <Route path="/kanji">
            <KanjiPage />
          </Route>
          <Route path="*">
            <h1 className="text-center">404</h1>
          </Route>
        </Switch>
      </div>
      <Disclaimer />
      <LolzSocial />
    </Router>
  )
}

export default App
