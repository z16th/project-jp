import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import ToggleTables from "./ToggleTables"
import Table from "./Table"
import { capitalize } from "../utils/vanilla"
import { Highlight } from "../styling"

const defaultSyllabaries = ["hiragana", "katakana", "romaji"]

const defaultSpanishTypes = ["basico", "diacritico", "combinacion", "extendido"]

const translateToEnglish = {
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
      ? defaultSpanishTypes.filter((e) => tipo.includes(e))
      : [...defaultSpanishTypes]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="content">
      <h1>Selección</h1>
      <Highlight>
        <ToggleTables syllabary={syllabarySelection} type={typeSelection} />
      </Highlight>
      {syllabarySelection.map((syllabary) => (
        <div
          key={syllabary}
          className={`syllabary ${syllabary} flex-center column`}
        >
          <h1 className="title">{capitalize(syllabary)}</h1>
          {typeSelection
            .map((type) => translateToEnglish[`${type}`])
            .map((type) => {
              return syllabary === "hiragana" && type === "extended" ? (
                <h2 key={type}>No contiene caracteres extendidos</h2>
              ) : (
                <div key={type} className={`type ${type} flex-center column`}>
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
