/**@jsx jsx */
import words from "../utils/json/words.json"
import { Japanify } from "./Japanify"
import { dictionaryTypes } from "../utils/vanilla"
import { jsx } from "@emotion/core"
import { wotd } from "../styling"

export default function WordOfTheDay() {
  const wordIndex = words.length - 1
  const current = words[wordIndex]
  const defaultLanguage = "es"

  return (
    <div id="wotd" css={wotd}>
      <h1 className="title">Palabra del día</h1>
      <h2 className="word">
        <Japanify word={current.word} furigana={current.furigana} />
      </h2>
      <h1>{current.romaji}</h1>
      <h4 className="type">
        {dictionaryTypes[`${defaultLanguage}`][`${current.type}`]}
      </h4>
      <h3 className="meaning">
        {current.meaning[`${defaultLanguage}`].join(", ")}
      </h3>
    </div>
  )
}
