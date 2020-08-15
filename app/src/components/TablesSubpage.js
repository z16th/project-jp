import React from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import ToggleTables from "./ToggleTables"
import { capitalize } from "../utils/vanilla"
import { Highlight } from "../styling"
import Table from "./Table"

const defaultSyllabaries = ["hiragana", "katakana", "romaji"]

const defaultTypes = ["basico", "diacritico", "combinacion", "extendido"]

const translate = {
  basico: "basic",
  diacritico: "diacritic",
  combinacion: "combination",
  extendido: "extended",
}

const title = {
  basic: "Básico",
  diacritic: "Diacrítico",
  combination: "Combinación",
  extended: "Extendido",
}

export default function TablesSubpage() {
  const { search } = useLocation()
  const { silabario, tipo } = queryString.parse(search)
  const syllabarySelection =
    silabario !== undefined
      ? defaultSyllabaries.filter((e) => silabario.includes(e))
      : [...defaultSyllabaries]
  const typeSelection =
    tipo !== undefined
      ? defaultTypes.filter((e) => tipo.includes(e))
      : [...defaultTypes]
  const translatedTypeSelection = typeSelection.map(
    (type) => (type = translate[`${type}`])
  )
  const filteredSelection =
    translatedTypeSelection[0] === "extended"
      ? syllabarySelection.filter((e) => e !== "hiragana")
      : [...syllabarySelection]

  return (
    <div className="content">
      <h1>Selección</h1>
      <Highlight>
        <ToggleTables />
      </Highlight>
      {syllabarySelection.map((syllabary) => (
        <div className={`syllabary ${syllabary}`} key={syllabary}>
          <h1 className="title">{capitalize(syllabary)}</h1>
          {translatedTypeSelection.map((type) => {
            return syllabary === "hiragana" && type === "extended" ? (
              <h2 key={type}>No contiene caracteres extendidos</h2>
            ) : (
              <div key={type}>
                <h2>{title[`${type}`]}</h2>
                <Table syllabary={syllabary} type={type} />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
