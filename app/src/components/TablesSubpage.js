import React from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import Table from "./Table"
import { capitalize } from "../utils/vanilla"

const defaultSyllabaries = ["hiragana", "katakana", "romaji"]

const defaultTypes = ["basico", "diacritico", "combinacion", "extendido"]

const translate = {
  basico: "basic",
  diacritico: "diacritic",
  combinacion: "combination",
  extendido: "extended",
}

export default function TablesSubpage() {
  const { search } = useLocation()
  const { silabario, tipo } = queryString.parse(search)
  const syllabariesSelection =
    silabario !== undefined
      ? defaultSyllabaries.filter((e) => silabario.includes(e))
      : [...defaultSyllabaries]
  const typesSelection =
    tipo !== undefined
      ? defaultTypes.filter((e) => tipo.includes(e))
      : [...defaultTypes]
  const translatedTypesSelection = typesSelection.map(
    (type) => (type = translate[`${type}`])
  )

  return (
    <div className="content">
      <p>{silabario}</p>
      <p>{tipo}</p>
      <p>{translatedTypesSelection}</p>
      {syllabariesSelection.map((syllabary) => (
        <div className={`syllabary ${syllabary}`} key={syllabary}>
          <h1 className="title">{capitalize(syllabary)}</h1>
          <Table
            key={syllabary}
            syllabary={syllabary}
            types={
              syllabary === "hiragana"
                ? translatedTypesSelection.filter((e) => e !== "extended")
                : translatedTypesSelection
            }
          />
        </div>
      ))}
    </div>
  )
}
