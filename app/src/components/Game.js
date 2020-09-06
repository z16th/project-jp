/**@jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { game } from "../styling"

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
    <div id="game" css={game}>
      {gameOver ? <p>{((score / kanas.length) * 100).toFixed()}%</p> : null}

      <div className="total">
        {!gameOver ? `${currentIndex + 1}/${kanas.length}` : null}
      </div>
      <div className="kana">{kanas[currentIndex]}</div>
      <div className="score">
        Puntaje: {!gameOver ? score : `${score}/${kanas.length}`}
      </div>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        !gameOver ? <TextInput {...input} /> : null
      }
      <button type="button" className="back" onClick={endGame}>
        Volver
      </button>
    </div>
  )
}

Game.propTypes = {
  kanas: PropTypes.arrayOf(PropTypes.string).isRequired,
}
