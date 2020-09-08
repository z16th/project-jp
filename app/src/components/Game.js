/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import kanaData from "../utils/json/kana-as-input.json"
import { validateRomaji } from "../utils/vanilla"
import { game } from "../styling"

import useScrollOnLoad from "../hooks/useScrollOnLoad"

export default function Game({ kanas: kanaQueue, endGame }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const gameOver = currentIndex === kanaQueue.length
  const [score, setScore] = useState(0)
  const [input, setInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input === "") return

    const match = kanaData.find(
      (kana) =>
        kana.hiragana === kanaQueue[currentIndex] ||
        kana.katakana === kanaQueue[currentIndex]
    )

    if ((match.romaji === input || match.alternative === input) && !gameOver) {
      setScore((value) => value + 1)
      setCurrentIndex((value) => value + 1)
    }
    setInput("")
  }

  const handleChange = (event) => {
    if (validateRomaji(event.target.value)) {
      setInput(event.target.value)
    }
  }

  useScrollOnLoad()

  return (
    <div id="game" css={game}>
      {gameOver ? <p>{((score / kanaQueue.length) * 100).toFixed()}%</p> : null}

      <div className="total">
        {!gameOver ? `${currentIndex + 1}/${kanaQueue.length}` : null}
      </div>
      <div className="kana">{kanaQueue[currentIndex]}</div>
      <div className="score">
        Puntaje: {!gameOver ? score : `${score}/${kanaQueue.length}`}
      </div>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        !gameOver ? (
          <form onSubmit={handleSubmit}>
            <input
              id="text-input"
              type="text"
              value={input}
              onChange={handleChange}
              maxLength={3}
              placeholder="rōmaji"
              autoFocus
            />
            <input type="submit" value=">" />
          </form>
        ) : null
      }
      <button type="button" className="back" onClick={endGame}>
        Volver
      </button>
    </div>
  )
}

Game.propTypes = {
  kanas: PropTypes.arrayOf(PropTypes.string).isRequired,
  endGame: PropTypes.func.isRequired,
}
