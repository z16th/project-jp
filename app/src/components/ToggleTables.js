/**@jsx jsx*/
import { useEffect, useState, useReducer } from "react"
import { Redirect } from "react-router-dom"
import queryString from "query-string"
import { jsx } from "@emotion/core"
import { toggleTables } from "../styling"
import { lookFor } from "../utils/vanilla"

export default function ToggleTables() {
  const [query, setQuery] = useState(null)
  const [state, dispatch] = useReducer(tablesReducer, {
    silabario: [],
    tipo: [],
  })

  useEffect(() => {
    if (state.silabario.length === 3) state.silabario = []
    if (state.tipo.length === 4) state.tipo = []
    const queryState = queryString.stringify(state)
    setQuery(queryState)
  }, [state])

  return (
    <div className="toggle-tables" css={toggleTables}>
      {query !== null ? <Redirect to={`/silabarios/tablas?${query}`} /> : null}
      <div className="syllabary-buttons buttons">
        <button
          type="button"
          className={state.silabario.length === 0 ? "active" : ""}
          onClick={() => dispatch({ type: "silabario" })}
        >
          Todos los silabarios
        </button>
        <button
          type="button"
          className={lookFor("hiragana", state.silabario) ? "active" : ""}
          onClick={() => dispatch({ type: "hiragana" })}
        >
          Hiragana
        </button>
        <button
          type="button"
          className={lookFor("katakana", state.silabario) ? "active" : ""}
          onClick={() => dispatch({ type: "katakana" })}
        >
          Katakana
        </button>
        <button
          type="button"
          className={lookFor("romaji", state.silabario) ? "active" : ""}
          onClick={() => dispatch({ type: "romaji" })}
        >
          Romaji
        </button>
      </div>

      <div className="type-buttons buttons">
        <button
          type="button"
          className={state.tipo.length === 0 ? "active" : ""}
          onClick={() => dispatch({ type: "tipo" })}
        >
          Todos los tipos
        </button>
        <button
          type="button"
          className={lookFor("basico", state.tipo) ? "active" : ""}
          onClick={() => dispatch({ type: "basico" })}
        >
          Básico
        </button>
        <button
          type="button"
          className={lookFor("diacritico", state.tipo) ? "active" : ""}
          onClick={() => dispatch({ type: "diacritico" })}
        >
          Diacrítico
        </button>
        <button
          type="button"
          className={lookFor("combinacion", state.tipo) ? "active" : ""}
          onClick={() => dispatch({ type: "combinacion" })}
        >
          Combinación
        </button>
        <button
          type="button"
          className={lookFor("extendido", state.tipo) ? "active" : ""}
          onClick={() => dispatch({ type: "extendido" })}
        >
          Extendido
        </button>
      </div>
    </div>
  )
}

function tablesReducer(state, action) {
  if (action.type === "silabario" || action.type === "tipo")
    return { ...state, [`${action.type}`]: [] }
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
}
