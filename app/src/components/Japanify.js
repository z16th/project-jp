import React from "react"
import JapaneseChar from "./JapaneseChar"

export default function Japanify({ word, furigana }) {
  const chars = [...word]
  const element = []
  chars.forEach((char, i) => {
    element.push(<JapaneseChar key={char + i} char={char} furigana={furigana[i]} />)
  })
  return [...element]
}
