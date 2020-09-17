/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react"
import { jsx } from "@emotion/core"
import gameRows from "../utils/json/game-rows.json"
import { shuffleArray } from "../utils/vanilla"
import { PageStyled, Note, Example, Callout, R, H, menuStyle } from "../styling"

import Game from "./Game"
import MenuButtons from "./MenuButtons"
import MenuRows from "./MenuRows"
import FontButtons from "./FontButtons"

export default function PractiKana() {
  const kanasToGuess = useRef([])
  const [rows, setRows] = useState(gameRows)
  const [isPlaying, setIsPlaying] = useState(false)
  const [syllabary, setSyllabary] = useState("hiragana")
  const [type, setType] = useState("basic")
  const [quickMode, setQuickMode] = useState(false)
  const [fonts, setFonts] = useState([])

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
            <div id="game-menu" css={menuStyle}>
              <MenuButtons
                current={currentRows}
                syllabary={{ state: syllabary, update: setSyllabary }}
                type={{ state: type, update: setType }}
                quickMode={{
                  state: quickMode,
                  update: () => setQuickMode((value) => !value),
                }}
                game={{ canPlay, start: handlePlayClicked }}
                onSelectAll={handleAllClicked}
              />
              <FontButtons currentFonts={fonts} setCurrentFonts={setFonts} />
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
              fonts={fonts}
              gameSettings={{
                gameOver: () => setIsPlaying(false),
                quickMode,
              }}
            />
          )}
        </div>
      </div>
    </PageStyled>
  )
}

function Content() {
  return (
    <>
      <h1>Introducción</h1>
      <p>
        Practicar los conocimientos adquiridos es una parte importante del
        aprendizaje especialmente en el japonés, ya que existe una gran cantidad
        de caracteres y puede resultar complicado memorizarlos todos. En esta
        sección podrás poner a prueba tu memoria, lo que te ayudará a
        familiarizarte con los kanas rápidamente.
      </p>
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
          Activar el <b>Modo Rápido</b> hará que tu respuesta sea enviada
          automáticamente si es correcta
        </li>
        <li>
          <b>Selecciona</b> con los botones correspondientes las tipografías que
          quieras practicar
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
        <li>
          La tipografía de la letra cambiará aleatoriamente si elegiste una o
          más en el menú
        </li>
        <Note>
          <b>Nota:</b> Si no se selecciona tipografía, se usará Noto Sans JP por
          defecto
        </Note>
      </ul>
      <Callout>
        El rōmaji de entrada por teclado puede ser diferente para algunos
        caracteres en comparación con el romaji de lectura.
      </Callout>
      <Example>
        <H>を</H> se lee como <R>o</R> pero en teclado se escribe
        &quot;wo&quot;, ya que escribir <R>o</R> resulta en <H>お</H>
      </Example>
      <p>
        En este juego algunos caracteres que pueden ser introducidos de
        distintas maneras debido a que toma en cuenta diferentes sistemas de
        romanización y métodos de entrada.
      </p>
      <Example>
        <H>し</H> puede ser escrito como <R>shi</R> o &quot;si&quot;{" "}
      </Example>
    </>
  )
}
