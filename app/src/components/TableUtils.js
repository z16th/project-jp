import React from "react"
import PropTypes from "prop-types"
import CharAnimation from "./CharAnimation"
import { TableHeader, TableElement1, TableElement2 } from "../styling"

export const TableChars = (char, syllabary, condition) => {
  const { romaji, hiragana, katakana, row, column, attributes } = char
  return (
    <div
      key={`${romaji}-${hiragana}-${katakana}`}
      className={`kana kana-${romaji} ${attributes}`}
      style={{ gridArea: `x${column}-y${row}` }}
    >
      {condition ? (
        <CharAsAnim char={char} syllabary={syllabary} />
      ) : (
        <CharAsFont char={char} syllabary={syllabary} />
      )}
    </div>
  )
}

export const CharAsFont = ({ char, syllabary }) => {
  if (syllabary === "romaji" || char.type === "extended") {
    return <TableElement2>{char[`${syllabary}`]}</TableElement2>
  }
  return <TableElement1>{char[`${syllabary}`]}</TableElement1>
}

CharAsFont.propTypes = {
  char: PropTypes.shape({
    romaji: PropTypes.string,
    hiragana: PropTypes.string,
    katakana: PropTypes.string,
    utf16: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    type: PropTypes.string,
    class: PropTypes.string,
  }).isRequired,
  syllabary: PropTypes.string.isRequired,
}

export const CharAsAnim = ({ char, syllabary }) => {
  if (syllabary !== "romaji")
    return char.utf16[`${syllabary}`].map((utf16) => (
      <CharAnimation key={utf16} name={utf16} />
    ))
  return null
}

CharAsAnim.propTypes = {
  char: PropTypes.shape({
    romaji: PropTypes.string,
    hiragana: PropTypes.string,
    katakana: PropTypes.string,
    utf16: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    type: PropTypes.string,
    class: PropTypes.string,
  }).isRequired,
  syllabary: PropTypes.string.isRequired,
}
