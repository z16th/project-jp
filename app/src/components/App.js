import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { gray } from "../utils"
import NavBar from "./NavBar"
import HomePage from "./HomePage"
import SyllabaryPage from "./SyllabaryPage"
import KanjiPage from "./KanjiPage"
import LolzSocial from "./LolzSocial"
import Disclaimer from "./Disclaimer"

const links = [ 
  {
    to: "/",
    children: (
      <React.Fragment>
        <span role="img" aria-label="inicio">
          🏠
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
        <span role="img" aria-label="silabarios">
          🎎
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
        <span role="img" aria-label="kanji">
          🈷️
        </span>
        <span className="desc" style={{ marginLeft: "4px" }}>
          KANJI
        </span>
      </React.Fragment>
    ),
  },
]

const appStyle = css`
  width: 100%;
`

export default function App() {
  return (
    <Router>
      <div id="App" css={appStyle}>
        <NavBar
          id="main-navbar"
          links={links}
          color={gray}
          style={{ gridArea: "navbar" }}
        />
        <Switch>
          <Route exact path="/">
            <HomePage className="content" />
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
        <Disclaimer />
        <LolzSocial />
      </div>
    </Router>
  )
}
