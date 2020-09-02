import React, { useEffect, useState, useLayoutEffect } from "react"
import TextInput from "./TextInput"
import { shuffleArray } from "../utils/vanilla"

const test = ["あ", "タ", "チ", "ツ", "テ"]

export default function EmptyPage() {
  const shuffledKanas = shuffleArray(test)

  return (
    <div id="empty-page" style={{ height: "100vh", width: "100vw" }}>
      <Game kanas={shuffledKanas} />
    </div>
  )
}

function Game({ kanas }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const gameOver = currentIndex === kanas.length

  const input = {
    currentKana: !gameOver ? kanas[currentIndex] : {},
    nextKana() {
      if (!gameOver) {
        setCurrentIndex((value) => value + 1)
      }
      return
    },
    updateScore() {
      setScore((value) => value + 1)
      return
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
      {!gameOver ? <TextInput {...input} /> : null}
    </div>
  )
}
