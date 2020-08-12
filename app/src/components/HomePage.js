import React from "react"
import { PageStyled } from "../styling"
import WordOfTheDay from "./WordOfTheDay"

export default function HomePage() {
  return (
    <PageStyled id="home-page">
      <div className="main-content">
        <Content />
      </div>
    </PageStyled>
  )
}

const Content = () => {
  return (
    <div className="content">
      <h1>Inicio</h1>
      <hr />
      <WordOfTheDay />
    </div>
  )
}
