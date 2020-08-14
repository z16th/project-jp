import React from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import ToggleTables from "./ToggleTables"
import Table from "./Table"
import { capitalize } from "../utils/vanilla"
import { Highlight } from "../styling"

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
      {search === "?silabario=hiragana&tipo=extendido" && (
        <h4>Hiragana no contiene caracteres extendidos</h4>
      )}
      {filteredSelection.map((syllabary) => (
        <div className={`syllabary ${syllabary}`} key={syllabary}>
          <h1 className="title">{capitalize(syllabary)}</h1>
          <Table
            key={syllabary}
            syllabary={syllabary}
            types={
              syllabary === "hiragana"
                ? translatedTypeSelection.filter((e) => e !== "extended")
                : translatedTypeSelection
            }
          />
        </div>
      ))}
    </div>
  )
}
