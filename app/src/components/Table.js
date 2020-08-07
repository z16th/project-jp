/** @jsxFrag React.Fragment */
import React, { useState, useRef } from "react"
import { useParams } from "react-router-dom"
import CharAnimation from "./CharAnimation"
import kanas from "../utils/json/kana-all.json"
import grids from "../utils/json/grids-all.json"
import {
  TableElement1,
  TableElement2,
  TableHeader,
  KanaTable,
  gray,
  yellow,
  blue,
  pink,
} from "../utils"

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
        <button className="anim-btn" onClick={handleAnimButton}>
          {!renderAnimations ? "Ver animaciones" : "Ver caracteres"}
        </button>
      ) : null}

      <KanaTable
        className={`table`}
        style={grids[`${type}`].gridStyle}
        color={color.current}
      >
        {RenderTableHeaders(grids[`${type}`].headers)}
        {kanas
          .filter((kana) => kana.type === type)
          .map((kana) => RenderTableChars(kana, syllabary, canRenderAnimations))}
      </KanaTable>
    </div>
  )
}

const RenderTableHeaders = (headersArray) => {
  return (
    <>
      {headersArray.map(({ char, coord }) => (
        <TableHeader
          key={coord}
          className={`${char} tab-head flex-center noselect`}
          style={{ gridArea: coord }}
        >
          {char}
        </TableHeader>
      ))}
    </>
  )
}

const RenderTableChars = (charObj, syllabary, condition) => {
  return (
    <div
      key={charObj.romaji}
      className={`kana flex-center char-${charObj.romaji} ${charObj.class}`}
      style={{ gridArea: charObj.romaji }}
    >
      {condition ? (
        <CharAsAnim charObj={charObj} syllabary={syllabary} />
      ) : (
        <CharAsFont charObj={charObj} syllabary={syllabary} />
      )}
    </div>
  )
}

const CharAsFont = ({ charObj, syllabary }) => {
  if (syllabary === "romaji" || charObj.type === "extendido") {
    return (
      <TableElement2 className="char flex-center">
        {charObj[`${syllabary}`]}
      </TableElement2>
    )
  }
  return (
    <TableElement1 className="char flex-center on-hover">
      {charObj[`${syllabary}`]}
    </TableElement1>
  )
}

const CharAsAnim = ({ charObj, syllabary }) => {
  if (syllabary !== "romaji")
    return charObj.utf16[`${syllabary}`].map((utf16) => (
      <CharAnimation key={utf16} name={utf16} />
    ))
  return null
}
