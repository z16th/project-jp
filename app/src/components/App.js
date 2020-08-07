import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "../utils"
import NavBar from "./NavBar"
import HomePage from "./HomePage"
import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import Disclaimer from "./Disclaimer"
import LolzSocial from "./LolzSocial"
import FourOhFour from "./FourOhFour"

const links = [
  {
    to: "/",
    children: (
      <React.Fragment>
        <span>
          <img src="https://img.icons8.com/emoji/20/000000/house-emoji.png" alt="botón - inicio"/>
        </span>
        <span className="desc" style={{ marginLeft: "4px" }}>
          INICIO
        </span>
      </React.Fragment>
    ),
  },
  {
    to: "/silabarios",
    children: (
      <React.Fragment>
        <span>
          <img src="https://img.icons8.com/emoji/20/000000/japanese-symbol-for-beginner-emoji.png" alt="botón - página de silabarios"/>
        </span>
        <span className="desc" style={{ marginLeft: "4px" }}>
          SILABARIOS
        </span>
      </React.Fragment>
    ),
  },
  {
    to: "/kanji",
    children: (
      <React.Fragment>
        <span>
          <img src="https://img.icons8.com/emoji/20/000000/japanese-passing-grade-button-emoji.png" alt="botón - página de kanji"/>
        </span>
        <span className="desc" style={{ marginLeft: "4px" }}>
          KANJI
        </span>
      </React.Fragment>
    ),
  },
]

export default function App() {
  return (
    <Router>
      <Layout id="App">
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
            <FourOhFour />
          </Route>
        </Switch>

        <Disclaimer />
        <LolzSocial />
      </Layout>
    </Router>
  )
}
