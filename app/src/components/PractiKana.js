/**@jsx jsx*/
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react"
import { jsx } from "@emotion/core"
import gameRows from "../utils/json/game-rows.json"
import { shuffleArray } from "../utils/vanilla"
import {
  PageStyled,
  Example,
  Callout,
  R,
  H,
  menuStyle,
  sidebar,
} from "../styling"

import Sidebar from "./Sidebar"
import Game from "./Game"
import MenuButtons from "./MenuButtons"
import MenuRows from "./MenuRows"
import useOnLoadAction from "../hooks/useOnLoadAction"

export default function PractiKana() {
  const kanasToGuess = useRef([])
  const [rows, setRows] = useState(gameRows)
  const [isPlaying, setIsPlaying] = useState(false)
  const [syllabary, setSyllabary] = useState("hiragana")
  const [type, setType] = useState("basic")

  const currentRows = () =>
    rows.filter((e) => e.syllabary === syllabary && e.type === type)

  const updateRows = (indexes, value) => {
    const newRows = JSON.parse(JSON.stringify(rows))
    indexes.forEach((i) => (newRows[i].checked = value))
    setRows(newRows)
  }

  const canPlay = () => {
    const data = rows.filter((obj) => obj.checked === true)
    return data.length > 0
  }

  const handleAllClicked = (value) => {
    const rowsToUpdate = []
    rows.forEach((row, i) => {
      if (row.syllabary === syllabary && row.type === type) rowsToUpdate.push(i)
    })
    updateRows(rowsToUpdate, value)
  }

  const handlePlayClicked = () => {
    let data = rows.filter((obj) => obj.checked === true)
    console.log("returned")
    if (!data.length > 0) return

    data = data
      .map((match) => match.kanas)
      .map((kanas) => [...kanas])
      .flat()
    kanasToGuess.current = shuffleArray(data)
    setIsPlaying(true)
  }

  useOnLoadAction(handlePlayClicked)

  return (
    <PageStyled id="practikana-page">
      <Sidebar from=".main-content" select="h1, h2" />
      <div className="main-content">
        <div className="content">
          {!isPlaying ? (
            <div id="game-menu" css={menuStyle}>
              <MenuButtons
                current={currentRows}
                syllabary={{ state: syllabary, update: setSyllabary }}
                type={{ state: type, update: setType }}
                game={{ canPlay: canPlay, start: handlePlayClicked }}
                onSelectAll={handleAllClicked}
              />
              <MenuRows
                rows={rows}
                updateRows={updateRows}
                syllabary={syllabary}
                type={type}
              />
            </div>
          ) : (
            <Game
              kanas={kanasToGuess.current}
              endGame={() => setIsPlaying(false)}
            />
          )}

          {!isPlaying ? <Content /> : null}
        </div>
      </div>
    </PageStyled>
  )
}

function Content() {
  return (
    <>
      <h1>Introducción</h1>
      <p>En esta página podrás poner a prueba tus conocimientos sobre kanas.</p>
      <h2>Cómo usar</h2>
      <h3>Menú</h3>
      <ul>
        <li>
          <b>Selecciona</b> las filas de kanas que quieras repasar
        </li>
        <li>
          Puedes cambiar entre cada <b>silabario</b> presionando en la pestaña
          correspondiente
        </li>
        <li>
          Cuando estés listo presiona <b>Comenzar</b>
        </li>
      </ul>
      <h3>Juego</h3>
      <ul>
        <li>
          Escribe el <b>rōmaji</b> correspondiente para cada kana
        </li>
      </ul>
      <Callout>
        El rōmaji de entrada por teclado es ligeramente diferente para algunos
        caracteres en comparación con el romaji de lectura.
      </Callout>
      <Example>
        <H>を</H> se lee como "o" pero se escribe <R>wo</R> en teclado ya que
        escribir <R>o</R> resulta en <H>お</H>
      </Example>
      <p>Hay caracteres que pueden ser introducidos de distintas maneras.</p>
      <Example>
        <H>し</H> puede ser escrito como <R>shi</R> o "si"{" "}
      </Example>
    </>
  )
}
