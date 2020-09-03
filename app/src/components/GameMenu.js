import React, { useState } from "react"
import PropTypes from "prop-types"
import MenuRow from "./MenuRow"

export default function GameMenu({ data, dispatch }) {
  const [tabType, setTabType] = useState("hiragana")

  const handleHiraganaButton = () => {
    setTabType("hiragana")
  }
  const handleKatakanaButton = () => {
    setTabType("katakana")
  }

  return (
    <div id="game-menu">
      <button type="button" onClick={handleHiraganaButton}>
        Hiragana
      </button>
      <button type="button" onClick={handleKatakanaButton}>
        Katakana
      </button>
      <div>
        {data.map((item, i) =>
          item.syllabary === tabType ? (
            <MenuRow key={i} index={i} dispatch={dispatch} {...item} />
          ) : null
        )}
      </div>
    </div>
  )
}

GameMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      syllabary: PropTypes.string,
      type: PropTypes.string,
      kanas: PropTypes.arrayOf(PropTypes.string),
      checked: PropTypes.bool,
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
}
