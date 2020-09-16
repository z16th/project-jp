/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import kanaData from "../utils/json/kana-as-input.json"
import { validateRomaji } from "../utils/vanilla"
import { game } from "../styling"

import useScrollOnLoad from "../hooks/useScrollOnLoad"
import { ReactComponent as QuickLogo } from "../utils/icons/icons8-quick-mode-on.svg"

export default function Game({ kanas: kanaQueue, fonts, gameSettings }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const gameOver = currentIndex === kanaQueue.length
  const [score, setScore] = useState(0)
  const [input, setInput] = useState("")
  const [currentFont, setCurrentFont] = useState(null)
  const findKanaMatch = useCallback(
    () =>
      kanaData.find(
        (kana) =>
          kana.hiragana === kanaQueue[currentIndex] ||
          kana.katakana === kanaQueue[currentIndex]
      ),
    [currentIndex, kanaQueue]
  )

  const getRandomFont = useCallback(() => {
    return fonts[Math.floor(Math.random() * fonts.length)]
  }, [fonts])

  const validateInput = useCallback(() => {
    if (input === "") return
    const match = findKanaMatch()

    if (match) {
      if (match.romaji === input || match.alternative === input) {
        setScore((current) => current + 1)
        if (gameSettings.quickMode) {
          setTimeout(() => {
            setCurrentIndex((current) => current + 1)
            setInput("")
          }, 120)
        }
      }
    }
    setCurrentFont(getRandomFont())
  }, [input, findKanaMatch, gameSettings.quickMode, getRandomFont])

  const handleSubmit = (event) => {
    event.preventDefault()
    validateInput()
    setCurrentIndex((value) => value + 1)
    setInput("")
  }

  const handleChange = (event) => {
    if (validateRomaji(event.target.value.toLowerCase())) {
      setInput(event.target.value.toLowerCase())
    }
  }

  useScrollOnLoad()

  useEffect(() => {
    setCurrentFont(getRandomFont())
  }, [getRandomFont])

  useEffect(() => {
    if (gameSettings.quickMode) {
      validateInput()
    }
  }, [input, gameSettings.quickMode, validateInput])

  return (
    <div id="game" css={game}>
      <section className="header">
        <button type="button" className="back" onClick={gameSettings.gameOver}>
          Volver
        </button>
        {!gameOver ? (
          <div className="total">
            {`${currentIndex + 1}/${kanaQueue.length}`}
          </div>
        ) : null}
        {gameSettings.quickMode ? (
          <div className="empty">
            <QuickLogo />
          </div>
        ) : (
          <div className="empty" />
        )}
      </section>

      {gameOver ? (
        <>
          <div className="percent">
            {((score / kanaQueue.length) * 100).toFixed()}%
          </div>
          <div className="score">{`Puntaje: ${score}/${kanaQueue.length}`}</div>
        </>
      ) : null}
      <div className="kana" style={{ fontFamily: currentFont }}>
        {kanaQueue[currentIndex]}
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
    </div>
  )
}

Game.propTypes = {
  kanas: PropTypes.arrayOf(PropTypes.string).isRequired,
  gameSettings: PropTypes.shape({
    gameOver: PropTypes.func,
    quickMode: PropTypes.bool,
  }).isRequired,
}
