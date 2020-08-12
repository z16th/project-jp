import React from "react"
import JapaneseChar from "./JapaneseChar"

export const Japanify = ({ word, furigana }) => {
  const chars = [...word]
  const element = []
  chars.map((char, i) => {
    element.push(<JapaneseChar key={char} char={char} furigana={furigana[i]} />)
  })
  return [...element]
}
