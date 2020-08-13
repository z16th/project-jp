/**@jsx jsx */
import words from "../utils/json/words.json"
import { Japanify } from "./Japanify"
import { grammaticalTypes } from "../utils/vanilla"
import { jsx } from "@emotion/core"
import { wotd, R } from "../styling"

export default function WordOfTheDay() {
  const wordIndex = words.length - 1
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
    </div>
  )
}
