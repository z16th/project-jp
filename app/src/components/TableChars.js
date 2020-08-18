import React from "react"
import PropTypes from "prop-types"
import CharAnimation from "./CharAnimation"
import { TableElement1, TableElement2 } from "../styling"

export default function TableChars({ char, syllabary, condition }) {
  const { romaji, row, column, attributes, utf16 } = char

  if (condition)
    return (
      <div
        className={`${syllabary} kana kana-${romaji} ${attributes}`}
        style={{ gridArea: `x${column}-y${row}` }}
      >
        {utf16[`${syllabary}`].map((code) => (
          <CharAnimation key={code} className="char-as-anim" name={code} />
        ))}
      </div>
    )
  else
    return (
      <div
        className={`${syllabary} kana kana-${romaji} ${attributes}`}
        style={{ gridArea: `x${column}-y${row}` }}
      >
        {syllabary === "romaji" || char.type === "extended" ? (
          <TableElement2 className="char-as-font">
            {char[`${syllabary}`]}
          </TableElement2>
        ) : (
          <TableElement1 className="char-as-font">
            {char[`${syllabary}`]}
          </TableElement1>
        )}
      </div>
    )
}

TableChars.propTypes = {
  char: PropTypes.shape({
    romaji: PropTypes.string,
    hiragana: PropTypes.string,
    katakana: PropTypes.string,
    type: PropTypes.string,
    attributes: PropTypes.string,
    row: PropTypes.string,
    column: PropTypes.string,
    utf16: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
  syllabary: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
}
