/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import KanjiAnimation from "./CharAnimation"
import { kanjiCard } from "../utils"

export default function KanjiCard({ data, readingMode }) {
  const { character, utf16, number, strokes, meaning } = { ...data }
  const [showAnimation, setShowAnimation] = React.useState(false)
  const [displayType, setDisplayType] = React.useState(readingMode)

  const handleAnimationClick = () => {
    setShowAnimation((state) => !state)
  }

  const handleReadingClick = () => {
    return displayType === "Romaji"
      ? setDisplayType("Kana")
      : setDisplayType("Romaji")
  }

  return (
    <div css={kanjiCard}>
      <div className="left">
        {!showAnimation && <div className="char">{character}</div>}
        {showAnimation && (
          <KanjiAnimation name={utf16} width={120} height={120} />
        )}
        <button
          className="strokes"
          type="button"
          onClick={handleAnimationClick}
        >
          <b>Trazos:</b> {strokes}
        </button>
        <div className="number">
          <b>No:</b> {number}
        </div>
      </div>

      <div className="right">
        <button className="reading" type="button" onClick={handleReadingClick}>
          <div className="onyomi">
            <b>{displayType !== "Romaji" ? "音読み" : "Onyomi"}: </b>{" "}
            {data[`onyomi${displayType}`]}
          </div>
          <div className="kunyomi">
            <b>{displayType !== "Romaji" ? "訓読み" : "Kunyomi"}: </b>{" "}
            {data[`kunyomi${displayType}`]}
          </div>
        </button>
        <div className="meaning">
          <b>Significado:</b> {meaning}
        </div>
      </div>
    </div>
  )
}

KanjiCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  readingMode: PropTypes.string,
}

KanjiCard.defaultProps = {
  readingMode: "Romaji",
}
