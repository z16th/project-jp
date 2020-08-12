import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "../styling"
import NavBar from "./NavBar"
import HomePage from "./HomePage"
import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import Footer from "./Footer"
import FourOhFour from "./FourOhFour"

const links = [
  {
    to: "/",
    exact: true,
    icon: "https://img.icons8.com/ios-filled/32/ffffff/torii.png",
    alt: "botón - inicio",
    label: "INICIO",
  },
  {
    to: "/silabarios",
    exact: false,
    icon: "https://img.icons8.com/ios-filled/32/ffffff/koi-fish.png",
    alt: "botón - página de silabarios",
    label: "SILABARIOS",
  },
  {
    to: "/kanji",
    exact: false,
    icon: "https://img.icons8.com/ios-filled/28/ffffff/origami.png",
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

        <Footer />
      </Layout>
    </Router>
  )
}
