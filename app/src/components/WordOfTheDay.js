/** @jsx jsx */
import { jsx } from "@emotion/core"
import words from "../utils/json/words.json"
import Japanify from "./Japanify"
import { grammaticalTypes } from "../utils/vanilla"
import { wotd } from "../styling"

export default function WordOfTheDay({ index }) {
  const wordIndex = index || words.length - 1
  const current = words[wordIndex]
  const defaultLanguage = "es"

  return (
    <div id="wotd" css={wotd}>
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
      <div className="date">{current.date}</div>
    </div>
  )
}
