import React, { useState } from "react"
import { isRomaji } from "../utils/vanilla"
import kanas from "../utils/json/kana-as-input.json"

export default function TextInput({ currentKana, nextKana, updateScore }) {
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    const match = kanas.find(
      (kana) => kana.hiragana === currentKana || kana.katakana === currentKana
    )
    event.preventDefault()
    console.log("input value: ", value)
    console.log("matched: ", match)
    if (match) {
      if (
        match.romaji === value ||
        (match.alternative !== "" && match.alternative === value)
      ) {
        updateScore()
      }
    }
    nextKana()
    setValue("")
  }

  const handleChange = (event) => {
    if (isRomaji(event.target.value)) {
      setValue(event.target.value)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="kana">
          Kana:
          <input
            id="kana"
            type="text"
            value={value}
            onChange={handleChange}
            maxLength={3}
            autoFocus
          />
        </label>
        <input type="submit" value=">" />
      </form>
    </>
  )
}
