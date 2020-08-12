/**@jsx jsx */
import { kanaOrKanji } from "../utils/vanilla"
import { jsx } from "@emotion/core"
import { japaneseChar,   } from "../styling"

export default function JapaneseChar({ char, furigana }) {
  return (
    <span className="jp-char" css={japaneseChar}>
      {furigana !== null && char !== furigana ? (
        <span className="furigana">{furigana}</span>
      ) : null}
      <Classify>{char}</Classify>
    </span>
  )
}

const Classify = ({ children }) => {
  return <span className={`char ${kanaOrKanji(children)}`}>{children}</span>
}
