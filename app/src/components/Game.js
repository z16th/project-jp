import React, { useState } from "react"
import PropTypes from "prop-types"

import TextInput from "./TextInput"

export default function Game({ kanas, endGame }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const gameOver = currentIndex === kanas.length
  const input = {
    currentKana: !gameOver ? kanas[currentIndex] : "",
    nextKana() {
      if (!gameOver) {
        setCurrentIndex((value) => value + 1)
      }
    },
    updateScore() {
      setScore((value) => value + 1)
    },
  }

  return (
    <div id="game">
      {gameOver ? <p>Fin del juego</p> : null}

      <div className="score">Puntaje: {score}</div>
      <div className="total">
        {!gameOver ? currentIndex + 1 : null}/{kanas.length}
      </div>
      <div className="kana">{kanas[currentIndex]}</div>

      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        !gameOver ? <TextInput {...input} /> : null
      }
      <button type="button" onClick={endGame}>
        Volver
      </button>
    </div>
  )
}

Game.propTypes = {
  kanas: PropTypes.arrayOf(PropTypes.string).isRequired,
}
