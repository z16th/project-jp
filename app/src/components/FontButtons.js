/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { fontButtons } from "../styling"

const fonts = ["Mk POP", "Asobi Memogaki", "Komorebi Gothic", "Umeboshi"]

export default function FontButtons({ currentFonts, setCurrentFonts }) {
  const handleClick = (index) => {
    if (!currentFonts.includes(fonts[index])) {
      const newArr = [...currentFonts]
      newArr.push(fonts[index])
      setCurrentFonts(newArr)
    } else {
      const newArr = currentFonts.filter((e) => e !== fonts[index])
      setCurrentFonts(newArr)
    }
  }

  return (
    <div className="font-buttons" css={fontButtons}>
      {fonts.map((e, i) => (
        <button
          key={e}
          type="button"
          style={{ fontFamily: fonts[i], fontSize: "3rem" }}
          className={currentFonts.includes(fonts[i]) ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          あ
        </button>
      ))}
    </div>
  )
}

FontButtons.propTypes = {
  currentFonts: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentFonts: PropTypes.func.isRequired,
}
