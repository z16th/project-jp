import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import KanjiAnimation from "./KanjiAnimation"
import kanas from "../utils/kana-all.json"
import grids from "../utils/grids-all.json"
import "./styles/Table.css"

const types = {
  simple: "Simple",
  dakuten: "Dakuten",
  combination: "Combinación",
}

export default function Table({ syllabary, type, setType }) {
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

  const handleNextButton = () => {
    if (type === "simple") return setType("dakuten")
    if (type === "dakuten") return setType("combination")
    if (type === "combination") return setType("simple")
    return null
  }

  const handlePrevButton = () => {
    if (type === "simple") return setType("combination")
    if (type === "combination") return setType("dakuten")
    if (type === "dakuten") return setType("simple")
    return null
  }

  const charAsFont = (charObj) => {
    return <span className="flex-center">{charObj[`${syllabary}`]}</span>
  }

  const charAsAnim = (charObj) => {
    if (syllabary !== "romaji")
      return charObj.utf16[`${syllabary}`].map((utf16) => (
        <KanjiAnimation key={utf16} name={utf16} />
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
      <div className="flex-center noselect">
        <button
          className="description"
          type="button"
          onClick={handlePrevButton}
        >
          {"<"}
        </button>
        <p className="noselect">{types[type]}</p>
        <button
          className="description"
          type="button"
          onClick={handleNextButton}
        >
          {">"}
        </button>
      </div>
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

Table.propTypes = {
  syllabary: PropTypes.string.isRequired,
  type: PropTypes.string,
  setType: PropTypes.func.isRequired,
}

Table.defaultProps = {
  type: "simple",
}
