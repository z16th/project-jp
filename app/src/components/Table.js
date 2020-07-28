import React, { useState, useEffect } from "react"
import CharAnimation from "./KanjiAnimation"
import kanas from "../utils/kana-all.json"
import grids from "../utils/grids-all.json"
import "./styles/Table.css"
import { useParams } from "react-router-dom"

export default function Table() {
  const { syllabary, type } = useParams()
  const [renderAnimations, setRenderAnimations] = useState(false)
  const [romajiStyle, setRomajiStyle] = useState("")

  useEffect(() => {
    if (syllabary === "romaji") {
      setRomajiStyle("romaji-style")
    }
  }, [syllabary])

  const handleAnimButton = () => {
    setRenderAnimations((state) => !state)
  }

  const charAsFont = (charObj) => {
    return <span className="flex-center">{charObj[`${syllabary}`]}</span>
  }

  const charAsAnim = (charObj) => {
    if (syllabary !== "romaji")
      return charObj.utf16[`${syllabary}`].map((utf16) => (
        <CharAnimation key={utf16} name={utf16} />
      ))
    return null
  }

  const renderTableChars = (charObj) => {
    if (syllabary === "romaji") {
      return (
        <div
          key={charObj.romaji}
          className={`kana flex-center ${charObj.romaji} ${charObj.class}`}
          style={{ gridArea: charObj.romaji }}
        >
          {charAsFont(charObj)}
        </div>
      )
    }
    return (
      <div
        key={charObj.romaji}
        className={`kana flex-center ${charObj.romaji} ${charObj.class}`}
        style={{ gridArea: charObj.romaji }}
      >
        {renderAnimations ? charAsAnim(charObj) : charAsFont(charObj)}
      </div>
    )
  }

  const renderTableHeaders = (headersArray) => {
    return (
      <>
        {headersArray.map(({ char, coord }) => (
          <div
            key={coord}
            className={`${char} tab-head flex-center noselect`}
            style={{ gridArea: coord }}
          >
            {char}
          </div>
        ))}
      </>
    )
  }

  const renderAnimButton = () => {
    if (syllabary === "romaji") return null
    return (
      <button
        className="description button noselect"
        type="button"
        onClick={handleAnimButton}
      >
        {!renderAnimations ? "Ver animaciones" : "Ver caracteres"}
      </button>
    )
  }

  return (
    <section className="table-section">
      {renderAnimButton()}
      <section
        className={`table flex-center ${romajiStyle}`}
        style={grids[`${type}`].gridStyle}
      >
        {renderTableHeaders(grids[`${type}`].headers)}
        {kanas
          .filter((kana) => kana.type === type)
          .map((kana) => renderTableChars(kana))}
      </section>
    </section>
  )
}