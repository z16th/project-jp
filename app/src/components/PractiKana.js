import React, { useState, useReducer, useRef } from "react"
import { shuffleArray } from "../utils/vanilla"
import rows from "../utils/json/game-rows.json"

import Game from "./Game"
import GameMenu from "./GameMenu"

const reducer = (state, action) => {
  const newState = [...state]
  switch (action.type) {
    case "check":
      newState[action.index] = { ...state[action.index], checked: true }
      return newState
    case "uncheck":
      newState[action.index] = { ...state[action.index], checked: false }
      return newState
    default:
      return state
  }
}

export default function PractiKana() {
  const kanasToGuess = useRef([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [state, dispatch] = useReducer(reducer, rows)

  const handleClick = () => {
    const data = state
      .filter((obj) => obj.checked === true)
      .map((property) => property.kanas)
      .map((arr) => [...arr])
      .flat()

    kanasToGuess.current = shuffleArray(data)
    setIsPlaying(true)
  }

  return (
    <div id="empty-page" style={{ height: "100vh", width: "100vw" }}>
      {!isPlaying ? (
        <>
          <GameMenu data={rows} dispatch={dispatch} />
          <button type="button" onClick={handleClick}>
            Comenzar
          </button>
        </>
      ) : (
        <Game kanas={kanasToGuess.current} />
      )}
    </div>
  )
}
