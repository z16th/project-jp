import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Layout } from "../styling"

import NavBar from "./NavBar"
import Footer from "./Footer"

import { ReactComponent as Torii } from "../utils/icons/icons8-torii.svg"
import { ReactComponent as Koi } from "../utils/icons/icons8-koi-fish.svg"
import { ReactComponent as Origami } from "../utils/icons/icons8-origami.svg"
import { ReactComponent as RiceBowl } from "../utils/icons/icons8-rice-bowl.svg"

const HomePage = React.lazy(() => import("./HomePage"))
const History = React.lazy(() => import("./History"))
const SyllabaryPage = React.lazy(() => import("./SyllabaryPage"))
const KanjiPage = React.lazy(() => import("./KanjiPage"))
const FourOhFour = React.lazy(() => import("./FourOhFour"))
const PractiKana = React.lazy(() => import("./PractiKana"))

const links = [
  {
    to: "/",
    exact: true,
    label: "INICIO",
    Icon: Torii,
  },
  {
    to: "/silabarios",
    exact: false,
    label: "SILABARIOS",
    Icon: Koi,
  },
  {
    to: "/kanji",
    exact: false,
    label: "KANJI",
    Icon: Origami,
  },
  {
    to: "/practikana",
    exact: false,
    label: "PRACTIKANA",
    Icon: RiceBowl,
  },
]

export default function App() {
  return (
    <Router>
      <Layout id="App">
        <NavBar id="main-navbar" links={links} />

        <React.Suspense fallback={<div style={{ height: "100vh" }} />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/historial">
              <History />
            </Route>
            <Route path="/silabarios">
              <SyllabaryPage />
            </Route>
            <Route path="/kanji">
              <KanjiPage />
            </Route>
            <Route path="/practikana">
              <PractiKana />
            </Route>
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </React.Suspense>

        <Footer />
      </Layout>
    </Router>
  )
}
