import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "../styling"

import NavBar from "./NavBar"
import HomePage from "./HomePage"
import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import Footer from "./Footer"
import FourOhFour from "./FourOhFour"

import { ReactComponent as torii } from "../utils/icons/icons8-torii.svg"
import { ReactComponent as koi } from "../utils/icons/icons8-koi-fish.svg"
import { ReactComponent as origami } from "../utils/icons/icons8-origami.svg"

const links = [
  {
    to: "/",
    exact: true,
    label: "INICIO",
    Icon: torii,
  },
  {
    to: "/silabarios",
    exact: false,
    label: "SILABARIOS",
    Icon: koi,
  },
  {
    to: "/kanji",
    exact: false,
    label: "KANJI",
    Icon: origami,
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

        <Footer />
      </Layout>
    </Router>
  )
}
