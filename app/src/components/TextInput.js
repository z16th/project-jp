import React, { useState } from "react"
import PropTypes from "prop-types"
import { isRomaji } from "../utils/vanilla"
import kanas from "../utils/json/kana-as-input.json"

export default function TextInput({ currentKana, nextKana, updateScore }) {
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value === "") return

    const match = kanas.find(
      (kana) => kana.hiragana === currentKana || kana.katakana === currentKana
    )
    if (match.romaji === value || match.alternative === value) {
      updateScore()
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
    <form onSubmit={handleSubmit}>
      <input
        id="text-input"
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={3}
        autoFocus
        placeholder="rōmaji"
      />
      <input type="submit" value=">" />
    </form>
  )
}

TextInput.propTypes = {
  currentKana: PropTypes.string.isRequired,
  nextKana: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
}
