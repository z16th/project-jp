/** @jsx jsx */
import { useEffect, useState, useReducer } from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import { jsx } from "@emotion/core"
import { toggleTables } from "../styling"
import { lookFor } from "../utils/vanilla"

function tablesReducer(state, action) {
  if (action.type === "merge") {
    return { ...state, ...action.payload }
  }
  if (
    action.type === "hiragana" ||
    action.type === "katakana" ||
    action.type === "romaji"
  ) {
    const newState = state.silabario.some((e) => e === `${action.type}`)
      ? { silabario: state.silabario.filter((e) => e !== `${action.type}`) }
      : { silabario: [...state.silabario, `${action.type}`] }
    return { ...state, ...newState }
  }
  if (
    action.type === "basico" ||
    action.type === "diacritico" ||
    action.type === "combinacion" ||
    action.type === "extendido"
  ) {
    const newState = state.tipo.some((e) => e === `${action.type}`)
      ? { tipo: state.tipo.filter((e) => e !== `${action.type}`) }
      : { tipo: [...state.tipo, `${action.type}`] }
    return { ...state, ...newState }
  }
  return state
}

export default function ToggleTables({ syllabary: silabario, type: tipo }) {
  const history = useHistory()
  const [query, setQuery] = useState(null)
  const [state, dispatch] = useReducer(tablesReducer, {
    silabario: [...silabario],
    tipo: [...tipo],
  })

  useEffect(() => {
    setQuery(queryString.stringify(state))
  }, [state])

  useEffect(() => {
    if (query !== null) history.push(`/silabarios/tablas?${query}`)
  }, [query, history])

  const handleClick = (actionType) => {
    dispatch({ type: actionType })
  }

  return (
    <div className="toggle-tables" css={toggleTables}>
      <div className="syllabary-buttons buttons">
        <button type="button" disabled>
          Silabarios
        </button>
        <button
          type="button"
          className={
            lookFor("hiragana", state.silabario)
              ? "hiragana active"
              : "hiragana"
          }
          onClick={() => handleClick("hiragana")}
        >
          Hiragana
        </button>
        <button
          type="button"
          className={
            lookFor("katakana", state.silabario)
              ? "katakana active"
              : "katakana"
          }
          onClick={() => handleClick("katakana")}
        >
          Katakana
        </button>
        <button
          type="button"
          className={
            lookFor("romaji", state.silabario) ? "romaji active" : "romaji"
          }
          onClick={() => handleClick("romaji")}
        >
          Romaji
        </button>
      </div>

      <div className="type-buttons buttons">
        <button type="button" disabled>
          Tipos
        </button>
        <button
          type="button"
          className={lookFor("basico", state.tipo) ? "basic active" : "basic"}
          onClick={() => handleClick("basico")}
        >
          Básico
        </button>
        <button
          type="button"
          className={
            lookFor("diacritico", state.tipo) ? "diacritic active" : "diacritic"
          }
          onClick={() => handleClick("diacritico")}
        >
          Diacrítico
        </button>
        <button
          type="button"
          className={
            lookFor("combinacion", state.tipo)
              ? "combination active"
              : "combination"
          }
          onClick={() => handleClick("combinacion")}
        >
          Combinación
        </button>
        <button
          type="button"
          className={
            lookFor("extendido", state.tipo) ? "extended active" : "extended"
          }
          onClick={() => handleClick("extendido")}
        >
          Extendido
        </button>
      </div>
    </div>
  )
}

ToggleTables.propTypes = {
  syllabary: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
}
