/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { kanaOrKanji } from "../utils/vanilla"
import { japaneseChar } from "../styling"

export default function JapaneseChar({ char, furigana }) {
  return (
    <span className="jp-char" css={japaneseChar}>
      {furigana !== null && char !== furigana ? (
        <span className="furigana">{furigana}</span>
      ) : null}
      <span className={`char ${kanaOrKanji(char)}`}>{char}</span>
    </span>
  )
}

JapaneseChar.propTypes = {
  char: PropTypes.string.isRequired,
  furigana: PropTypes.string,
}

JapaneseChar.defaultProps = {
  furigana: "",
}
