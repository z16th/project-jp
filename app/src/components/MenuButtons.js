//* *@jsx jsx */
import React, { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { jsx } from "@emotion/core"
import { menuButtons } from "../styling"

export default function MenuButtons({
  current,
  syllabary,
  type,
  onPlay,
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
          className={`type-button ${type.state === "basic" ? "active" : ""}`}
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
          className={`type-button ${type.state === "extended" ? "active" : ""}`}
          onClick={() => type.update("extended")}
        >
          Extendido
        </button>
      </div>
      <button
        type="button"
        className="select-all-button"
        onClick={handleSelection}
      >
        {isSelectAll ? "Seleccionar Todo" : "Deseleccionar Todo"}
      </button>
      <button type="button" className="start-button" onClick={onPlay}>
        Comenzar
      </button>
    </div>
  )
}
