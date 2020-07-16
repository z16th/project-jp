import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Inicio</Link>
      <Link to="/kanji">Kanji</Link>
      <Link to="/silabarios/hiragana">Silabarios</Link>
    </nav>
  )
}
