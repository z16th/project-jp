import React from "react"
import { useParams } from "react-router-dom"
import CustomLink from "./CustomLink"
import PropTypes from "prop-types"
import CharAnimation from "./CharAnimation"
import Table from "./Table"
import { TableHeader, TableElement1, TableElement2 } from "../styling"

const syllabaries = ["hiragana", "katakana", "romaji"]
const types = ["basico", "dakuten", "combinacion"]
const typesExtended = ["basico", "dakuten", "combinacion", "extendido"]

export const Tables = () => {
  const { syllabary } = useParams()
  const hiraganaTable = () => {
    return types.map((type) => <Table key={type} type={type} />)
  }
  const restOfTables = () => {
    return typesExtended.map((type) => <Table key={type} type={type} />)
  }

  return (
    <div className="content">
      {syllabaries.some((e) => e === syllabary) ? (
        <h1 className="text-center">{syllabary.toUpperCase()}</h1>
      ) : (
        <div className="flex-center column">
          <h1>Selecciona un silabario</h1>
          <CustomLink to="/silabarios">Volver</CustomLink>
        </div>
      )}
      {syllabary === "hiragana" ? hiraganaTable() : null}
      {(syllabary === "katakana" || syllabary === "romaji") && restOfTables()}
    </div>
  )
}

export const TableHeaders = (headers) => {
  return (
    <>
      {headers.map(({ char, coord }) => (
        <TableHeader
          key={coord}
          className={`${char} tab-head flex-center noselect`}
          style={{ gridArea: coord }}
        >
          {char}
        </TableHeader>
      ))}
    </>
  )
}

export const TableChars = (char, syllabary, condition) => {
  return (
    <div
      key={char.romaji}
      className={`kana flex-center char-${char.romaji} ${char.class}`}
      style={{ gridArea: char.romaji }}
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
  if (syllabary === "romaji" || char.type === "extendido") {
    return (
      <TableElement2 className="char flex-center">
        {char[`${syllabary}`]}
      </TableElement2>
    )
  }
  return (
    <TableElement1 className="char flex-center on-hover">
      {char[`${syllabary}`]}
    </TableElement1>
  )
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
