import React, { useState, useRef } from "react"
import { shuffleArray } from "../utils/vanilla"
import gameRows from "../utils/json/game-rows.json"
import { PageStyled, Example, R } from "../styling"

import Game from "./Game"
import MenuButtons from "./MenuButtons"
import MenuRows from "./MenuRows"

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

  const handleAllClicked = (value) => {
    const rowsToUpdate = []
    rows.forEach((row, i) => {
      if (row.syllabary === syllabary && row.type === type) rowsToUpdate.push(i)
    })
    updateRows(rowsToUpdate, value)
  }

  const handlePlayClicked = () => {
    let data = rows.filter((obj) => obj.checked === true)

    if (!data.length > 0) return

    data = data
      .map((match) => match.kanas)
      .map((kanas) => [...kanas])
      .flat()
    kanasToGuess.current = shuffleArray(data)
    setIsPlaying(true)
  }

  return (
    <PageStyled id="practikana-page">
      <div className="main-content">
        <div className="content">
          {!isPlaying ? <Content /> : null}

          {!isPlaying ? (
            <div id="game-menu">
              <MenuButtons
                current={currentRows}
                syllabary={{ state: syllabary, update: setSyllabary }}
                type={{ state: type, update: setType }}
                onPlay={handlePlayClicked}
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
            <Game kanas={kanasToGuess.current} />
          )}
        </div>
      </div>
    </PageStyled>
  )
}

function Content() {
  return (
    <>
      <h1>PractiKana</h1>
      <p>
        En esta página podrás repasar tus conocimientos sobre los silabarios.
      </p>
      <h2>Cómo usar</h2>
      <ul>
        <li>
          <b>Selecciona</b> las filas de kanas que quieras repasar
        </li>
        <li>
          Puedes cambiar entre cada <b>silabario</b> con presionando en la
          pestaña correspondiente
        </li>
        <li>
          Cuando estés listo presiona <b>Comenzar</b>
        </li>
      </ul>
      <ul>
        <li>
          Escribe el <b>rōmaji</b> correspondiente para cada kana
        </li>
      </ul>
      <p>
        Recuerda que el rōmaji de entrada por teclado es ligeramente diferente
        para algunos caracteres.
      </p>
      <Example>
        を a pesar de ser leído como "o" se tiene que escribir <R>wo</R> ya que
        escribir <R>o</R> resulta en お
      </Example>
      <p>Hay caracteres que pueden ser introducidos de distintas maneras.</p>
      <Example>
        し puede ser escrito como <R>shi</R> o "si"{" "}
      </Example>
    </>
  )
}
