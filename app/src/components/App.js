import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "../styling"
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
    exact: true,
    icon: "https://img.icons8.com/emoji/32/000000/house-emoji.png",
    alt: "botón - inicio",
    label: "INICIO",
  },
  {
    to: "/silabarios",
    exact: false,
    icon:
      "https://img.icons8.com/emoji/32/000000/japanese-symbol-for-beginner-emoji.png",
    alt: "botón - página de silabarios",
    label: "SILABARIOS",
  },
  {
    to: "/kanji",
    exact: false,
    icon:
      "https://img.icons8.com/emoji/32/000000/japanese-passing-grade-button-emoji.png",
    alt: "botón - página de kanji",
    label: "KANJI",
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
