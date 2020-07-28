import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { blue } from "../utils"
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
      <span>
        <span style={{ marginRight: "4px" }} role="img" aria-label="inicio">
          🏠
        </span>
        INICIO
      </span>
    ),
  },
  {
    to: "/silabarios",
    children: (
      <span>
        <span style={{ marginRight: "4px" }} role="img" aria-label="silabarios">
          🎎
        </span>
        SILABARIOS
      </span>
    ),
  },
  {
    name: "kanji",
    to: "/kanji",
    children: (
      <span>
        <span style={{ marginRight: "4px" }} role="img" aria-label="kanji">
          🈷️
        </span>
        KANJI
      </span>
    ),
  },
]

const appStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px minmax(auto, 1fr);
  grid-template-areas: "navbar" "content";
`

function App() {
  return (
    <Router>
      <div id="App" css={appStyle}>
        <NavBar
          id="main-navbar"
          links={links}
          color={blue}
          style={{ gridArea: "navbar" }}
        />
        <Switch>
          <Route exact path="/">
            <HomePage className="content" style={{ gridArea: "content" }} />
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
