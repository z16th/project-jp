/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import words from "../../public/words.json"
import Japanify from "./Japanify"
import { grammaticalTypes } from "../utils/vanilla"
import { wotd } from "../styling"

export default function WordOfTheDay({ index }) {
  const current = words[index]
  const defaultLanguage = "es"

  return (
    <div id="wotd" css={wotd}>
      <div className="date">{current.date}</div>
      <div className="word">
        <Japanify word={current.word} furigana={current.furigana} />
      </div>
      <div className="romaji">{current.romaji}</div>
      <div className="type">
        {grammaticalTypes[`${defaultLanguage}`][`${current.type}`]}
      </div>
      <div className="meaning">
        {current.meaning[`${defaultLanguage}`].join(", ")}
      </div>
    </div>
  )
}

WordOfTheDay.propTypes = {
  index: PropTypes.number,
}

WordOfTheDay.defaultProps = {
  index: words.length - 1,
}
