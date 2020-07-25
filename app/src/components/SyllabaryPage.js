import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import NavBar from "./NavBar"
import SyllabaryType from "./SyllabaryType"
import Table from "./Table"

const links = [
  {
    to: `/hiragana/basico`,
    children: <span>Hiragana</span>,
  },
  {
    to: `/katakana/basico`,
    children: <span>Katakana</span>,
  },
  {
    to: `/romaji/basico`,
    children: <span>Romaji</span>,
  },
]

export default function SyllabaryPage() {
  const { path, url } = useRouteMatch()
  return (
    <div id="syllabary-page" className="flex-center column text-center">
      <NavBar id="syllabary-navbar" links={links} path={path} />
      <Route exact path={`${url}/`}>
        Cool stuff
      </Route>
      <Route path={`${url}/:syllabary`}></Route>
      <Route path={`${url}/:syllabary/:type`}>
        <SyllabaryType />
        <Table />
      </Route>
    </div>
  )
}
