import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import kanas from "../utils/json/kana-all.json"
import grids from "../utils/json/grids-all.json"
import { TableHeaders, TableChars } from "./TableUtils"
import { KanaTable, gray, yellow, blue, pink } from "../styling"

export default function Table({ type }) {
  const { syllabary } = useParams()
  const [renderAnimations, setRenderAnimations] = useState(false)
  const canRenderAnimations = renderAnimations && syllabary !== "romaji"
  const color = useRef(gray.regular)

  if (syllabary === "hiragana") color.current = yellow
  if (syllabary === "katakana") color.current = blue
  if (syllabary === "romaji") color.current = pink

  const handleAnimButton = () => {
    setRenderAnimations((state) => !state)
  }

  return (
    <div className="flex-center column">
      <h2>{type.toUpperCase()}</h2>
      {syllabary !== "romaji" ? (
        <button type="button" className="anim-btn" onClick={handleAnimButton}>
          {!renderAnimations ? "Ver animaciones" : "Ver caracteres"}
        </button>
      ) : null}

      <KanaTable
        className="table"
        style={grids[`${type}`].gridStyle}
        color={color.current}
      >
        {TableHeaders(grids[`${type}`].headers)}
        {kanas
          .filter((kana) => kana.type === type)
          .map((kana) => TableChars(kana, syllabary, canRenderAnimations))}
      </KanaTable>
    </div>
  )
}

Table.propTypes = {
  type: PropTypes.string.isRequired,
}
