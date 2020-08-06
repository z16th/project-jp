import React from "react"
import PropTypes from "prop-types"
import KanjiAnimation from "./CharAnimation"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { pink, kanjiSansFont, kanjiSerifFont } from "../utils"

const cardStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: ${kanjiSansFont};
  width: 328px;
  height: 220px;
  margin: 20px;
  border-radius: 8px;
  background-color: ${pink.background};
  @media (max-width: 320px) {
    margin: 20px 0px;
    width: 300px;
    height: 204px;
  }
  @media (max-width: 280px) {
    margin: 20px 0px;
    width: 280px;
    height: 204px;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 106px;
    height: 204px;
    border-radius: 4px;
    background-color: ${pink.regular};
    .char {
      font-size: 5rem;
      &:hover {
        font-family: ${kanjiSerifFont};
      }
    }
    .strokes {
      border: 0px;
      padding: 0px;
      color: white;
      padding: 4px 0px;
      margin-top: 32px;
      background-color: ${pink.dark};
    }
    .number {
      padding: 4px 0px;
    }
  }
  .right {
    display: grid;
    width: 198px;
    height: 204px;
    .reading {
      width: 198px;
      height: 102px;
      border: 0px;
      padding: 0px 8px;
      border-radius: 4px;
      color: white;
      background-color: ${pink.dark};
    }
  }
`

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
    <div css={cardStyle}>
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
            <b>On-yomi:</b> {data[`onyomi${displayType}`]}
          </div>
          <div className="kunyomi">
            <b>Kun-yomi:</b> {data[`kunyomi${displayType}`]}
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
  mode: PropTypes.string,
}

KanjiCard.defaultProps = {
  readingMode: "Romaji",
}
