//* *@jsx jsx */
import React, { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { jsx } from "@emotion/core"
import { menuButtons } from "../styling"

export default function MenuButtons({
  current,
  syllabary,
  type,
  game,
  onSelectAll,
}) {
  const [isSelectAll, setIsSelectAll] = useState(
    current().some((e) => e.checked === false)
  )

  const handleSelection = () => {
    onSelectAll(isSelectAll)
  }

  useEffect(() => {
    setIsSelectAll(current().some((e) => e.checked === false))
  }, [current])

  return (
    <div className="menu-buttons" css={menuButtons}>
      <div className="syllabary-buttons">
        <button
          type="button"
          className={`hiragana ${
            syllabary.state === "hiragana" ? "active" : ""
          }`}
          onClick={() => syllabary.update("hiragana")}
        >
          Hiragana
        </button>
        <button
          type="button"
          className={`katakana ${
            syllabary.state === "katakana" ? "active" : ""
          }`}
          onClick={() => syllabary.update("katakana")}
        >
          Katakana
        </button>
      </div>
      <div className="type-buttons">
        <button
          type="button"
          className={`type-button basic ${
            type.state === "basic" ? "active" : ""
          }`}
          onClick={() => type.update("basic")}
        >
          Básico
        </button>
        <button
          type="button"
          className={`type-button ${
            type.state === "diacritic" ? "active" : ""
          }`}
          onClick={() => type.update("diacritic")}
        >
          Diacrítico
        </button>
        <button
          type="button"
          className={`type-button ${
            type.state === "combination" ? "active" : ""
          }`}
          onClick={() => type.update("combination")}
        >
          Combinación
        </button>
        <button
          type="button"
          className={`type-button extended ${
            type.state === "extended" ? "active" : ""
          }`}
          onClick={() => {
            syllabary.update("katakana")
            type.update("extended")
          }}
        >
          Extendido
        </button>
      </div>
      <div className="action-buttons">
        {" "}
        <button type="button" className="select-all" onClick={handleSelection}>
          {isSelectAll ? "Seleccionar Sección" : "Deseleccionar Sección"}
        </button>
        {game.canPlay() ? (
          <button type="button" className="start active" onClick={game.start}>
            Comenzar
          </button>
        ) : (
          <button type="button" className="start" disabled>
            Comenzar
          </button>
        )}
      </div>
    </div>
  )
}
